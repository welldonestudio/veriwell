import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { arbitrumX86BaseUrl } from "@/src/features/verify/api";
import { getChainAndNetworkByChainId, shortenAddress } from "@/src/shared/lib/network";
import { Loader } from "@/src/widgets/Loader";
import { Button } from "@/src/shared/ui";

interface ContractHistory {
  id: number;
  chainId: string;
  contractAddress: string;
  classHash: string;
  compiledClassHash: string;
  declareTxHash: string;
  scarbVersion: string;
  compileTimestamp: number;
  verifyRequestAddress: string | null;
  verifiedTimestamp: number;
  createdAt: string;
  updatedAt: string;
}

const ITEMS_PER_PAGE = 5;

export const ContractHistory = () => {
  const [history, setHistory] = useState<ContractHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const totalPages = Math.ceil(history.length / ITEMS_PER_PAGE);

  const getStarknetContractHistory = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${arbitrumX86BaseUrl}/starknet/verifications/history`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setHistory(result);
    } catch (error) {
      throw new Error("Failed to get contract history");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // 페이지 전환 시 스크롤 초기화
  };

  const paginatedData = history.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    getStarknetContractHistory();
  }, []);

  return loading ? (
    <div className="my-20 p-4 w-[696px] flex justify-center">
      <Loader size={24} />
    </div>
  ) : (
    <div className="my-20 p-4 border rounded-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Chain</TableHead>
            <TableHead className="w-[100px]">Network</TableHead>
            <TableHead>Contract Address</TableHead>
            <TableHead>Scrab Version</TableHead>
            <TableHead className="text-right">Verified at</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => {
            const { chain, network } = getChainAndNetworkByChainId(item.chainId as any);

            const handleContractAddressOnClick = () => {
              router.push(`/verify?chain=${chain}&network=${network}&contractAddress=${item.contractAddress}`);
            };

            return (
              <TableRow key={index} className="cursor-pointer hover:opacity-70" onClick={handleContractAddressOnClick}>
                <TableCell className="text-left capitalize">{chain}</TableCell>
                <TableCell className="capitalize">{network}</TableCell>
                <TableCell className="underline">{shortenAddress(item.contractAddress, 12)}</TableCell>
                <TableCell>{item.scarbVersion}</TableCell>
                <TableCell className="text-right">{item.verifiedTimestamp}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
        <Button variant="ghost" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <span className="text-sm text-gray-500 ">
          Page {currentPage} of {totalPages}
        </span>
        <Button variant="ghost" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

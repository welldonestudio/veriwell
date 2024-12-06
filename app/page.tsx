"use client";
import { SearchContractWrapper } from "@/src/widgets/Landing/ui/search-contract";
import ProductTitle from "@/src/widgets/Landing/ui/product-title";
import { useMediaQuery } from "@/src/widgets/Stpper/lib/use-media-query";
import { ContractHistory } from "@/src/widgets/Landing/ui/contract-history";

export default function HomeWrapper({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const contractAddress = searchParams?.address;
  const isMobile = useMediaQuery("(max-width: 768px)");

  console.log("searchParams", searchParams);
  console.log("contractAddress", contractAddress);

  return (
    <div className="h-full flex flex-col items-center justify-center flex-1 px-4 text-center">
      {isMobile ? (
        <div className="font-bold text-lg">
          Due to the nature of the content, <br />
          this site does not offer a mobile version. <br />
          <br />
          Please access it on a PC.
        </div>
      ) : (
        <>
          <ProductTitle />
          <div className="relative mx-auto mt-12 flex rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50">
            <SearchContractWrapper contractAddress={contractAddress} />
          </div>
          <ContractHistory />
        </>
      )}
    </div>
  );
}

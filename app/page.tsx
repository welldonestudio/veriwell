import { SearchContractWrapper } from "@/src/widgets/Landing/ui/search-contract";
import Tools from "@/src/widgets/Landing/ui/verification-tools";
import ProductTitle from "@/src/widgets/Landing/ui/product-title";

export default async function HomeWrapper({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const contractAddress = searchParams?.address;
  return (
    <div className="h-full flex flex-col items-center justify-center flex-1 px-4 text-center">
      <ProductTitle />
      <div className="relative mx-auto mt-12 flex rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50">
        <SearchContractWrapper contractAddress={contractAddress} />
      </div>
    </div>
  );
}

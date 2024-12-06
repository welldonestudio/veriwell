import { StarknetChainId } from "@/src/features/verify/api";
import { isValidHexAddress, type Hex } from "@metamask/utils";

/**
 * Checks if an address is an ethereum one.
 *
 * @param address - An address.
 * @returns True if the address is an ethereum one, false otherwise.
 */
export const isEthAddress = (address: string): boolean => isValidHexAddress(address as Hex);

/**
 * Checks if an address is a Starknet one.
 *
 * @param address - An address.
 * @returns True if the address is a Starknet one, false otherwise.
 */
export const isStarknetAddressOrHash = (address: string): boolean => {
  // Starknet addresses are 64 characters long.
  const starknetAddressRegex = /^0x[a-fA-F0-9]{64}$/;
  // Starknet hashes are 62 ~ 64 characters long.
  const starknetHashRegex = /^0x[a-fA-F0-9]{62,64}$/;

  return starknetAddressRegex.test(address) || starknetHashRegex.test(address);
};

type ChainId = StarknetChainId;
export const getChainAndNetworkByChainId = (chainId: ChainId): { chain: string; network: string } => {
  switch (chainId) {
    case "0x534e5f4d41494e":
      return { chain: "starknet", network: "mainnet" };
    case "0x534e5f5345504f4c4941":
      return { chain: "starknet", network: "sepolia" };
    default:
      return { chain: "Unknown", network: "Unknown" };
  }
};

export const shortenAddress = (address: string, length = 6): string =>
  `${address.slice(0, length)}...${address.slice(-length)}`;

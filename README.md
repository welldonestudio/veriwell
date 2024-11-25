# Veriwell Frontend Project

## Overview

Veriwell is a Smart Contract Verification Platform designed to ensure security, transparency, and reliability in blockchain applications. This repository contains the frontend code for Veriwell, providing an intuitive and seamless interface for users to interact with the platform.

## Repository Name

The repository for this project is **veriwell-front**.

## Features

- **Smart Contract Upload and Verification**: Users can upload their smart contracts to verify their functionality and security.
- **AI-Powered Smart Contract Descriptions**: Automatically generate explanations for smart contracts using AI.
- **Verification Culture Formation**: Issue NFTs to individuals who successfully verify contracts, fostering a culture of accountability and recognition.

## Supported Languages

- [x] Solidity
- [x] Stylus
- [x] Cairo
- [ ] Sui Move

## Supported Chains/Networks

- Ethereum
  - [x] Mainnet
  - [x] Sepolia
- StarkNet
  - [x] Mainnet
  - [x] Sepolia
- Arbitrum
  - [x] One
  - [x] Sepolia
- Sui
  - [ ] Mainnet
  - [ ] Testnet

## Environment Variables

The following environment variables must be configured to run the project:

- `NEXT_PUBLIC_WALLET_PROJECT_ID`: Wallet project ID for connecting to supported chains. (rainbowKit)
- `NEXT_PUBLIC_STARKNET_MAINNET_URL`: URL for the StarkNet Mainnet RPC.
- `NEXT_PUBLIC_STARKNET_SEPOLIA_URL`: URL for the StarkNet Sepolia RPC.
- `NEXT_PUBLIC_ETHEREUM_MAINNET_URL`: URL for the Ethereum Mainnet RPC.
- `NEXT_PUBLIC_ETHEREUM_SEPOLIA_URL`: URL for the Ethereum Sepolia RPC.
- `NEXT_PUBLIC_ARBITRUM_ONE_URL`: URL for the Arbitrum One RPC.
- `NEXT_PUBLIC_ARBITRUM_SEPOLIA_URL`: URL for the Arbitrum Sepolia RPC.
- `GEMINI_API_KEY`: API key for Gemini services.

Ensure all variables are set in your environment before running the project.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [pnpm](https://pnpm.io/) (package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/veriwell-front.git
   cd veriwell-front
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Development Server

Start the development server to preview changes:

```bash
pnpm run dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

To build the project for production:

```bash
pnpm run build
```

The build output will be located in the `dist/` directory.

### Running in Production Mode

After building the project, start the production server:

```bash
pnpm run start
```

## Project Structure

The Veriwell frontend project is designed and implemented using the FSD (Feature-Sliced Design) architecture. This approach ensures a modular and scalable codebase by structuring the project around features, layers, and slices.

```
veriwell-front/
├── app/              # Application-level configurations and setups
├── src/
│   ├── _pages/       # Page components structured by routes
│   ├── components/   # shadcn-ui components
│   ├── features/     # Feature-specific components and logic
│   ├── shared/       # Shared utilities, styles, and components
│   ├── entities/     # Domain-specific entities and data structures
│   └── widgets/      # Components used in pages
├── public/           # Public assets
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## Contributing

We welcome contributions to improve Veriwell's frontend! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).

## Contact

For questions or support, please contact:

- **Email**: [hyeongseob.jeong@dsrvlabs.com](mailto:hyeongseob.jeong@dsrvlabs.com)
- **Website**: [https://veriwell.vercel.app](https://veriwell.vercel.app)


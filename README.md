const cyberpunkTipGenesisStack = `
# 🧠 Cyberpunk Tip Genesis – Tech Stack Overview

This document summarizes the core technologies used in the [Cyberpunk Tip Genesis](https://github.com/RealRogers/cyberpunk-tip-genesis) dApp.

---

## 🌐 Frontend

- **Framework:** [React](https://reactjs.org/) (v18), [Next.js](https://nextjs.org/) (v14)
- **Language:** TypeScript
- **UI Libraries:**
  - [Radix UI](https://www.radix-ui.com/) `@radix-ui/react-*
  - [shadcn/ui](https://ui.shadcn.com/)
  - [vaul](https://github.com/emilkowalski/vaul)
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/)
  - Plugins: `tailwindcss-animate`, `tailwind-merge`

---

## 🔐 Smart Contracts

- **Language:** Solidity
- **Platform:** Ethereum / EVM-compatible chains
- **Contracts:**
  - [OpenZeppelin](https://openzeppelin.com/)
  - [Uniswap V3](https://docs.uniswap.org/) (`@uniswap/v3-core`, `@uniswap/v3-periphery`)

---

## 🔗 Blockchain Interaction

- **Library:** [ethers.js](https://docs.ethers.org/v5/)
- **Development Framework:** [Hardhat](https://hardhat.org/)
  - Plugins: `@nomicfoundation/hardhat-toolbox`, `hardhat-ethers`, `hardhat-uniswap`

---

## 🛠 Backend / Auth

- **ORM:** [Prisma](https://www.prisma.io/) (PostgreSQL)
- **Database:** PostgreSQL
- **Backend Service:** [Supabase](https://supabase.com/)
- **Authentication:** [Privy](https://www.privy.io/) `@privy-io/react-auth`

---

## 🚀 Deployment

- **Platform:** [Lovable](https://www.lovable.dev/)
- **Build Commands:**
  - `next build`
  - `next start`

---

## ⚙️ Tooling

- **Bundler (optional):** [Vite](https://vitejs.dev/)
- **Linter:** ESLint (Next.js configuration)
- **CSS Tooling:** PostCSS, Autoprefixer

---

> ✅ All packages and configurations are listed in the repo's `package.json`, `prisma/schema.prisma`, and the project README.
`;

const readme = `
# 📦 Cyberpunk Tip Genesis

A smart contract & full-stack NFT minting system ("Tips") powered by ArtistFi.sol and modern backend services.

---

## ✅ Environment Setup

Copy the file `env.example` to `.env` and fill in the following values:

### Database & Supabase
```
DATABASE_URL=                   # For connection pooling
DIRECT_URL=                     # Direct DB connection (e.g. for migrations)
NEXT_PUBLIC_SUPABASE_URL=       # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase anon (public) API key
```

### Auth & Privy
```
PRIVY_SECRET=
NEXT_PUBLIC_PRIVY_APP_ID=
NEXT_PUBLIC_PRIVY_CLIENT_ID=
```

### Juno Payments
```
JUNO_API_KEY=
JUNO_API_SECRET=
JUNO_API_URL=https://stage.buildwithjuno.com
JUNO_RECEIVER_NAME=
```

### General App Config
```
NEXT_PUBLIC_API_URL=            # Your production frontend/back‑end URL
NEXT_PUBLIC_PICS=               # Base URL for images/storage
```

---

## 🧩 File Overview

### ArtistFi.sol
A Solidity contract that supports:
- **Artist registration**
- **Minting "Tip" NFTs**
- **Royalty fee collection and withdrawal**

### Backend + Frontend
- Uses **Supabase** for database, authentication, and realtime features.
- Uses **Privy** for secure login/auth flows.
- Uses **Juno** for payment processing and fund transfers to artists.
- JS/TS frontend interacts with ArtistFi via contract, Supabase for data, Juno for payments.

---

## 🚀 Usage

1. Populate your `.env` with values above.
2. Deploy `ArtistFi.sol` using Hardhat / Truffle / Remix.
3. Copy the deployed contract address into your backend/frontend config.
4. Run migrations using `DIRECT_URL`.
5. Start full-stack app — it will:
   - Allow artists to register (via Privy)
   - Enable minting Tip NFTs
   - Accept payments (via Juno)
   - Store metadata and state in Supabase

---

## 🛠️ Requirements

- Ethereum-compatible wallet + funds for deployment/minting
- Supabase project
- Privy account/app
- Juno API credentials

---

## 📄 License

MIT
`;

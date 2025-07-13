"use client";

import "../index.css";

import { PrivyProvider } from "@privy-io/react-auth";
import { FeedProvider } from "./providers/FeedProvider";
import { UserProvider } from "./providers/UserProvider";
import  {SupabaseStorageProvider} from "./providers/ImageProvider";
// Replace this with any of the networks listed at https://github.com/wevm/viem/blob/main/src/chains/index.ts
import {base, berachain, polygon, arbitrum, story, mantle,arbitrumSepolia} from 'viem/chains';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  const clientId = process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID;
  console.log("appId", appId);
  return (
    <html lang="en">
      <body>
        <PrivyProvider
          appId={appId}
          clientId={clientId}
          config={{
            defaultChain:arbitrumSepolia,
            embeddedWallets: {
              ethereum: {
                createOnLogin: "users-without-wallets",
              },
            },
          }}
        >
          <UserProvider>
            <FeedProvider>
              <SupabaseStorageProvider>
              <Layout>{children}</Layout>
              </SupabaseStorageProvider>
            </FeedProvider>
          </UserProvider>
        </PrivyProvider>
      </body>
    </html>
  );
}

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <main>{children}</main>;
}

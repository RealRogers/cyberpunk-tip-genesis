"use client";

import "../index.css";

import { PrivyProvider } from "@privy-io/react-auth";
import { FeedProvider } from "./providers/FeedProvider";
import { UserProvider } from "./providers/UserProvider";

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
            embeddedWallets: {
              ethereum: {
                createOnLogin: "users-without-wallets",
              },
            },
          }}
        >
          <UserProvider>
            <FeedProvider>
              <Layout>{children}</Layout>
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

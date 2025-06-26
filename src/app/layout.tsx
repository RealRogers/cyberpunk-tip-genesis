
"use client"

import "../index.css";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID!;
  const clientId = process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID;

  return (
    <html lang="en">
      <body>
          <Layout>{children}</Layout>
      </body>
    </html>
  );
}





import  { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

 function Layout({ children }: LayoutProps) {
  return (
        <main>
          {children}
        </main>
  );
}
 

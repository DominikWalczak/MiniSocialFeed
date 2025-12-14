"use client";

import "./globals.css";
import "../src/i18n/i18n";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Wrapuję aplikację QueryClientProvider, inaczej useQuery nie będzie działać
    <QueryClientProvider client={queryClient}>
      <html className="m-3" lang="en">
        <body>
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}

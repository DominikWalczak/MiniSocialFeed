import "./globals.css";
import "../src/i18n/i18n";
import { Providers } from './providers';
import Navbar from "./components/layout/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
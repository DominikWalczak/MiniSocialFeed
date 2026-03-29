import "./globals.css";
import { Providers } from './providers';
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex flex-row flex-1">
                <Sidebar /> 
                <main className="flex-1 p-4">
                  {children}
                </main>
              </div>
            </div>
          </Providers>
      </body>
    </html>
  );
}
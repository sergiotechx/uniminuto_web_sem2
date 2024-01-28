import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Semana 2 Uniminuto",
  description: "Pagina semana2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}

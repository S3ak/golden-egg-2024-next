import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Egg 2024",
  description: "Noroff Awards - Golden Egg 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"l-body bg-primary" + inter.className}>
        <Image src="/Logo-Golden-Egg.png" alt="Logo" width={900} height={430} />
      </body>
    </html>
  );
}

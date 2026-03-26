import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "./components/Navbar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "NiceTry — Quantum-safe Wallet Infrastructure",
  description:
    "A wallet infrastructure built on ephemeral key pairs. Quantum-safe by design. Live on Base Sepolia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${poppins.className} antialiased"`}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
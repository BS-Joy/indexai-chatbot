import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import BackgroundWrapper from "@/components/layout/BackgroundWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Index.AI",
  description: "Your AI based email inbox",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <BackgroundWrapper>
          <Navbar />
          {children}
        </BackgroundWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "CURATED | Premium Product Discovery",
  description:
    "Hand-picked gear, tech, and lifestyle products for the discerning individual. Curated with intent.",
  keywords: ["curated products", "mens gear", "edc", "tech", "lifestyle", "product discovery"],
  openGraph: {
    title: "CURATED | Premium Product Discovery",
    description: "Hand-picked gear, tech, and lifestyle products for the discerning individual.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <WishlistProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}

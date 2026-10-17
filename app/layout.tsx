import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Container from "@/components/global/Container";
import Footer from "@/components/global/Footer";
import { Toaster } from "@/components/ui/sonner";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Atelier — Fashion for everyone",
  description: "Clothing for men, women and kids",
};

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={`${body.variable} ${display.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-brand text-brand-foreground text-center text-[0.7rem] uppercase tracking-[0.25em] py-2 px-4">
            Free shipping on orders over $100 · New season now in store
          </div>
          <Navbar />

          <Container className="flex-1 py-12">
            {children}
          </Container>

          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

/**
 * Root layout component that wraps all pages in the application.
 * Provides the basic HTML structure and global providers:
 * - Inter font for consistent typography
 * - ThemeProvider for dark/light mode support
 * - Providers for authentication state
 * - Basic layout structure with navbar
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { ThemeProvider } from "@/components/theme-provider";

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for SEO and browser tab
export const metadata: Metadata = {
  title: "DataTable Demo",
  description: "A modern application with a data table and modern UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              {children}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

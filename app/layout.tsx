import Footer from "@/components/footer/Footer";
import Header from "@/components/shared/Header";
import GridLayout from "@/components/ui/GridLayout";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ziv Carmi | Full Stack Developer",
  description:
    "I like to create seamless and immersive user interfaces that harmoniously blend form and function.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GridLayout />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/common/footer";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOVT L P SCHOOL VENGODY",
  description: "Website of GOVT L P SCHOOL VENGODY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={null}>
      <ClerkProvider signUpForceRedirectUrl="/feedback">
        <html lang="en">
          <body
            className={`${outfit.className} antialiased min-h-screen flex flex-col`}
          >
            <Header />
            <main className="flex-1">
              {children}
              <Toaster />
            </main>
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </Suspense>
  );
}

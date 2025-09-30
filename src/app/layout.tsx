import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "STORM - From Sea to Street We Ride as One",
  description: "A marca que une todos os board sports numa comunidade global",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-storm-white">
        <Header />
        {children}
      </body>
    </html>
  );
}

import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu Site",
  description: "Meu site em Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
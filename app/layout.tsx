import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja Exemplo",
  applicationName: "Loja Exemplo",
  description: "Sistema web exemplo de Loja criado com NextJS",
  generator: "Next.js",
  keywords: ["Next.js", "React", "JavaScript", "Loja"],
  authors: [{ name: "Matheus Viana", url: "https://dcomp.ufsj.edu.br/dcomp/servidores" }],
  publisher: "UFSJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

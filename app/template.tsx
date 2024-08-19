"use client"
import styles from "@/app/page.module.css";
import Topo from "@/app/ui/topo";
import Link from 'next/link';
import { SessionProvider } from "next-auth/react";


export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <main className={styles.main}>
      <SessionProvider>

        <Topo />

        <div className={styles.mainmenu}>
          <ul>
            <li key="home"><Link href="/">Home</Link></li>
            <li key="cliente"><Link href="/cliente">Clientes</Link></li>
            <li key="produto"><Link href="/produto">Produtos</Link></li>
            <li key="venda"><Link href="/venda">Vendas</Link></li>
          </ul>
        </div>

        <div className={styles.centro}>
          {children}
        </div>

        <div className={styles.rodape}>
          <p>Copyrigt © Matheus Viana. Loja Exemplo</p>
        </div>

      </SessionProvider>
    </main>
  );
}
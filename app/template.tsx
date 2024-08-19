"use client"
import styles from "./page.module.css";
import Link from 'next/link';
import Topo from "./ui/topo";

export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <main className={styles.main}>

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

    </main>
  );
}
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

import Login from "./ui/login";

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>

      <div className={styles.topo}>
        <div>
          <Image
            src="/loja.png"
            alt="Loja Exemplo"
            width={50}
            height={50}
          />
        </div>
        <div><h1>Loja Exemplo</h1></div>
        <Login />
      </div>

      <div className={styles.mainmenu}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/clientes">Clientes</Link></li>
          <li><Link href="/produtos">Produtos</Link></li>
          <li><Link href="vendas">Vendas</Link></li>
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
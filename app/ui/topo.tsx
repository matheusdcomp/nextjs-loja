import Image from 'next/image';
import styles from "/app/page.module.css";
import Login from './login';


export default function Topo() {
  return (
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
  );
}
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Image
        src="/loja.png"
        alt="Loja Exemplo"
        width={300}
        height={300}
      />
    </div>
  );
}

import styles from "./page.module.css";
import Componente from "./ui/componente";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.main}>
      <div className={styles.topo}>
        <h1>Título da Página</h1>
        <Componente nome="Matheus" />
      </div>
      <div className={styles.centro}>
        {children}
      </div>
      <div className={styles.rodape}>
        <p>RODAPÉ</p>
      </div>
    </div>
  );
} 
import styles from "./ui.module.css";

export default function Componente({ nome }: { nome: string }) {
  return (
    <div className={styles.componente}>
      <span>✸</span>
      <span>{nome}</span>
    </div>
  );
}
import styles from "./ui.module.css";

export default function PainelCRUD() {

  return (
    <div className={styles.painelCRUD}>
      <button>Adicionar</button>
      <button>Editar</button>
      <button>Remover</button>
    </div>
  );

}
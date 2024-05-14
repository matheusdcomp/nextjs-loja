import styles from "./ui.module.css";

export default function Login() {

  const logado = false;

  return (
    <div className={styles.login}>
      <span className={styles.loginIcon}>{logado ? "☻" : "☺"}</span>
      <span>{logado ? "Usuário" : "Login"}</span>
    </div>
  );
}
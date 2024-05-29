import styles from "./ui.module.css";
import EntidadeUIProps from "../entidades/entidadeuiprops";

export default function Formulario({
  entidadeUIProps,
  valorar
}: {
  entidadeUIProps: EntidadeUIProps[],
  valorar?: boolean
}) {

  const inputs = entidadeUIProps.map(ipt => (
    <label>
      <span>{ipt.rotulo + ":"}</span>
      <input
        type={ipt.tipo}
        id={"ipt" + ipt.nome}
        name={"ipt" + ipt.nome}
        value={valorar ? ipt.valor : ""} />
    </label>
  ));

  return (
    <div className={styles.formularioDiv}>
      <div className={styles.formularioPainelSup}>
        <button>Adicionar</button>
        <button>Editar</button>
        <button>Remover</button>
      </div>
      <form className={styles.formularioForm}>
        {inputs}
      </form>
      <div className={styles.formularioPainelInf}>
        <input type="button" value="Confirmar" />
        <input type="button" value="Cancelar" />
      </div>
    </div>
  );
}
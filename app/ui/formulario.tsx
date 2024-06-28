'use client'

import styles from "./ui.module.css";
import EntidadeUIProps from "../(entidades)/entidadeuiprops";
import { obterSelecionadas } from "./tabela";
import { useState } from "react";

export default function Formulario({
  entidadeUIProps,
  valorar,
  funAdicionar,
  funEditar,
  funRemover
}: {
  entidadeUIProps: EntidadeUIProps[],
  valorar?: boolean,
  funAdicionar: Function,
  funEditar: Function,
  funRemover: Function
}) {

  const [estado, setEstado] = useState("parado");

  function mostrarFormulario(display: "block" | "none") {
    document.getElementById("formularioPainel")!.style.display = display;
  }

  function limparFormulario() {
    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("#formularioPainel form input");
    inputs.forEach(i => i.value = "");
  }

  function cliqueAdicionar() {
    setEstado("adicionando");
    limparFormulario();
    mostrarFormulario("block");
  }

  function cliqueEditar() {

    setEstado("editando");

    const valores = obterSelecionadas(true);
    if (valores.length == 0)
      alert("Selecione uma entidade na tabela.");

    mostrarFormulario("block");

    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("#formularioPainel form input");

    for (let i = 0; i < inputs.length; i++)
      inputs[i].value = valores[0][i];
  }

  function cliqueRemover() {

    const valores = obterSelecionadas(true);
    if (valores.length == 0)
      alert("Selecione uma entidade na tabela.");

    funRemover(Number(valores[0][0]));
  }

  function cliqueConfirmar() {

    const valores: string[] = [];
    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("#formularioPainel form input");

    inputs.forEach(i => valores.push(i.value));

    if (estado == "adicionando") funAdicionar(valores);
    else if (estado == "adicionando") funEditar(valores);

    limparFormulario();
    mostrarFormulario("none");
  }

  function cliqueCancelar() {
    limparFormulario();
    mostrarFormulario("none");
  }

  const inputs = entidadeUIProps.map(ipt => (
    <label>
      <span>{ipt.rotulo + ":"}</span>
      <input
        type={ipt.tipo}
        id={"ipt" + ipt.nome}
        name={"ipt" + ipt.nome}
        defaultValue={valorar ? ipt.valor : ""}
      />
    </label>
  ));

  return (
    <div className={styles.formularioDiv}>
      <div className={styles.formularioCRUDBotoes}>
        <button onClick={cliqueAdicionar}>Adicionar</button>
        <button onClick={cliqueEditar}>Editar</button>
        <button onClick={cliqueRemover}>Remover</button>
      </div>
      <div id="formularioPainel" className={styles.formularioPainel}>
        <form className={styles.formularioForm}>
          {inputs}
        </form>
        <div className={styles.formularioConf}>
          <button onClick={cliqueConfirmar}>Confirmar</button>
          <button onClick={cliqueCancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
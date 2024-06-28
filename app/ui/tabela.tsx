'use client'
import styles from "./ui.module.css";
import EntidadeUIProps from "../(entidades)/entidadeuiprops";

export default function Tabela({ entidadeUIProps }: { entidadeUIProps: EntidadeUIProps[][] }) {

  function cliqueCheckTodos() {

    const checks: NodeListOf<HTMLInputElement> =
      document.querySelectorAll("#tabelaCRUD tbody input[type='checkbox']");

    for (let i = 0; i < checks.length; i++) {
      checks[i].checked = document.getElementById("seltodos")!.checked;
    }
  }

  const ths = (
    <tr>
      <th><input type="checkbox" name="seltodos" id="seltodos" onChange={cliqueCheckTodos} /></th>
      {entidadeUIProps[0].map(eup => <th>{eup.rotulo}</th>)}
    </tr>
  );

  const tds = entidadeUIProps.map(eups => (
    <tr>
      <td><input type="checkbox" name={`sel${eups[0].valor}`} id={`sel${eups[0].valor}`} /></td>
      {eups.map(eup => <td>{eup.valor}</td>)}
    </tr>
  ));

  return (
    <div className={styles.tabeladiv}>
      <table id="tabelaCRUD" className={styles.tabela}>
        <thead>
          {ths}
        </thead>
        <tbody>
          {tds}
        </tbody>
      </table>
    </div>
  );
}

export function obterSelecionadas(apenasUm: boolean) {

  let x = 0;
  const entidades: string[][] = [];
  const trs: NodeListOf<HTMLTableRowElement> =
    document.querySelectorAll("#tabelaCRUD tbody tr");

  for (let t = 0; t < trs.length; t++) {

    if (trs[t].cells[0].children[0].checked) {

      let entidade: string[] = [];

      for (let i = 1; i < trs[t].cells.length; i++)
        entidade.push(trs[t].cells[i].innerText);

      entidades.push(entidade);

      if (apenasUm) break;
    }
  }

  return entidades;
}
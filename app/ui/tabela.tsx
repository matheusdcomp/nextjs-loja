import styles from "./ui.module.css";
import EntidadeUIProps from "../entidades/entidadeuiprops";

export default function Tabela({ entidadeUIProps }: { entidadeUIProps: EntidadeUIProps[][] }) {


  const ths = (
    <tr>
      <th><input type="checkbox" name="seltodos" id="seltodos" /></th>
      {entidadeUIProps[0].map(eup => <th>{eup.rotulo}</th>)}
    </tr>
  );

  const tds = entidadeUIProps.map(eups => (
    <tr>
      <td><input type="checkbox" name={`sel${eups[0].nome}`} id={`sel${eups[0].nome}`} /></td>
      {eups.map(eup => <td>{eup.valor}</td>)}
    </tr>
  ));

  return (
    <div className={styles.tabeladiv}>
      <table className={styles.tabela}>
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
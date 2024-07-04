import styles from "./ui.module.css";
import EntidadeUIProps from "../entidades/entidadeuiprops";

export default function Tabela({ entidadeUIProps }: { entidadeUIProps: EntidadeUIProps[][] }) {


  const ths = (
    <tr>
      <th><input type="checkbox" name="checktodos" id="checktodos" /></th>
      {entidadeUIProps[0].map(eup => <th>{eup.rotulo}</th>)}
    </tr>
  );

  const tds = entidadeUIProps.map(eups => (
    <tr>
      <td><input type="checkbox" name={`check${eups[0].valor}`} id={`check${eups[0].valor}`} /></td>
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
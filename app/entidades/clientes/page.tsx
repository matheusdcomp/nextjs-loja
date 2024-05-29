import { Cliente, obterTodosClientes } from "@/data/cliente";
import EntidadeUIProps from "@/app/entidades/entidadeuiprops";
import styles from "@/app/entidades/entidades.module.css";
import Tabela from "@/app/ui/tabela";
import Formulario from "@/app/ui/formulario";

export default function Clientes() {

  const clientes = obterTodosClientes();

  if (clientes.length == 0) clientes.push(new Cliente());

  const clientesUIProps: EntidadeUIProps[][] = clientes.map(c => [
    new EntidadeUIProps("Id", "text", "id", c.id.toString()),
    new EntidadeUIProps("Nome", "text", "nome", c.nome),
    new EntidadeUIProps("Email", "email", "email", c.email),
  ]);

  const campos = ["Id", "Nome", "Email"];
  const valores = clientes.map(c => [c.id.toString(), c.nome, c.email]);

  return (
    <div className={styles.entidade}>
      <h1>Clientes</h1>
      <Tabela entidadeUIProps={clientesUIProps} />
      <Formulario entidadeUIProps={clientesUIProps[0]} />
    </div>
  );
}
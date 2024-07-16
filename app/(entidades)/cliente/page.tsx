'use client'
import useSWR from "swr";
import EntidadeUIProps from "@/app/(entidades)/entidadeuiprops";
import Cliente from "@/app/(entidades)/cliente/cliente";
import styles from "@/app/(entidades)/entidades.module.css";
import Tabela from "@/app/ui/tabela";
import Formulario from "@/app/ui/formulario";
import { adicionarCliente, editarCliente, removerCliente } from "@/app/(entidades)/cliente/action";


export default function Clientes() {

  const fetcher = (url: string) => fetch(url).then((res => res.json()));

  const { data, error, isLoading } = useSWR<Cliente[]>(
    'http://localhost:3000/cliente/api/todos',
    fetcher
  );

  if (isLoading) {
    return (
      <div className={styles.entidade}>
        <h1>Clientes</h1>
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.entidade}>
        <h1>Clientes</h1>
        <h1>Error ao carregar os clientes.</h1>
      </div>
    );
  }

  const clientes = data && data.length > 0 ?
    data.sort((a, b) => a.id - b.id) :
    [new Cliente()];

  const clientesUIProps: EntidadeUIProps[][] = clientes.map(c => [
    new EntidadeUIProps("Id", "text", "id", c.id.toString()),
    new EntidadeUIProps("Nome", "text", "nome", c.nome),
    new EntidadeUIProps("Email", "email", "email", c.email),
  ]);

  return (
    <div className={styles.entidade}>
      <h1>Clientes</h1>
      <Tabela entidadeUIProps={clientesUIProps} />
      <Formulario
        entidadeUIProps={clientesUIProps[0]}
        funAdicionar={adicionarCliente}
        funEditar={editarCliente}
        funRemover={removerCliente}
      />
    </div>
  );
}

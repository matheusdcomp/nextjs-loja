'use client'
import useSWR from "swr";
import EntidadeUIProps from "@/app/(entidades)/entidadeuiprops";
import Cliente from "@/app/(entidades)/cliente/cliente";
import styles from "@/app/(entidades)/entidades.module.css";
import Tabela from "@/app/ui/tabela";
import Formulario from "@/app/ui/formulario";


export default function Clientes() {

  function adicionarCliente(props: string[]) {

    const fetcher = (url: string) => fetch(url).then((res => res.json()));

    const urladd = "http://localhost:3000/cliente/api/adicionar" +
      `?id=${props[0]}&nome=${props[1]}&email=${props[2]}`;

    const { data } = useSWR(urladd, fetcher);
  }

  function editarCliente(props: string[]) {
    const clienteEditado = new Cliente(Number(props[0]), props[1], props[2]);

  }

  function removerCliente(idARemover: number) {

  }

  function obterClientes() {

    const fetcher = (url: string) => fetch(url).then((res => res.json()));

    const { data }: { data: Cliente[] } = useSWR(
      'http://localhost:3000/cliente/api/todos',
      fetcher
    );

    return data ? data : [new Cliente()];
  }


  const clientesUIProps: EntidadeUIProps[][] = obterClientes().map(c => [
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

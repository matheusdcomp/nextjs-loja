'use client'
import { useState } from 'react';
import { Cliente, obterTodosClientes } from "@/data/cliente";
import EntidadeUIProps from "@/app/(entidades)/entidadeuiprops";
import styles from "@/app/(entidades)/entidades.module.css";
import Tabela from "@/app/ui/tabela";
import Formulario from "@/app/ui/formulario";

export default function Clientes() {

  function adicionarCliente(props: string[]) {
    const clienteNovo = new Cliente(Number(props[0]), props[1], props[2]);
    setClientes([...clientes, clienteNovo]);
  }

  function editarCliente(props: string[]) {
    const clienteEditado = new Cliente(Number(props[0]), props[1], props[2]);
    setClientes(clientes.map(c => c.id == clienteEditado.id ? clienteEditado : c));
  }

  function removerCliente(idARemover: number) {
    setClientes(clientes.filter(c => c.id != idARemover));
  }

  const [clientes, setClientes] = useState(obterTodosClientes());

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
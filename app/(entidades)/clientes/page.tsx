'use client'
import { useEffect, useState } from 'react';
import useSWR from "swr";
import EntidadeUIProps from "@/app/(entidades)/entidadeuiprops";
import styles from "@/app/(entidades)/entidades.module.css";
import Tabela from "@/app/ui/tabela";
import Formulario from "@/app/ui/formulario";

export default function Clientes() {

  const [clientes, setClientes] = useState([]);

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


  const fetcher = (...args: any[]) => fetch(...args).then((res => res.json()));

  const { data } = useSWR(
    'http://localhost:3000/clientes/api',
    fetcher
  );
  /*
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
          <h1>Não foi possível carregar os dados dos clientes</h1>
        </div>
      );
    }
  
  */

  useEffect(() => {
    let ignore = false;
    if (!ignore) setClientes(data);
    return () => {
      ignore = true;
    }
  }, clientes);

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

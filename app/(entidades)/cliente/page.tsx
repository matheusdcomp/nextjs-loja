'use client'
import useSWR from "swr";
import EntidadeUIProps from "@/app/(entidades)/entidadeuiprops";
import Cliente from "@/app/(entidades)/cliente/cliente";
import styles from "@/app/(entidades)/entidades.module.css";
import Tabela, { obterSelecionadas } from "@/app/ui/tabela";
import PainelCRUD from "@/app/ui/painelcrud";
import { useRouter } from "next/navigation";
import { removerCliente } from "./action";


export default function Clientes() {

  const router = useRouter();

  const { data, error, isLoading } = useSWR<Cliente[]>(
    'http://localhost:3000/cliente/api/obt',
    (url: string) => fetch(url).then((res => res.json()))
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
      <PainelCRUD
        adicionar={() => router.push("/cliente/forms/adc")}
        editar={() => router.push("/cliente/forms/edt/" + obterSelecionadas(true)[0][0])}
        remover={cliqueRemover}
      />
    </div>
  );
}

function cliqueRemover() {

  const valores = obterSelecionadas(true);
  if (valores.length == 0)
    alert("Selecione uma entidade na tabela.");

  removerCliente(Number(valores[0][0])).then(msn => alert(msn.mensagem));
}

import { obterCliente } from "@/data/cliente";

export default function FormularioCliente({ params }: { params: { id: number } }) {

  const cliente = obterCliente(params.id);

  return (
    <>
      <h1>ID: {cliente?.id}</h1>
      <h1>Nome: {cliente?.nome}</h1>
      <h1>Email: {cliente?.email}</h1>
    </>
  );

}
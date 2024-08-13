import { inserirCliente } from "@/data/clienteDAO";
import Cliente from "@/app/(entidades)/cliente/cliente";


export async function POST(request: Request) {

  const res = await request.json();
  const id = res.id;
  const nome = res.nome;
  const email = res.email;

  if (id && nome && email) {
    return Response.json({
      mensagem: await inserirCliente(new Cliente(Number(id), nome, email))
    });
  }
  else return Response.json({ mensagem: false });
}
import { inserirCliente } from "@/data/clienteDAO";
import Cliente from "@/app/(entidades)/cliente/cliente";


export async function POST(request: Request) {

  const { id, nome, email, senha } = await request.json();

  if (id && nome && email) {
    return Response.json({
      mensagem: await inserirCliente(new Cliente(Number(id), nome, email, senha))
    });
  }
  else return Response.json({ mensagem: false });
}
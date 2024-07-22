import Cliente from "@/app/(entidades)/cliente/cliente";
import { inserirCliente } from "@/data/clienteDAO";


export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const [id, nome, email] = [
    searchParams.get('id'),
    searchParams.get('nome'),
    searchParams.get('email')
  ];

  if (id && nome && email) {
    return Response.json({
      mensagem: inserirCliente(new Cliente(Number(id), nome, email))
    });
  }
  else return Response.json({ mensagem: false });
}
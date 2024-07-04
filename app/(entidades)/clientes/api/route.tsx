import { obterTodosClientes } from "@/data/cliente";

export async function GET() {
  return Response.json(obterTodosClientes());
}
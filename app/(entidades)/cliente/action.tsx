"use server"
import { revalidatePath } from "next/cache";
import { z } from "zod";


export async function post(url: string, obj: string) {

  const res = await fetch(url, { method: "POST", body: obj });

  if (!res.ok) {
    throw new Error("Falha em executar a ação do formulário.");
  }
  return res.json();
}

export async function adicionarCliente(prevState: any, formData: FormData) {

  const schema = z.object({
    id: z.string().min(1),
    nome: z.string().min(1, "Informe o nome do cliente"),
    email: z.string().min(1, "Informe o email do cliente").email("Email inválido"),
  });

  const parse = schema.safeParse({
    id: formData.get("id"),
    nome: formData.get("nome"),
    email: formData.get("email"),
  });

  if (!parse.success) {
    return { mensagem: "Falha ao adicionar o cliente a partir dos dados do formulário." }
  }

  const cliente = parse.data;

  const res = await post(
    "http://localhost:3000/api/cliente/adc",
    `{"id":"${cliente.id}","nome":"${cliente.nome}","email":"${cliente.email}"}`
  );

  if (res.mensagem) {
    revalidatePath("/cliente");
    return { mensagem: `Novo cliente adicionado: ${cliente.nome}` };
  }
  else {
    return { mensagem: `Não foi possível adicionar o cliente: ${cliente.nome}` };
  }
}


export async function editarCliente(prevState: any, formData: FormData) {

  const schema = z.object({
    id: z.string().min(1),
    nome: z.string().min(1, "Informe o nome do cliente"),
    email: z.string().min(1, "Informe o email do cliente").email("Email inválido"),
  });

  const parse = schema.safeParse({
    id: formData.get("id"),
    nome: formData.get("nome"),
    email: formData.get("email"),
  });

  if (!parse.success) {
    return { mensagem: "Falha ao editar o cliente a partir dos dados do formulário." }
  }

  const cliente = parse.data;

  const res = await post(
    "http://localhost:3000/api/cliente/edt",
    `{"id":"${cliente.id}","nome":"${cliente.nome}","email":"${cliente.email}"}`
  );

  if (res.mensagem) {
    revalidatePath("/cliente");
    return { mensagem: `O cliente com ID: ${cliente.id} foi editado.` };
  }
  else {
    return { mensagem: `Não foi possível editar o cliente com ID: ${cliente.id}` };
  }
}


export async function removerCliente(id: number) {

  const res = await post(
    "http://localhost:3000/api/cliente/rmv",
    `{"id":"${id}"}`
  );

  if (res.mensagem) {
    return { mensagem: `O cliente com ID: ${id} foi removido.` };
  }
  else {
    return { mensagem: `Não foi possível remover o cliente com ID: ${id}` };
  }
}

import { PrismaClient, Cliente } from "prisma/prisma-client";

const prisma = new PrismaClient();


export async function obterClientes(): Promise<Cliente[]> {
  return await prisma.cliente.findMany();
}

export async function obterClientePorNome(nome: string): Promise<Cliente> {

  const cliente = await prisma.cliente.findFirst({
    where: {
      nome: nome
    }
  });

  return cliente ?? { id: 0, nome: "", email: "" };
}

export async function obterCliente(id: number): Promise<Cliente> {

  const cliente = await prisma.cliente.findUnique({
    where: {
      id: id
    }
  });

  return cliente ?? { id: 0, nome: "", email: "" };
}

export async function inserirCliente(cliente: Cliente): Promise<boolean> {

  const novoCliente = await prisma.cliente.create({
    data: cliente
  });

  return novoCliente.id === cliente.id;
}

export async function editarCliente(cliente: Cliente): Promise<boolean> {

  const clienteEditado = await prisma.cliente.update({
    where: {
      id: cliente.id,
    },
    data: {
      nome: cliente.nome,
      email: cliente.email,
    },
  })

  return clienteEditado.id === cliente.id;
}


export async function removerCliente(id: number): Promise<boolean> {

  const clienteRemovido = await prisma.cliente.delete({
    where: {
      id: id
    }
  });

  return clienteRemovido.id === id;
}
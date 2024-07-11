import Cliente from "@/app/(entidades)/cliente/cliente";
import fs from "fs";


const arquivo = "/data/clientes.json";


export function obterClientes(): Cliente[] {
  const arq = fs.readFileSync(process.cwd() + arquivo, "utf8");
  return JSON.parse(arq);
}

export function obterClientesPorNome(nome: string) {
  return obterClientes().filter(c => c.nome.match(nome));
}

export function obterCliente(id: number) {
  return obterClientes().find(t => t.id == id);
}

export function inserirCliente(cliente: Cliente): boolean {

  const lista = obterClientes();
  lista.push(cliente);

  try {
    const arq = fs.writeFileSync(
      process.cwd() + arquivo,
      JSON.stringify(lista),
      'utf8');
    return true;
  }
  catch (e) {
    return false;
  }
}

export function editarCliente(cliente: Cliente): boolean {

  const lista = obterClientes().map(
    c => c.id == cliente.id ? cliente : c
  );

  try {
    const arq = fs.writeFileSync(
      process.cwd() + arquivo,
      JSON.stringify(lista),
      'utf8');
    return true;
  }
  catch (e) {
    return false;
  }
}


export function removerCliente(id: number): boolean {

  const lista = obterClientes().filter(c => c.id != id);

  try {
    const arq = fs.writeFileSync(
      process.cwd() + arquivo,
      JSON.stringify(lista),
      'utf8');
    return true;
  }
  catch (e) {
    return false;
  }
}
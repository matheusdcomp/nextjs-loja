
import Entidade from "./entidade";
import fs from "fs";

export class Cliente extends Entidade {

  nome: string;
  email: string;

  constructor(id: number = 0, nome: string = "", email: string = "") {
    super(id);
    this.nome = nome;
    this.email = email;
  }

}


const arquivo = "/data/clientes.json";


export function obterTodosClientes(): Cliente[] {
  const arq = fs.readFileSync(process.cwd() + arquivo, "utf8");
  return JSON.parse(arq);
}

export function obterClientesPorNome(nome: string) {
  return obterTodosClientes().filter(c => c.nome.match(nome));
}

export function obterCliente(id: number) {
  return obterTodosClientes().find(t => t.id == id);
}

export function inserirCliente(cliente: Cliente): boolean {
  const lista = obterTodosClientes();
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
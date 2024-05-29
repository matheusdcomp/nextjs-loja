import Entidade from "./entidade";

export class Cliente extends Entidade {

  nome: string;
  email: string;

  constructor(id: number = 0, nome: string = "", email: string = "") {
    super(id);
    this.nome = nome;
    this.email = email;
  }

}

const clientes: Cliente[] = [
  new Cliente(1, "Matheus", "matheus@ufsj.edu.br"),
  new Cliente(2, "João", "joao@ufsj.edu.br"),
  new Cliente(3, "Maria", "maria@ufsj.edu.br"),
  new Cliente(4, "José", "jose@ufsj.edu.br"),
  new Cliente(5, "Lucas", "lucas@ufsj.edu.br"),
  new Cliente(6, "William", "william@ufsj.edu.br"),
  new Cliente(7, "Artur", "artur@ufsj.edu.br"),
  new Cliente(8, "Ana", "ana@ufsj.edu.br"),
  new Cliente(9, "Cláudia", "claudia@ufsj.edu.br"),
  new Cliente(10, "Karla", "karla@ufsj.edu.br"),
];

export function obterTodosClientes() {
  return clientes;
}

export function obterClientesPorNome(nome: string) {
  return clientes.filter(c => c.nome.match(nome));
}

export function obterCliente(id: number) {
  return clientes.find(c => c.id == id);
}
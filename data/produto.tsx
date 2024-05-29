import Entidade from "./entidade";

export class Produto extends Entidade {

  nome: string;
  valor: number;

  constructor(id: number = 0, nome: string = "", valor: number = 0) {
    super(id);
    this.nome = nome;
    this.valor = valor;
  }

}

const produtos: Produto[] = [
  new Produto(1, "AGUA", 2.0),
  new Produto(2, "CAFE", 3.0),
  new Produto(3, "CHOCOLATE", 6.0),
  new Produto(4, "PAPEL", 13.5),
  new Produto(5, "ESPONJA", 4.0),
  new Produto(6, "BISCOITO", 3.5),
  new Produto(7, "BOLACHA", 3.5),
  new Produto(8, "CERVEJA", 4.9),
  new Produto(9, "FRALDA", 70.0),
  new Produto(10, "LEITE", 17.0),
];

export function obterTodosProdutos() {
  return produtos;
}

export function obterProdutosPorNome(nome: string) {
  return produtos.filter(c => c.nome.match(nome));
}

export function obterProduto(id: number) {
  return produtos.find(c => c.id == id);
}
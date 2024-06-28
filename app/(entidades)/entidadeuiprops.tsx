/*
inputsToDo contém os dados para criar um input para um atributo de um Objeto:
nome: as propriedades id e name do input são formados pela string "ipt" contatenada com o nome do atributo;
valor: valor do atributo como string, podendo ser string vazia se ainda não tiver valor.
rotulo: rótulo a ser aplicado para o input
tipo: tipo do input que deve ser criado para o atributo (text, email, date, etc. - ver input types de HTML);

*/

type inputTypes =
  "button" |
  "checkbox" |
  "date" |
  "email" |
  "image" |
  "password" |
  "tel" |
  "text" |
  "time" |
  "url";

export default class EntidadeUIProps {

  rotulo: string;
  tipo: inputTypes;
  nome: string;
  valor: string;

  constructor(rotulo: string, tipo: inputTypes, nome: string, valor: string = "") {
    this.rotulo = rotulo;
    this.tipo = tipo;
    this.nome = nome;
    this.valor = valor;
  }
}
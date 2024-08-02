import Entidade from "@/app/(entidades)/entidade";

export default class Cliente extends Entidade {

  nome: string;
  email: string;

  constructor(id: number = 0, nome: string = "", email: string = "") {
    super(id);
    this.nome = nome;
    this.email = email;
  }

}
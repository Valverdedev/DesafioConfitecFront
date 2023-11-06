import { NivelEscolaridade } from "./NivelEscolaridade";

export class UsuarioModel {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  dataNascimento: Date;
  escolaridade: NivelEscolaridade;

  constructor() {
    this.id = 0;
    this.nome = '';
    this.sobrenome = '';
    this.email = '';
    this.dataNascimento = new Date();
    this.escolaridade = NivelEscolaridade.Fundamental;
  }
}

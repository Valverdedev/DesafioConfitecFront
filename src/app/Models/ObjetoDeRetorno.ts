export class ObjetoDeRetorno<T> {
  sucesso: boolean;
  mensagem: string;
  data: T;

  constructor() {
    this.sucesso = false;
    this.mensagem = '';
    this.data = null as unknown as T; // Inicializa com null e faz um cast para o tipo genérico T
  }
}

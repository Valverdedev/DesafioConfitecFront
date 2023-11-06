import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../Models/UsuarioModel';
import { UsuarioService } from '../../../Services/UsuarioService';
import {ObjetoDeRetorno} from '../../../Models/ObjetoDeRetorno'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../Services/toast.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  isEdicao: boolean = false;
  usuarios: UsuarioModel[] = [];
  usuarioModel: UsuarioModel;
  loading = true;

  constructor(private usuarioService: UsuarioService, public toastService: ToastService) {
    this.usuarioModel = new UsuarioModel();
  }


ngOnInit() {

this.usuarioService.getUsuarios().subscribe(
  (resposta: ObjetoDeRetorno<UsuarioModel[]>) => {
    this.loading = false
    if (resposta.sucesso) {
      this.usuarios = resposta.data;

    } else {
      console.error(resposta.mensagem);
      this.toastService.show(resposta.mensagem, { classname: 'bg-danger text-light', delay: 15000 });
    }
  },
  (erro) => {
    this.loading = false;
    console.error(erro);
  }
);
}
Formacao($event : any){
 this.usuarioModel.escolaridade = $event;
}
submitForm() {
  this.usuarioService.postUsuario(this.usuarioModel).subscribe(
    (resposta: ObjetoDeRetorno<UsuarioModel>) => {
      this.loading = false
      if (resposta.sucesso) {
        this.usuarioModel = resposta.data;
        this.ngOnInit();
        this.toastService.show(resposta.mensagem, { classname: 'bg-success text-light', delay: 10000 });
      } else {
        console.error(resposta.mensagem);
        this.toastService.show(resposta.mensagem, { classname: 'bg-danger text-light', delay: 15000 });
      }
    },
    (erro) => {
      this.loading = false;
      console.error(erro);
    }
  );
}
excluirUsuario(id: number) {
  this.usuarioService.excluirUsuario(id).subscribe(
    (resposta: ObjetoDeRetorno<UsuarioModel>) => {
      if (resposta.sucesso) {
        this.toastService.show(resposta.mensagem, { classname: 'bg-success text-light', delay: 10000 });
        // Atualize a lista de usuários após a exclusão
        this.ngOnInit();
      } else {
        console.error(resposta.mensagem);
        this.toastService.show(resposta.mensagem, { classname: 'bg-danger text-light', delay: 15000 });
      }
    },
    (erro) => {
      console.error(erro);
    }
  );
}
}

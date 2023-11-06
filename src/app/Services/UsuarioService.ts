import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../../app/Models/UsuarioModel';
import { ObjetoDeRetorno } from '../Models/ObjetoDeRetorno';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:44358';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<ObjetoDeRetorno<UsuarioModel[]>> {
    return this.http.get<ObjetoDeRetorno<UsuarioModel[]>>(`${this.apiUrl}/listarTodos`);
  }

  postUsuario(usuario: UsuarioModel): Observable<ObjetoDeRetorno<UsuarioModel>> {
    return this.http.post<ObjetoDeRetorno<UsuarioModel>>(`${this.apiUrl}/InserirUsuario`, usuario);
  }

  excluirUsuario(id: number): Observable<ObjetoDeRetorno<UsuarioModel>> {
    return this.http.delete<ObjetoDeRetorno<UsuarioModel>>(`${this.apiUrl}/ExcluirUsuario/${id}`);
  }


}

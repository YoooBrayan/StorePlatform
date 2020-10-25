import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario'

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  API = 'http://localhost:8080/api/v1/';
  usuario:Usuario;

  constructor(private http: HttpClient) { }
    

  login(usuario:Usuario){
    return this.http.post(`${this.API}usuario/authenticate`, usuario);
  }

  update(usuario:Usuario){
    console.log("updated")
    return this.http.put(`${this.API}usuario`, usuario);
  }
}

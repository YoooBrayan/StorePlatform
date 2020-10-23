import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuario: Usuario = {
    nombre: '',
    nit: 0,
    tipo_documento: 0,
    numero_documento: '',
    email: '',
  };

  updated: boolean;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    let usuario = JSON.parse(window.localStorage.getItem('usuario'));
    this.usuario = usuario;
  }

  update() {
    this.updated = false;
    this.usuarioService.update(this.usuario).subscribe(
      (res:boolean) => {
        this.updated = res;
      console.log(this.usuario)
      window.localStorage.removeItem("usuario");
      window.localStorage.setItem("usuario", JSON.stringify(this.usuario))
        setTimeout(() => {
          this.updated = false;
        }, 3000);
      },
      (error) => {
        this.updated = false;
        console.log('eror', error);
      }
    );
  }
}

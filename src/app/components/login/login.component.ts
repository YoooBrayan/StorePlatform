import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private usuarioService: UsuarioService) {}


  email:string;
  password:string;

  usuario: Usuario = {
    id : 1,
    nombre : '',
    nit : 1,
    tipo_documento : 2, 
    numero_documento : '',
    valor : 2,
    cantidad : 1,
    descripcion : '',
    email: "",
    password: ""
  };

  islogin: boolean;

  ngOnInit(): void {}

  login() { 
    console.log(this.usuario);
    this.usuarioService
      .login(this.usuario)
      .subscribe((res) => console.log(res))
      console.log(this.islogin)
    if(this.islogin){
      this.router.navigate(['home']);
    }
  }
}

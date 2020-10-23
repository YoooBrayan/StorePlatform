import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParsedUrlQuery, stringify } from 'querystring';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  email: string;
  password: string;

  usuario: Usuario = {
    email: '',
    password: '',
  };

  islogin: boolean = true;
  error: boolean = false;

  ngOnInit(): void {}

  login() {
    this.islogin = false;
    this.usuarioService.login(this.usuario).subscribe(
      (res: ParsedUrlQuery) => {
        window.localStorage.setItem('usuario', JSON.stringify(res));
        this.error = false;
        this.islogin = true;
        this.router.navigate(['home']);
      },
      (error) => {
        console.log('error', error);
        this.islogin = true;
        this.error = true;
      }
    );
  }
}

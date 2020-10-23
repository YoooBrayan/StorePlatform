import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuario: Usuario = {
    nombre: "",
    nit: 0,
    tipo_documento: 0,
    numero_documento: "",
    email: ""
  };

  constructor() {}

  ngOnInit(): void {
    let usuario = JSON.parse(window.localStorage.getItem("usuario"));
    this.usuario = usuario;
    console.log(this.usuario)
  
  }

  update(){
    console.log(this.usuario)
  }
}

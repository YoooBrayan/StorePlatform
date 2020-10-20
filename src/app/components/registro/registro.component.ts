import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  estado: boolean;

  constructor(private router: Router) { 
    this.estado = false;
  }


  ngOnInit(): void {
  }

  register(){

    console.log("register")
    this.estado = true;
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 3000);

  }

}

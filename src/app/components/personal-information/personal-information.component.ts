import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  @Input() usuario: Usuario;

  updated: boolean;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  update() {
    this.updated = false;
    this.usuarioService.update(this.usuario).subscribe(
      (res: boolean) => {
        this.updated = res;
        window.localStorage.removeItem('usuario');
        window.localStorage.setItem('usuario', JSON.stringify(this.usuario));
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

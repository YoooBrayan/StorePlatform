import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Store } from '../../models/Store';
import { UsuarioService } from '../../services/usuario.service';
import { StoreService } from '../../services/store.service';

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

  store: Store = {
    id: 0,
    nombre: '',
    foto: '',
    id_encargado: 0,
    tipo: 0,
  };

  storeSelected: number = 0;
  updated: boolean;
  addStore: boolean;

  constructor(
    private usuarioService: UsuarioService,
    private storeService: StoreService
  ) {
    this.addStore = false;
  }

  ngOnInit(): void {
    this.usuario = JSON.parse(window.localStorage.getItem('usuario'));
    this.getStores();
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

  stores: Store[] = [];

  save() {
    this.addStore = !this.addStore !== false ? this.addStore : !this.addStore;
    this.store.id_encargado = this.usuario.id;
    this.storeService.save(this.store).subscribe(
      (res) => {
        this.stores.push(this.store);
        this.store = {
          nombre: '',
          tipo: 0,
          foto: '',
          id_encargado: 0,
        };
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  getStores() {
    this.storeService.getStores(this.usuario.id).subscribe((res: []) => {
      this.stores = res !== null ? res : [];
    });
  }

  add() {
    this.addStore = !this.addStore;
  }
}

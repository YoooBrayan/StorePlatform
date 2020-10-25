import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Store } from '../../models/Store';
import { Product } from '../../models/product';
import { UsuarioService } from '../../services/usuario.service';
import { StoreService } from '../../services/store.service';
import { ProductService } from '../../services/product.service'

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

  /*store: Store = {
    id: 0,
    nombre: '',
    foto: '',
    id_encargado: 0,
    tipo: 0,
  };*/

  addStore: boolean;

  products : Product[];

  constructor(
    private storeService: StoreService,
    private productService: ProductService
  ) {
    this.addStore = false;
  }

  ngOnInit(): void {
    this.usuario = JSON.parse(window.localStorage.getItem('usuario'));
    this.getStores();
    this.getProducts();
  }

  getProducts(storeSelected=0){
    if(storeSelected!==0)
    this.productService.getAll(storeSelected).subscribe((res:[]) => {
      console.log("res",res);
      this.products = res;
    },
    (error) => {
      console.log("error",error)
      this.products = [];
    })
  }

  stores: Store[] = [];

  save(store:Store) {
    this.addStore = !this.addStore !== false ? this.addStore : !this.addStore;
    store.id_encargado = this.usuario.id;
    this.storeService.save(store).subscribe(
      (res) => {
        this.stores.push(store);
        store = {
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

  handleChange(storeSelected:number){
    console.log(storeSelected)
    if(storeSelected!==0)
    this.getProducts(storeSelected);
  }
}

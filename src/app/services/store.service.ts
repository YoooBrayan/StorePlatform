import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { isPlatformBrowser } from '@angular/common';
import { Store } from '../models/Store'

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  API = 'http://localhost:8080/api/v1/';

  store: Store = {
    id: 0,
    nombre: '',
    tipo: 0,
    id_encargado: 0,
    foto: ''
  }

  constructor(private http : HttpClient) { }

  save(store:Store){
    return this.http.post(`${this.API}negocio`, store);
  }

  getStores(id_encargado: number){
    return this.http.get(`${this.API}/negocio/negocios/${id_encargado}`);
  }
}

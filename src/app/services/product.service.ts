import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:8080/api/v1/';

  save(product: Product) {
    return this.http.post(`${this.API}producto`, product);
  }

  getAll(id:number){
    return this.http.get(`${this.API}producto/${id}`);
  }
}

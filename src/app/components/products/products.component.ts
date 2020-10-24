import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { StoreService } from '../../services/store.service';
import { Store } from '../../models/Store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductService,
    private storeService: StoreService
  ) {}

  product: Product = {
    nombre: '',
    descripcion: '',
    tipo: 0,
    cantidad: 0,
    valor: 0,
  };

  isSave: boolean = false;
  isError: boolean = false;

  stores: Store[];
  storeSelected: number = 0;

  ngOnInit(): void {
    this.storeService
      .getStores(JSON.parse(window.localStorage.getItem('usuario')).id)
      .subscribe(
        (res: []) => (this.stores = res),
        (error) => console.log(error)
      );
  }

  save() {
    this.isSave = false;
    this.product.id_negocio = this.storeSelected;
    console.log(this.product)
    this.productService.save(this.product).subscribe(
      (res) => {
        console.log('res', res);
        this.isSave = true;
        this.isError = false;
        setTimeout(() => {
          this.router.navigate(['home']);
          this.isSave = false;
        }, 2000);
      },
      (error) => {
        this.isError = true;
        console.log(error);
      }
    );
  }
}

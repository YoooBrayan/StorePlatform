import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from 'src/app/models/Store';
import { Usuario } from 'src/app/models/Usuario';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css'],
})
export class AddStoreComponent implements OnInit {
  
  store: Store = {
    id: 0,
    nombre: '',
    foto: '',
    id_encargado: 0,
    tipo: 0,
  };

  @Output() save: EventEmitter<Store>;

  constructor() {
    this.save = new EventEmitter();
  }

  ngOnInit(): void {}

  saveStore() {
    this.save.emit(this.store);
  }

}

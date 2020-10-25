import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from 'src/app/models/Store';

@Component({
  selector: 'app-select-store',
  templateUrl: './select-store.component.html',
  styleUrls: ['./select-store.component.css'],
})
export class SelectStoreComponent implements OnInit {
  @Input() stores: Store[];
  storeSelected: number;
  @Output() handleChangeE: EventEmitter<number>;

  constructor() {
    this.handleChangeE = new EventEmitter();
  }


  handleChange(){
    this.handleChangeE.emit(this.storeSelected);
  }

  ngOnInit(): void {}
}

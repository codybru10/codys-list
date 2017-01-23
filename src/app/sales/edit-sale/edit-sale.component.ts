import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sale } from '../sale';

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html'
})
export class EditSaleComponent {
  @Input() childSelectedSale: Sale;
  @Output() doneEditingSender = new EventEmitter();

  doneEditingBtn() {
    this.doneEditingSender.emit();
  }

}

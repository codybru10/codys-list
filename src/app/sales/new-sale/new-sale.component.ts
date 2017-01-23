import { Component, Output, EventEmitter } from '@angular/core';
import { Sale } from '../sale';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html'
})
export class NewSaleComponent {
  @Output() newSaleSender = new EventEmitter();

  submitForm(title: string, user: string, description: string, price: number, location: string) {
    var newSale: Sale = new Sale(title, user, description, price, location);
    this.newSaleSender.emit(newSale);
  }


}

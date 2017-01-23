import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sale } from '../sale';

@Component({
  selector: 'app-sales-listing',
  templateUrl: './sales-listing.component.html'
})
export class SalesListingComponent {
 @Input() childSales: Sale[];
 @Output() saleSender = new EventEmitter();

 editSaleBtn(selectedSale){
   this.saleSender.emit(selectedSale);
 }

}

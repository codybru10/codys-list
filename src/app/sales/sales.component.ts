import { Component } from '@angular/core';
import { Sale } from './sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html'
})
export class SalesComponent {
  newSaleToggle = false;
  selectedSale = null;

  masterSales: Sale[] = [
    new Sale('JerkGuy101', 'Stolen Bike', 'Found this on some poor sap\'s porch', 5, 'Portland, OR'),
    new Sale('CoolPerson', 'Ford Mustang', 'Shelby Edition', 55000, 'Southeast Portland, OR')
  ];

  addSale(sentSale){
    this.masterSales.push(sentSale);
  }

  saleToggle(){
    this.newSaleToggle = !this.newSaleToggle;
  }

  editSale(clickedSale){
    this.selectedSale = clickedSale;
  }

  doneEditing(){
    this.selectedSale = null;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: '<td (click)="putXorO()">{{cellvalue}}</td>',
  styles: ['td { border-style: solid; border-width: 5px;}']
})
export class CellComponent  {
   cellvalue = ' _ ';
   isXNext: boolean  = true;

   putXorO() {
     if(this.isXNext == true){
       this.isXNext = false;
       this.putX();
     } else {
       this.isXNext = true;
       this.putY();
     }
   }

   putX() {
     this.cellvalue = ' X ';
     console.log("Am apasat pe X");
   }

   putY() {
     this.cellvalue = ' O ';
   }
}

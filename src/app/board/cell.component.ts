import { Component } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: '<td (click)="putXorO()">{{cellvalue}}</td>',
  styles: ['td { text-align: center; height: 20px; width: 20px; background-color: lightblue; border-style: solid; border-width: 1px;}']
})
export class CellComponent  {
   cellvalue = '.';
   isXNext: boolean  = true;

   putXorO() {
     if(this.cellvalue != '.'){
       return;
     }
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

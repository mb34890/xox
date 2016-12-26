import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../';

@Component({
  selector: 'app-cell',
  template: '<td (click)="putXorO()">{{cellvalue}}</td>',
  styles: ['td { text-align: center; height: 20px; width: 20px; background-color: lightblue; border-style: solid; border-width: 1px;}']
})
export class CellComponent implements OnInit {
  cellvalue = '.';

  ngOnInit() {
    console.log("CELL INIT: " + Game.getNextMove());
  }

  putXorO() {
    if (this.cellvalue != '.') {
      return;
    }
    if (Game.getNextMove() == 'X') {
      this.putX();
    } else {
      this.putO();
    }
  }

  putX() {
    this.cellvalue = 'X';
    console.log("Am apasat pe X");
    Game.setNextMove('Y');
  }

  putO() {
    this.cellvalue = 'O';
    Game.setNextMove('X');
  }
}



import {Component} from "@angular/core";
@Component({
  selector:'calendar-cell',
  styleUrls: ['calendar-cell.scss'],
  templateUrl: 'calendar-cell.html'
})

export class CalendarCell {

  isNull:boolean;


  constructor(isNull: boolean) {
    this.isNull = isNull;
  }
}

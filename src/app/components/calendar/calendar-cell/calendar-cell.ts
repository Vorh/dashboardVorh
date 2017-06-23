

import {Component, Input} from "@angular/core";
import {CalCellObject} from "../../../models/calendar/CalCellObject";
@Component({
  selector:'calendar-cell',
  styleUrls: ['_calendar-cell.scss'],
  templateUrl: 'calendar-cell.html'
})

export class CalendarCell {


  @Input()
  callCell:CalCellObject;


  constructor() {


  }
}

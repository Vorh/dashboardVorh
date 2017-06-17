import {Component, Input, OnInit} from "@angular/core";
import {Month} from "../../../models/month";
import {CalendarCell} from "./calendar-cell/calendar-cell";
/**
 * Created by vorh on 6/17/17.
 */


@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html',
  styleUrls: ['calendar.scss']
})

export class Calendar implements OnInit {


  @Input()
  month: Month;


  days:;

  ngOnInit(): void {
    let currentDay = 0;
    let maxCell = 35;
    console.log('init cell ' + this.month.firstDayOfWeek + ' Test ' +this.month.countDay);
    let firstDayOfWeek = this.month.firstDayOfWeek;

    let row = 0;
    let currentWeek = 0;

    for (; currentDay < maxCell; currentDay++){

      if (currentDay < firstDayOfWeek){
        this.days[currentWeek][row] = new CalendarCell(true);
      }else {
        this.days[currentWeek][row] = new CalendarCell(false);
      }
      row++;
      if (row==6){
        currentWeek++;
        row = 0;
      }
    }

    alert(this.days);


  }


}


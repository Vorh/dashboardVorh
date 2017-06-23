import {Component, Input, OnInit} from "@angular/core";
import {Month} from "../../models/calendar/month";
import {CalCellObject} from "../../models/calendar/CalCellObject";
/**
 * Created by vorh on 6/17/17.
 */


@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html',
  styleUrls: ['_calendar.scss']
})

export class Calendar implements OnInit {

  monthNames: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  month: Month;
  currentYear: number;
  currentMonth: number;

  cells: CalCellObject[] = [];


  ngOnInit(): void {

    let date = new Date();

    this.month = new Month();
    this.currentMonth = date.getMonth();

    this.initCalendar(date);
  }

  initCalendar(date: Date) {

    this.month.name = this.monthNames[date.getMonth()];

    this.currentYear = date.getFullYear();
    let month = date.getMonth() + 1;
    let daysOfMonth = Calendar.getDaysOfMonth(this.currentYear, month);
    let firstDay = new Date(this.currentYear, month - 1);
    let lastDay = new Date(this.currentYear, month, 0);


    let numberCell = 0;
    for (; numberCell < firstDay.getDay(); numberCell++) {
      let cell = new CalCellObject();
      cell.isDayPreviousMonth = true;
      this.cells[numberCell] = cell;
    }


    for (let i = 1; i < daysOfMonth + 1; i++) {
      let cell = new CalCellObject();
      cell.day = i;
      this.cells[numberCell] = cell;
      numberCell++;
    }

    for (; numberCell < 35; numberCell++) {
      let cell = new CalCellObject();
      cell.isDayPreviousMonth = true;
      this.cells[numberCell] = cell;
    }


    console.log("First day " + firstDay);
    console.log("Last day " + lastDay);
    console.log('Month ' + month);
    console.log("Year " + date.getFullYear());
    console.log('Days of month ' + daysOfMonth);
    console.log('Count cell ' + this.cells.length);

    this.cells[15].isTodo = true;
    this.cells[25].isTodo = true;
    this.cells[5].isTodo = true;

  }


//   NEXT_YEAR,1
//   NEXT_MONTH,2
//   PREVIOUS_YEAR,3
//   PREVIOUS_MONTH 4

  changeYearOrMonth(type: number) {
    let date = new Date();
    switch (type) {
      case 1:
        this.currentYear +=1;
        break;
      case 2:
        if (this.currentMonth + 1 > 11) {
          this.currentYear += 1;
          this.currentMonth = 0;
        } else {
          this.currentMonth += 1;
        }
        break;
      case 3:
        this.currentYear -= 1;
        break;
      case 4:
        if (this.currentMonth - 1 <0) {
          this.currentYear -= 1;
          this.currentMonth = 11;
        } else {
          this.currentMonth -= 1;
        }
        break;
    }
    date.setFullYear(this.currentYear, this.currentMonth);
    this.initCalendar(date);
  }


  static getDaysOfMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }


  getCell(start: number, end: number) {
    let tempCell = [];
    let count = 0;
    for (; start != end; start++) {
      tempCell[count] = this.cells[start];
      count++;
    }
    return tempCell;
  }


}





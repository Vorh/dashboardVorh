import {Component, Input, OnInit} from "@angular/core";
import {Month} from "../../models/calendar/Month";
import {CalCellObject} from "../../models/calendar/CalCellObject";
import {TodoService} from "../../services/todoService/todoServiceBasic.service";
import {TypeTodo} from "../../models/typeTodo";
import {Todo} from "../../models/todo";
import {Year} from "../../models/calendar/Year";
import {TypeCell} from "../../models/calendar/TypeCell";
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

  currentMonth: Month;
  currentYear:Year;

  years: Year[]  = [];

  numberYear: number;
  numberMonth: number;

  currentCells: CalCellObject[] = [];


  constructor(private todoService:TodoService) {

  }

  ngOnInit(): void {

    let date = new Date();

    this.todoService.getListTodo(date.getFullYear(),TypeTodo.DATE)
      .subscribe();

    this.currentMonth = new Month();
    this.numberMonth = date.getMonth();

    this.initCalendar(date);
  }

  initCalendar(date: Date) {

    this.currentMonth.name = this.monthNames[date.getMonth()];

    this.numberYear = date.getFullYear();
    let month = date.getMonth() + 1;
    let daysOfMonth = Calendar.getDaysOfMonth(this.numberYear, month);
    let firstDay = new Date(this.numberYear, month - 1);
    let lastDay = new Date(this.numberYear, month, 0);


    let numberCell = 0;
    for (; numberCell < firstDay.getDay(); numberCell++) {
      let cell = new CalCellObject();
      cell.type = TypeCell.PREVIOUS_DAY;
      this.currentCells[numberCell] = cell;
    }


    for (let i = 1; i < daysOfMonth + 1; i++) {
      let cell = new CalCellObject();
      cell.day = i;
      cell.type = TypeCell.USUAL;
      this.currentCells[numberCell] = cell;
      numberCell++;
    }

    for (; numberCell < 35; numberCell++) {
      let cell = new CalCellObject();
      cell.type = TypeCell.PREVIOUS_DAY;
      this.currentCells[numberCell] = cell;
    }


    console.log("First day " + firstDay);
    console.log("Last day " + lastDay);
    console.log('Month ' + month);
    console.log("Year " + date.getFullYear());
    console.log('Days of month ' + daysOfMonth);
    console.log('Count cell ' + this.currentCells.length);

    this.currentCells[15].type = TypeCell.TODO;
    this.currentCells[25].type = TypeCell.TODO;
    this.currentCells[5].type = TypeCell.TODO;

  }

  fillMonth(todo:Todo[],date:Date){

    for(let i =0; i < todo.length; i++){

      for (let m = 0; m < 12; m++){
        date.setMonth(m);
        let firstDay;
        let lastDay;
      }

    }
  }

  createMonths(year:Date){

  }


  NEXT_YEAR:number = 1;
  NEXT_MONTH:number = 2;
  PREVIOUS_YEAR:number = 3;
  PREVIOUS_MONTH:number = 4;

  changeDate(type: number) {
    let date = new Date();
    switch (type) {
      case this.NEXT_YEAR:
        this.numberYear +=1;
        break;
      case this.NEXT_MONTH:
        if (this.numberMonth + 1 > 11) {
          this.numberYear += 1;
          this.numberMonth = 0;
        } else {
          this.numberMonth += 1;
        }
        break;
      case this.PREVIOUS_YEAR:
        this.numberYear -= 1;
        break;
      case this.PREVIOUS_MONTH:
        if (this.numberMonth - 1 <0) {
          this.numberYear -= 1;
          this.numberMonth = 11;
        } else {
          this.numberMonth -= 1;
        }
        break;
    }
    date.setFullYear(this.numberYear, this.numberMonth);
    this.initCalendar(date);
  }


  static getDaysOfMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }


  getCell(start: number, end: number) {
    let tempCell = [];
    let count = 0;
    for (; start != end; start++) {
      tempCell[count] = this.currentCells[start];
      count++;
    }
    return tempCell;
  }


}





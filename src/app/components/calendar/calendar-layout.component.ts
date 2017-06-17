import {Component, OnInit} from "@angular/core";
import {TodoService} from "../../services/todoService/todoServiceBasic.service";
import {Month} from "../../models/month";
/**
 * Created by vorh on 6/16/17.
 */

@Component({
  selector: 'calendar-layout',
  templateUrl: 'calendar-layout.html',
  styleUrls: ['calendar-layout.scss']
})

export class CalendarLayout implements OnInit{


   monthNames:string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  months:Month[] = [];



  constructor(private todoService:TodoService) {

  }

  ngOnInit(): void {
    let date = new Date();
    this.createMonth(date);
    this.extractTodo(date.getFullYear());
  }


  extractTodo(year:number){
    let listTodo = this.todoService.getListTodo(year);


  }

  createMonth(date:Date){
    for (let i = 0 ; i < 2 ; i++){
      let month = new Month();
      date.setMonth(i);
      let firstDay = new Date(date.getFullYear(), date.getMonth()-1, 1);
      let lastDay = new Date(date.getFullYear(), date.getMonth(), 0);

      month.firstDayOfWeek = firstDay.getDate();
      month.startDate = firstDay.getTime();
      month.endDate = lastDay.getTime();
      month.name = this.monthNames[i];
      month.countDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

      this.months[i] = month;
    }

  }


}


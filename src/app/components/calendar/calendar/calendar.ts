import {Component, Input, OnInit} from "@angular/core";
import {Todo} from "../../../models/todo";
/**
 * Created by vorh on 6/17/17.
 */


@Component ({
  selector: 'calendar',
  templateUrl: 'calendar.html',
  styleUrls: ['calendar.scss']
})

export class Calendar implements OnInit{



  @Input()
  name:string;

  @Input()
  year:number;

  @Input()
  todoList:Todo[];

  ngOnInit(): void {

  }




}



import {AfterContentInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Todo} from "../../../models/todo";

@Component({
  selector: 'panel-todo',
  templateUrl: './panelTodo.component.html',
  styleUrls: ['./panelTodo.component.scss']
})
export class PanelTodo implements OnChanges {

  @Input() todoList: Todo[];

  constructor() { }


  filterTypeTodo(type:String){
    this.todoList.filter((value, index, array) => {

    });
  }


}

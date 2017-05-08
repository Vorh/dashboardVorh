import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../../models/todo";

@Component({
  selector: 'panel-todo',
  templateUrl: './panelTodo.component.html',
  styleUrls: ['./panelTodo.component.scss']
})
export class PanelTodo implements OnInit {

  @Input() todoList: Todo[];

  constructor() { }

  ngOnInit() {
  }

}

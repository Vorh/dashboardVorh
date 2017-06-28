import {AfterContentInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Todo} from "../../../models/todo";
import {forEach} from "@angular/router/src/utils/collection";
import {FilterTodo} from "../../../models/filterTodo";
import {TypeTodo} from "../../../models/typeTodo";

@Component({
  selector: 'panel-todo',
  templateUrl: 'panelTodo.component.html',
  styleUrls: ['_panelTodo.component.scss']
})
export class PanelTodo {

  @Input() todoList: Todo[];

  @Input() filtersTypeTodo: FilterTodo[];
  primaryTodoList: Todo[];

  constructor() { }


  filterTypeTodo(filter: TypeTodo){
    let filterTodoList = [];

    for(let todo of this.todoList){
      if (todo.type == filter){
          filterTodoList.push(todo);
      }
    }

    this.primaryTodoList = this.todoList;
    this.todoList = filterTodoList;
  }

  resetTypeTodo(){
    this.todoList = this.primaryTodoList;
  }



}

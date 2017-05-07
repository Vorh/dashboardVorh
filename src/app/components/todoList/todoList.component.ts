import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Todo} from "../../models/todo";
import {TodoService} from "../../services/todoService/todoServiceBasic.service";
import {AppSetting} from "../../app.setting";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.scss']
})
export class TodoList implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService, private  http: Http) {
  }

  ngOnInit() {
     this.todoService.getListToDo().subscribe(item=>{
       this.todoList = item;
     });
  }

  addTodo() {
  }

  removeTodo(todo:Todo ){
    let index = this.todoList.indexOf(todo, 0);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }

    this.todoService.removeTodo(todo);
  }

  openTodo(id, toggle) {
    let element = document.getElementById(id);
    let valueHeight = element.clientHeight;
    if (valueHeight > 0) {
      element.style.height = '0';
      element.style.display = 'none';
      toggle.add('fa-chevron-down');
      toggle.remove('fa-chevron-up');
    } else {
      element.style.height = '100%';
      element.style.display = 'block';
      toggle.remove('fa-chevron-down');
      toggle.add('fa-chevron-up');
    }
  }

  getTime(date:number): String{
    let value = new Date(date);
    return value.toDateString();
  }


  getClassForLabel(date:number):String{
    let currentDate = new Date();
    if (date < currentDate.getTime()){
      return "statusImportant";
    }else {
      return "statusDayLeft";
    }
  }

  completeTodo(todo: Todo){
    let todoDiv = document.getElementById('todo-'+todo.id);
    let checkbox = <HTMLInputElement> document.getElementById('checkbox-' +todo.id);
    let span = todoDiv.getElementsByTagName("span");
    if (checkbox.checked){
      todo.complete = true;
      span.item(0).className += "todo-complete";
    }else {
      todo.complete = false;
      span.item(0).className = "";
    }
    this.todoService.updateTodo(todo);
  }

}

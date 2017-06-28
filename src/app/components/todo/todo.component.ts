


import {Component, OnInit} from "@angular/core";
import {TodoService} from "../../services/todoService/todoServiceBasic.service";
import {TodoList} from "./todoList/todoList.component";
import {Todo} from "../../models/todo";
import {FilterTodo} from "../../models/filterTodo";
import {TypeTodo} from "../../models/typeTodo";
@Component ({
  selector: "root-todo",
  templateUrl: "todo.component.html",
  styleUrls: ["_todo.component.scss"]
})


export class RootTodo implements OnInit{

  todoList:Todo[];
  typeTodoList:FilterTodo[];

  constructor(private todoService:TodoService) {
  }

  ngOnInit(): void {
    // this.todoService.getListToDo().subscribe(item => {
    //   let sort = item.sort((a, b) => {
    //     if (a.date > b.date) return-1;
    //     if (a.date < b.date) return 1;
    //     return 0;
    //   });
    //   this.todoList = sort;
    // });

    this.createFilterTodo();
  }

  private createFilterTodo(){
    this.typeTodoList = [];

    let everyTodo = new FilterTodo();
    everyTodo.type =TypeTodo.EVERY_DAY;
    everyTodo.name = "Every Day";

    let test = new FilterTodo();
    test.type =TypeTodo.DATE;
    test.name = "Test";

    this.typeTodoList.push(test);
    this.typeTodoList.push(everyTodo);
  }


}

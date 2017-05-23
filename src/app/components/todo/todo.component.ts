


import {Component, OnInit} from "@angular/core";
import {TodoService} from "../../services/todoService/todoServiceBasic.service";
import {TodoList} from "./todoList/todoList.component";
import {Todo} from "../../models/todo";
@Component ({
  selector: "root-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})


export class RootTodo implements OnInit{

  todoList:Todo[];

  constructor(private todoService:TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getListToDo().subscribe(item => {
      let sort = item.sort((a, b) => {
        if (a.date > b.date) return-1;
        if (a.date < b.date) return 1;
        return 0;
      });
      this.todoList = sort;
    });
  }



}

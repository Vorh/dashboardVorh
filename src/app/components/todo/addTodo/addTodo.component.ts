import {Component, Input, OnInit} from "@angular/core";
import {Todo} from "../../../models/todo";
import {TodoService} from "../../../services/todoService/todoServiceBasic.service";


@Component({
  selector: "add-todo",
  templateUrl: 'addTodo.component.html',
  styleUrls: ['_addTodo.component.scss']
})
export class AddTodo implements OnInit{

  @Input() todoList: Todo[];

  type:number = 1;
  caption:string;


  constructor(private todoService:TodoService) {
  }

  ngOnInit(): void {
  }

  setVisibleModal(isVisible : boolean) {
    let modal = document.getElementById('modalAddTodo');

    if (isVisible){
      modal.style.display = 'block';
    }else {
      modal.style.display = 'none';

      this.caption = '';
      this.type = 1;
    }
  }

  setTypeTodo(){
    alert(this.type);
  }

  addTodo(){
    let todo = new Todo();
    todo.type = this.type;
    todo.caption = this.caption;
    todo.complete = false;
    todo.date = new Date().getTime();
    todo.id = 0;

    this.todoService.addToDo(todo);
    this.todoList.push(todo);
    this.setVisibleModal(false);
  }

}

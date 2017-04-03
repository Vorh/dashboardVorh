import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.scss']
})
export class TodoList implements OnInit {

  constructor() {
  }

  ngOnInit() {
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

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-todo',
  templateUrl: './header-todo.component.html',
  styleUrls: ['./header-todo.component.scss']
})
export class HeaderTodoComponent implements OnInit {
  title = 'Header'


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-todo',
  templateUrl: './headerTodo.component.html',
  styleUrls: ['./headerTodo.component.scss']
})
export class HeaderTodo implements OnInit {
  title = 'Header';

  constructor() { }

  ngOnInit() {
  }

}

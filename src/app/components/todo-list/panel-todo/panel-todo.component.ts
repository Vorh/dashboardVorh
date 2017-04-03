import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-todo',
  templateUrl: './panel-todo.component.html',
  styleUrls: ['./panel-todo.component.scss']
})
export class PanelTodoComponent implements OnInit {
  title = 'TEST';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-todo',
  templateUrl: './panelTodo.component.html',
  styleUrls: ['./panelTodo.component.scss']
})
export class PanelTodo implements OnInit {
  title = 'TEST';

  constructor() { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SideBar} from './components/sideBar/sideBar.component';
import {TodoList} from './components/todoList/todoList.component';
import {HeaderTodo} from './components/todoList/headerTodo/headerTodo.component';
import {PanelTodo} from './components/todoList/panelTodo/panelTodo.component';
import {TodoService} from './services/todoService/todoServiceBasic.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBar,
    TodoList,
    HeaderTodo,
    PanelTodo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

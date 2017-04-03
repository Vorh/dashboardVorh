///<reference path="components/sideBar/sideBar.component.ts"/>
///<reference path="components/todoList/headerTodo/headerTodo.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SideBarComponent} from './components/sideBar/sideBar.component';
import {TodoListComponent} from './components/todoList/todoList.component';
import {HeaderTodoComponent} from './components/todoList/headerTodo/headerTodo.component';
import {PanelTodoComponent} from './components/todoList/panelTodo/panelTodo.component';
import {TodoServiceBasic} from './services/todoService/todoServiceBasic.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TodoListComponent,
    HeaderTodoComponent,
    PanelTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoServiceBasic],
  bootstrap: [AppComponent]
})
export class AppModule { }

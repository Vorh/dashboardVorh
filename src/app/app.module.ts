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
import {AddTodo} from "./components/todoList/addTodo/addTodo.component";
import {ComboBox} from "./components/ui/combobox/combobox.component";

@NgModule({
  declarations: [
    AppComponent,
    SideBar,
    TodoList,
    HeaderTodo,
    PanelTodo,
    AddTodo,
    ComboBox,
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

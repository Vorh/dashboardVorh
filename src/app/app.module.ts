///<reference path="components/ui/combobox/combobox.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SideBar} from './components/sideBar/sideBar.component';
import {TodoList} from './components/todo/todoList/todoList.component';
import {HeaderTodo} from './components/todo/headerTodo/headerTodo.component';
import {PanelTodo} from './components/todo/panelTodo/panelTodo.component';
import {TodoService} from './services/todoService/todoServiceBasic.service';
import {AddTodo} from "./components/todo/addTodo/addTodo.component";
import {RootTodo} from "./components/todo/todo.component";
import {FilterTodoComboBox} from "./components/todo/panelTodo/filters/filterTodo.component";
import {ComboBox} from "./components/ui/combobox/combobox.component";
import {RouterModule, Routes} from "@angular/router";
import {CalendarLayout} from "./components/calendar/calendar-layout.component";
import {AppRoutingModule} from "./app-routing-module";
import {Calendar} from "./components/calendar/calendar/calendar";



@NgModule({
  declarations: [
    AppComponent,
    SideBar,
    TodoList,
    HeaderTodo,
    PanelTodo,
    AddTodo,
    RootTodo,
    CalendarLayout,
    Calendar,
    FilterTodoComboBox,
    ComboBox
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})



export class AppModule {




}

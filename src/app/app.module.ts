import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderTodoComponent } from './components/todo-list/header-todo/header-todo.component';
import { PanelTodoComponent } from './components/todo-list/panel-todo/panel-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

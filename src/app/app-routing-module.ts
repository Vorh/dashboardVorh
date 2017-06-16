/**
 * Created by vorh on 6/16/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RootTodo} from "./components/todo/todo.component";
import {CalendarLayout} from "./components/calendar/calendar-layout.component";


const router:Routes = [
  { path:'todo', component: RootTodo },
  { path: 'calendar',component:CalendarLayout},
  { path: '', redirectTo: '/todo', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(router) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

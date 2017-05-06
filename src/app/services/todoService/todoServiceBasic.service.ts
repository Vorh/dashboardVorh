import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Todo} from '../../models/todo';
import 'rxjs/add/operator/toPromise';
import {AppSetting} from '../../app.setting';
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {

  constructor(private http: Http) {
  }


  getListToDo(): Observable<Todo[]> {
    return this.http.get(AppSetting.URL + '/todo/list')
      .map(response => {
        const any = response.json();
        const deeds: Todo[] = [];
        console.log(any.length);
        for (let i = 0; i < any.length; i++) {
          const counter = any[i];
          const tempTodo = new Todo();
          tempTodo.title = counter.caption;
          tempTodo.id = counter.id;
          tempTodo.complete = counter.complete;
          console.log(tempTodo.complete);
          deeds[i] = tempTodo;
        }
        return deeds;
      });
  }

  addToDo(todo: Todo) {

  }

  removeTodo(todo: Todo) {

  }

  updateTodo(todo: Todo) {

  }

}

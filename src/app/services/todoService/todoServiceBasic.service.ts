import {Injectable} from '@angular/core';
import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
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
        for (let i = 0; i < any.length; i++) {
          const temp = any[i];

          const tempTodo = new Todo();
          tempTodo.caption = temp.caption;
          tempTodo.id = temp.id;
          tempTodo.complete = temp.complete;
          tempTodo.type = temp.type;
          tempTodo.date = temp.date;
          deeds[i] = tempTodo;
        }
        return deeds;
      });
  }

  addToDo(todo: Todo) {

  }

  removeTodo(todo: Todo) {
    this.http.get(AppSetting.URL + '/todo/remove/' + todo.id).subscribe();
  }

  updateTodo(todo: Todo) {
    let url = AppSetting.URL + '/todo/update/';
    let header = new Headers();
    header.append("Accept","application/json");
    header.append("Content-Type","application/json");

    let tempJson = JSON.stringify(todo);
    tempJson=tempJson.replace(/_/g,"");
    let request = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: header,
      body: tempJson
    });
    this.http.request(url,request).subscribe();
  }

}

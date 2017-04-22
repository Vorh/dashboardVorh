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


  // getListToDo(): Promise<Todo[]> {
  //   return this.http.get(AppSetting.URL + '/todo/list')
  //     .toPromise()
  //     .then(response => {
  //       const any = response.json();
  //       const deeds: Todo[] = [];
  //       console.log(any.length);
  //       for (let i = 0; i < any.length; i++) {
  //
  //         const counter = any[i];
  //         const tempTodo = new Todo();
  //         tempTodo.title = counter.title;
  //         tempTodo.id = counter.id;
  //         tempTodo.complete = counter.complete;
  //         console.log(tempTodo.complete);
  //
  //         deeds[i] = tempTodo;
  //       }
  //       return deeds;
  //     });
  // }

  getListToDo(): Observable<Todo[]> {

    return this.http.get(AppSetting.URL + '/todo/list')
      .map(this.extractTodo);


  }


  private extractTodo(res: Response){
    alert("EXTRACT");
    let body =res.json();
    alert(body);
    return body.data || {};
  }

  addToDo(todo: Todo) {

  }

  removeTodo(todo: Todo) {

  }

  updateTodo(todo: Todo) {

  }

}

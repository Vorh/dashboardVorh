import {Todo} from '../../models/todo';

export interface TodoServiceService {

  addToDo(todo: Todo);

  removeTodo(todo: Todo);

  getListToDo();

}

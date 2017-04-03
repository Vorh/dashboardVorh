import {Todo} from '../../models/todo';
export interface TodoService {
  addToDo(todo: Todo);

  removeTodo(todo: Todo);

  getListToDo();
}

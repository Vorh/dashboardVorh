import {ComboBox, Item} from "../../../ui/combobox/combobox.component";
import {Component, Input} from "@angular/core";
import {TodoList} from "../../todoList/todoList.component";
import {Todo} from "../../../../models/todo";
/**
 * Created by vorh on 5/24/17.
 */

@Component({
  selector: "filter-todo",
  styleUrls: ["filterTodo.component.scss"],
  templateUrl: "filterTodo.component.html"
})


export class FilterTodoComboBox extends ComboBox{

  constructor(){
    super();
  }

  select(item: Item) {
    alert(item.getValue());
  }





}

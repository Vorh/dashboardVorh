import {ComboBox, Item} from "../../../ui/combobox/combobox.component";
import {Component, Input} from "@angular/core";
import {TodoList} from "../../todoList/todoList.component";
import {Todo} from "../../../../models/todo";
/**
 * Created by vorh on 5/24/17.
 */

@Component({
  selector: "filter-todo",
  templateUrl: "filterTodo.component.html",
  styleUrls: ["_filterTodo.component.scss"]
})


export class FilterTodoComboBox extends ComboBox{

  constructor(){
    super();
  }

  select(item: Item) {
    alert(item.getValue());
  }





}

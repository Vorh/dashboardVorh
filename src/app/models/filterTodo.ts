import {TypeTodo} from "./typeTodo";
import {Item} from "../components/ui/combobox/combobox.component";
/**
 * Created by vorh on 5/24/17.
 */

export class FilterTodo implements Item{

  private _name: String;
  private _type: TypeTodo;

  select() {
  }

  getValue(): string {
    return name;
  }

  get type(): TypeTodo {
    return this._type;
  }

  set type(value: TypeTodo) {
    this._type = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }
}

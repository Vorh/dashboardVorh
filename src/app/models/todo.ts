
import {TypeTodo} from "./typeTodo";
export class Todo {
  private _id: number;
  private _caption: string;
  private _content: string;
  private _complete: boolean;
  private _type: TypeTodo;
  private _date: number;
  private _select:boolean;


  static getTypeTodo(id:number):TypeTodo{
      switch (id){
        case 1:
          return TypeTodo.EVERY_DAY;
        case 2:
          return TypeTodo.END_DATE;
      }
  }

  get select(): boolean {
    return this._select;
  }

  set select(value: boolean) {
    this._select = value;
  }

  get date(): number {
    return this._date;
  }

  set date(value: number) {
    this._date = value;
  }


  get type(): TypeTodo{
    return this._type;
  }

  set type(value: TypeTodo) {
    this._type = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get caption(): string {
    return this._caption;
  }

  set caption(value: string) {
    this._caption = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get complete(): boolean {
    return this._complete;
  }

  set complete(value: boolean) {
    this._complete = value;
  }
}


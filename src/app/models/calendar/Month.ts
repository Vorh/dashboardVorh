import {Todo} from "../todo";
/**
 * Created by vorh on 6/17/17.
 */


export class Month {

  private _todoList:Todo[];
  private _name:string;
  private _startDate:number;
  private _endDate:number;
  private _countDay;
  private _firstDayOfWeek;


  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }

  set firstDayOfWeek(value) {
    this._firstDayOfWeek = value;
  }

  get countDay() {
    return this._countDay;
  }

  set countDay(value) {
    this._countDay = value;
  }

  get todoList(): Todo[] {
    return this._todoList;
  }

  set todoList(value: Todo[]) {
    this._todoList = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get startDate(): number {
    return this._startDate;
  }

  set startDate(value: number) {
    this._startDate = value;
  }

  get endDate(): number {
    return this._endDate;
  }

  set endDate(value: number) {
    this._endDate = value;
  }
}

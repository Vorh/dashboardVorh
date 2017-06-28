import {Month} from "./Month";
/**
 * Created by vorh on 6/28/17.
 */


export class Year {

  private _months:Month[];
  private _date:Date;


  get months(): Month[] {
    return this._months;
  }

  set months(value: Month[]) {
    this._months = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  number():number{
    return this._date.getFullYear();
  }

}

/**
 * Created by vorh on 6/20/17.
 */



export class CalCellObject {

  private _day:number;
  private _isDayPreviousMonth;
  private _isTodo;




  constructor() {
    this.isDayPreviousMonth = false;
  }


  get isTodo() {
    return this._isTodo;
  }

  set isTodo(value) {
    this._isTodo = value;
  }

  get isDayPreviousMonth() {
    return this._isDayPreviousMonth;
  }

  set isDayPreviousMonth(value) {
    this._isDayPreviousMonth = value;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }
}

/**
 * Created by vorh on 6/20/17.
 */



export class CalCellObject {

  private _day:number;
  private _isDayPreviousMonth;


  constructor() {
    this.isDayPreviousMonth = false;
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

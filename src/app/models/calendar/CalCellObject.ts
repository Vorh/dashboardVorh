import {TypeCell} from "./TypeCell";
/**
 * Created by vorh on 6/20/17.
 */



export class CalCellObject {

  private _day:number;
  private _isDayPreviousMonth;
  private _isTodo;
  private _type:TypeCell;



  constructor() {
    this.isDayPreviousMonth = false;
    this.isTodo = false;
  }


  get type(): TypeCell {
    return this._type;
  }

  set type(value: TypeCell) {
    this._type = value;
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

/**
 * Created by vorh on 6/20/17.
 */



export class CalCellObject {

  private _day:number;


  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }
}

/**
 * Created by vorh on 5/24/17.
 */



export class TypeTodo {
  private _id:number;
  private _name:String;
  private _endDate:Date;
  private _type:TypeTypeTodo;


  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get type(): TypeTypeTodo {
    return this._type;
  }

  set type(value: TypeTypeTodo) {
    this._type = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }
}

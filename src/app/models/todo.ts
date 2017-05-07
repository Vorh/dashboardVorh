export class Todo {
  private _id: number;
  private _caption: string;
  private _text: string;
  private _complete: boolean;
  private _type: number;
  private _date: number;


  get date(): number {
    return this._date;
  }

  set date(value: number) {
    this._date = value;
  }


  get type(): number {
    return this._type;
  }

  set type(value: number) {
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

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get complete(): boolean {
    return this._complete;
  }

  set complete(value: boolean) {
    this._complete = value;
  }
}


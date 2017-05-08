export class Todo {
  private _id: number;
  private _caption: string;
  private _content: string;
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


import {Tag} from "./tag";
export class Todo {
  private _id: number;
  private _title: string;
  private _text: string;
  private _complete: boolean;
  private _tags: Tag[];


  get tags(): Tag[] {
    return this._tags;
  }

  set tags(value: Tag[]) {
    this._tags = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
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


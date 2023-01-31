export class User {
  constructor(private readonly _name: string) {}

  get name() {
    return this._name;
  }
}

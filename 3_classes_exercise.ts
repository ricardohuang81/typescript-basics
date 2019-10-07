// Exercise - Getters & Setters
class Yuman {
  private _firstName:string = "";

  // call getters and setters like properties, not methods
  get firstName() {
    return this._firstName;
  }

  set firstName(value:string) {
    if(value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}

const homosapien = new Yuman();
console.log(homosapien.firstName);
homosapien.firstName = "Stephen";
console.log(homosapien.firstName);

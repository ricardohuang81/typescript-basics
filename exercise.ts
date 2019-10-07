type BA = { money: number, deposit: (val: number) => void };

let bankAccount: BA = {
  money: 2000,
  deposit(value:number):void {
    this.money += value;
  }
}

let myself: {name:string, bankAccount: BA, hobbies: string[]} = {
  name: "Rick",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(3000);

console.log(myself);
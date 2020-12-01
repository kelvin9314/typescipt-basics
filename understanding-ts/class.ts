class Department {
  name: string;

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department){
    console.log(`Department: ${this.name}`)
  }
}

const accounting = new Department('Accounting')
console.log(accounting.name)

accounting.describe()


// const accountingCopy = {describe: accounting.describe}
// accountingCopy.describe()  //  it return undefined

const accountingCopy2 = {name: 'copy', describe: accounting.describe}
accountingCopy2.describe()  //  it return undefined
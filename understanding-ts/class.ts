class Department {
  name: string;
  private employees: string[] = []

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department){
    console.log(`Department: ${this.name}`)
  }

  addEmployees(employee: string){
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('Accounting')
console.log(accounting.name)
accounting.addEmployees('Max')
accounting.addEmployees('Hugo')

accounting.describe()

// accounting.printEmployeeInfo()


// const accountingCopy = {describe: accounting.describe}
// accountingCopy.describe()  //  it return undefined

// const accountingCopy2 = {name: 'copy', describe: accounting.describe}
// accountingCopy2.describe()  //  it return undefined
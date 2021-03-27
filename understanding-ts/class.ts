class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []

  constructor(private readonly id: string, private name: string) {
    // this.id = id
    // this.name = n
  }

  describe(this: Department){
    console.log(`Department: (${this.id}) ${this.name}`)
  }

  addEmployees(employee: string){
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('0001','Accounting')
accounting.addEmployees('Max')
accounting.addEmployees('Hugo')

accounting.describe()

// accounting.printEmployeeInfo()


// const accountingCopy = {describe: accounting.describe}
// accountingCopy.describe()  //  it return undefined

// const accountingCopy2 = {name: 'copy', describe: accounting.describe}
// accountingCopy2.describe()  //  it return undefined


class ITDepartment extends Department {
  
  constructor(id: string, private admins: string[]){
    super(id, 'IT')
  }
}

const it = new ITDepartment('d1',['Max'])
it.addEmployees('Max')
it.addEmployees('Hugo')

it.printEmployeeInfo()

class AccountDepartment extends Department {
  
  private lastReport: string
  
  get mostRecentReport(){
    if(!this.lastReport){
      throw new Error("No report found.");
      
    }
    return this.lastReport;
  }

  set mostRecentReport(value: string){
    if(!value) {
      throw new Error("please pass in a valid value");
      
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]){
    super(id, 'ACCOUNTING')
    this.lastReport = reports[0]
  }

  addEmployees(name: string){
    if(name === "Max") return 

    this.employees.push(name)
  }

  addReport(text: string){
    this.reports.push(text)
    this.lastReport = text
  }

  printReports(){
    console.log(this.reports)
  }
}

const account = new AccountDepartment('d2', [])

// setter
account.mostRecentReport = 'Year end report'
account.addReport('Something went wrong...')
// getter
console.log(account.mostRecentReport)
account.addEmployees('Max')
account.addEmployees('Manu')
account.printReports()

account.printEmployeeInfo()
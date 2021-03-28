abstract class Department {
  // private readonly id: string;
  // private name: string;
  static fiscalYear = 2021
  protected employees: string[] = []

  constructor(protected readonly id: string, private name: string) {
    // this.id = id
    // this.name = n
    // console.log(this.fiscalYear) // it will cause error
    console.log(Department.fiscalYear) 
  }

  static crateEmployee(name: string){
    return {name: name}
  }

  abstract describe(this: Department): void;

  addEmployees(employee: string){
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

// const accounting = new Department('0001','Accounting')
// accounting.addEmployees('Max')
// accounting.addEmployees('Hugo')

// accounting.describe()

// accounting.printEmployeeInfo()


// const accountingCopy = {describe: accounting.describe}
// accountingCopy.describe()  //  it return undefined

// const accountingCopy2 = {name: 'copy', describe: accounting.describe}
// accountingCopy2.describe()  //  it return undefined


class ITDepartment extends Department {
  
  constructor(id: string, private admins: string[]){
    super(id, 'IT')
  }

  describe(){
    console.log('IT Department - ID: ' + this.id)
  }
}

const employee1 = Department.crateEmployee('Max')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1',['Max'])
it.addEmployees('Max')
it.addEmployees('Hugo')

it.printEmployeeInfo()
it.describe()

class AccountDepartment extends Department {
  
  private lastReport: string
  private static instance: AccountDepartment
  
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

  private constructor(id: string, private reports: string[]){
    super(id, 'ACCOUNTING')
    this.lastReport = reports[0]
  }

  static getInstance(){
    if(AccountDepartment.instance){
      return this.instance
    }

    this.instance = new AccountDepartment('d2', [])
    return this.instance
  }
  
  describe(){
    console.log('Account Department - ID: ' + this.id)
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

// const account = new AccountDepartment('d2', [])
const account = AccountDepartment.getInstance()
const account2 = AccountDepartment.getInstance()

console.log(account) // there are the same object
console.log(account2) // there are the same object

// setter
account.mostRecentReport = 'Year end report'
account.addReport('Something went wrong...')
// getter
console.log(account.mostRecentReport)
account.addEmployees('Max')
account.addEmployees('Manu')

// account.printReports()
// account.printEmployeeInfo()
account.describe()
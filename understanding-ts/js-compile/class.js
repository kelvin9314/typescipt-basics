"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    static crateEmployee(name) {
        return { name: name };
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
const employee1 = Department.crateEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
it.addEmployees('Max');
it.addEmployees('Hugo');
it.printEmployeeInfo();
it.describe();
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, 'ACCOUNTING');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (!this.lastReport) {
            throw new Error("No report found.");
        }
        return this.lastReport;
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("please pass in a valid value");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Account Department - ID: ' + this.id);
    }
    addEmployees(name) {
        if (name === "Max")
            return;
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const account = AccountDepartment.getInstance();
const account2 = AccountDepartment.getInstance();
console.log(account);
console.log(account2);
account.mostRecentReport = 'Year end report';
account.addReport('Something went wrong...');
console.log(account.mostRecentReport);
account.addEmployees('Max');
account.addEmployees('Manu');
account.describe();
//# sourceMappingURL=class.js.map
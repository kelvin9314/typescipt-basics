"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    Department.crateEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2021;
    return Department;
}());
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
var employee1 = Department.crateEmployee('Max');
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment('d1', ['Max']);
it.addEmployees('Max');
it.addEmployees('Hugo');
it.printEmployeeInfo();
it.describe();
var AccountDepartment = (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment(id, reports) {
        var _this = _super.call(this, id, 'ACCOUNTING') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (!this.lastReport) {
                throw new Error("No report found.");
            }
            return this.lastReport;
        },
        set: function (value) {
            if (!value) {
                throw new Error("please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountDepartment.getInstance = function () {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment('d2', []);
        return this.instance;
    };
    AccountDepartment.prototype.describe = function () {
        console.log('Account Department - ID: ' + this.id);
    };
    AccountDepartment.prototype.addEmployees = function (name) {
        if (name === "Max")
            return;
        this.employees.push(name);
    };
    AccountDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountDepartment;
}(Department));
var account = AccountDepartment.getInstance();
var account2 = AccountDepartment.getInstance();
console.log(account);
console.log(account2);
account.mostRecentReport = 'Year end report';
account.addReport('Something went wrong...');
console.log(account.mostRecentReport);
account.addEmployees('Max');
account.addEmployees('Manu');
account.describe();
//# sourceMappingURL=class.js.map
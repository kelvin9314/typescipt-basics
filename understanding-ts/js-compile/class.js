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
    }
    Department.prototype.describe = function () {
        console.log("Department: (" + this.id + ") " + this.name);
    };
    Department.prototype.addEmployees = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('0001', 'Accounting');
accounting.addEmployees('Max');
accounting.addEmployees('Hugo');
accounting.describe();
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var it = new ITDepartment('d1', ['Max']);
it.addEmployees('Max');
it.addEmployees('Hugo');
it.printEmployeeInfo();
var AccountDepartment = (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment(id, reports) {
        var _this = _super.call(this, id, 'ACCOUNTING') || this;
        _this.reports = reports;
        return _this;
    }
    AccountDepartment.prototype.addEmployees = function (name) {
        if (name === "Max")
            return;
        this.employees.push(name);
    };
    AccountDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountDepartment;
}(Department));
var account = new AccountDepartment('d2', []);
account.addReport('Math');
account.addEmployees('Max');
account.addEmployees('Manu');
account.printReports();
account.printEmployeeInfo();
//# sourceMappingURL=class.js.map
"use strict";
var Department = (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
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
var accounting = new Department('Accounting');
console.log(accounting.name);
accounting.addEmployees('Max');
accounting.addEmployees('Hugo');
accounting.describe();
//# sourceMappingURL=class.js.map
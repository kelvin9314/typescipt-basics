"use strict";
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
//# sourceMappingURL=class.js.map
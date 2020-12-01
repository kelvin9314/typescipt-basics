"use strict";
var Department = (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accounting = new Department('Accounting');
console.log(accounting.name);
accounting.describe();
var accountingCopy2 = { name: 'copy', describe: accounting.describe };
accountingCopy2.describe();
//# sourceMappingURL=class.js.map
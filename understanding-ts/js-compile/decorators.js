"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log('LOGGER FACTOR');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTOR');
    return function (constructor) {
        console.log('Rendering template');
        const hookElement = document.getElementById(hookId);
        const p = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1').textContent = p.name;
        }
    };
}
let People = class People {
    constructor() {
        this.name = 'Kelvin';
        console.log('Creating people object...');
    }
};
People = __decorate([
    Logger('LOGGING'),
    WithTemplate('<h1>My People Object</h1>', 'app')
], People);
const ppl = new People();
console.log(ppl);
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive!");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=decorators.js.map
"use strict";
// ================ Problem 1 ============ //
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    return toUpper == undefined || toUpper
        ? input.toUpperCase()
        : input.toLowerCase();
}
// =============== Problem 2 =========== //
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
// ========== Problem 3 ============= //
function concatenateArrays(...arrays) {
    const result = [];
    arrays.forEach((array) => result.push(...array));
    return result;
}
// ======== Problem 4 =============//
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
// ======== Problem 5 =============//
function processValue(value) {
    return typeof value === "string" ? value.length : value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let mostExpensive = products[0];
    for (const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }
    return mostExpensive;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
// ======== Problem 7 =============//
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Sunday ? "Weekend" : "Weekday";
}
// ======== Problem 8 =============//
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n > 0) {
                    resolve(n * n);
                }
                else {
                    reject(new Error("Negative number not allowed"));
                }
            }, 1000);
        });
    });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);

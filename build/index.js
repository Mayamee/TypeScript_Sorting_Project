"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./shared/Sorter");
const NumbersCollection_1 = require("./shared/NumbersCollection");
const _collection = new NumbersCollection_1.NumbersCollection([1, 2, 3, 53, 13, 4, 100, 23, 4]);
const sorter = new Sorter_1.Sorter(_collection);
sorter.sort();
console.log(sorter.collection);

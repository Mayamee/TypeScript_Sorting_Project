import { Sorter } from "./shared/Sorter";
import { NumbersCollection } from "./shared/NumbersCollection";
const _collection = new NumbersCollection([1, 2, 3, 53, 13, 4, 100, 23, 4]);
const sorter = new Sorter(_collection);
sorter.sort();
console.log(sorter.collection);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
var charactersCollection = new CharactersCollection_1.CharactersCollection('stringZXxYyz');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
// const numbersCollection = new NumbersCollection([-10,0,3,-5,50]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data)
// class Sorter {
//   // collection: number[];
//   // constructor(collection: number[]) {
//   //   this.collection = collection;
//   // }
//
//   constructor(public collection: number[] | string) {}
//
//   sort(): void {
//     const { length } = this.collection;
//
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection instanceof Array) {
//
//           if (this.collection[j] > this.collection[j]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j+1];
//             this.collection[j+1] = leftHand;
//           }
//         }
//
//         if(typeof this.collection === 'string') {
//
//         }
//       }
//     }
//   }
// }

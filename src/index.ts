import {Sorter} from './Sorter';
import { NumbersCollection } from './NumbersCollection'


const numbersCollection = new NumbersCollection([10,3,-5,100]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection)

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

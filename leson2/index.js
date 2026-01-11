import {
    sumArray,
    countOccurrences, 
    removeDuplicates,
    flattenArray,
    isSymmetric,
    findSecondLargest,
    sortProductsByPrice,
    findMostExpensiveProduct,
    groupByType,isSubset,
    findMaxKey,
    mergeObjectsSumValues,
    countElements,
    cleanObject,
    hasDuplicate,
    sumByGroup

 } from "./until.js"

// let arr = [1, 2, 3, 4]
// const bai1 = sumArray(arr) 
// console.log(bai1)

// let arr = [1, 2, 2, 3, 2]
// let value = 2
// console.log(countOccurrences(arr, value))

// let arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// const bai2 = removeDuplicates(arr)
// console.log(bai2)

// let arr = [[1, 2], [3, 4]];
// const bai4 = flattenArray(arr);
// console.log(bai4);

// let arr = [1, 2, 3, 2, 1, 0, 4]
// console.log(isSymmetric(arr))

// let arr = [3, 1, 4, 2, 4]
// console.log(findSecondLargest(arr))

// let products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];

// console.log(sortProductsByPrice(products))
// console.log(findMostExpensiveProduct(products))


// let arr = [
//     { type: 'fruit', name: 'apple' },
//     { type: 'vegetable', name: 'carrot' },
//     { type: 'fruit', name: 'banana' }
// ];

// console.log(groupByType(arr))

// let arr1 = [1, 2, 3, 4]
// let arr2 = [2, 4]
// console.log(isSubset(arr1, arr2))

// let obj = { a: 10, b: 20, c: 40 }

// console.log(findMaxKey(obj))

// let obj1 = { a: 10, b: 20 };
// let obj2 = { b: 30, c: 40 };
// console.log(mergeObjectsSumValues(obj1, obj2))

// let arr = ['a', 'b', 'a', 'c', 'b', 'a']
// console.log(countElements(arr))

// let obj = { a: 1, b: null, c: undefined, d: 4 } 
// console.log(cleanObject(obj))

// let arr = [1,2,3,4,5,1]
// console.log(hasDuplicate(arr))

let arr = [
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
];
let key = 'type'    

console.log(sumByGroup(arr, key))
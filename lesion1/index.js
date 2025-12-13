import { 
    productInfo, 
    printNameAge, 
    sum,
    greet, 
    sumUpTo, 
    square, 
    isEven, 
    firstElement, 
    printName,
    stringLength,
    toUpperCase,
    formatCurrency,
    max,
    isPrime,
    repeatString,
    sumOdd,
    sumGreaterThan,
    formatDate,
    firstThree,
    containsChar,
    mergeArrays,
    countOccurrences,
    filterOdd,
    greaterThan,
    factorial,
    separateEvenOdd,
    sortAsc,
    sumEvenIndex,
    multiplyByTwo,
    arrayToString
    
} from './untils.js';

const bai1 = productInfo("Sách", 20000)
//console.log(bai1.mes)

const bai2 = greet("An")
//console.log(bai2.mes)

const bai3 = sumUpTo(5);
//console.log(bai3.mes)

const bai4 = square(6);
//console.log(bai4.mes)

const bai5 = isEven(7);
//console.log(bai5)

const bai6 = firstElement([1, 2, 3]);
// console.log(bai6.mes)

const bai7 = sum(1, 2, 3, 4);
// console.log(bai7)

const bai8 = { name: "Nam", age: 30 };
// console.log(printNameAge(bai8).mes)

const people = [{ name: "And" }, { name: "Bình" }];
const bai9 = printName(people)
// console.log(bai9.mes)

const bai10 = stringLength("Hello World");
// console.log(bai10)

const bai11 = toUpperCase("javascript");
// console.log(bai11)

const bai12 = formatCurrency(1000000);
// console.log(bai12.mes)

const bai13 = max([10, 5, 20, 8]);
// console.log(bai13)

const bai14 = isPrime(7)
// console.log(bai14)

const bai15 = repeatString("Hello", 3);
// console.log(bai15.mes)

const bai16 = sumOdd([1, 2, 3, 4]);
// console.log(bai16)

const bai17 = sumGreaterThan([1, 2, 3, 4], 2);
// console.log(bai17)

const bai18 = formatDate("2024-11-28");
// console.log(bai18)

const bai19 = firstThree([1, 2, 3, 4, 5]);
// console.log(bai19)

const bai20 = containsChar("javascript", "j");
// console.log(bai20)

const bai21 = mergeArrays([1, 2], [3, 4]);
// console.log(bai21)

const bai22 = countOccurrences([1, 2, 2, 3, 2], 2);
// console.log(bai22)

const bai23 = filterOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 54, 56]);
// console.log(bai23)

const bai24 = greaterThan([1, 2, 3, 4], 2);
// console.log(bai24)

const bai25 = factorial(5);
// console.log(bai25)

const bai26 = separateEvenOdd([1,2,3,4,5])
// console.log(bai26.mes)

const bai27 = sortAsc([3, 1, 4, 2]);
// console.log(bai27)

const bai28 = sumEvenIndex([1,2,3,4,5])
// console.log(bai28)

const bai29 = multiplyByTwo([1, 2, 3]);
// console.log(bai29)

const bai30 = arrayToString(["a", "b", "c"])
console.log(bai30)
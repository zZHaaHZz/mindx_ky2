export const productInfo = (product, price) =>{
    let priceFormat = Number(price).toLocaleString();
    return {mes: `Sản phẩm: ${product}, Giá: ${priceFormat}VNĐ`}
}

export const greet = (name) =>{
    return {mes: `Xin chào ${name}!`}
} 

export const sumUpTo = (number) =>{
    let sum = 0;
    for(let i = 0; i<=number; i++){
        sum+=i;
    }
    return {mes: `Tong cac so tu 1 den ${number} = ${sum}`}
}

export const square =(number) =>{
    let result = number * number;
    return {mes: `Binh phuong cua ${number} = ${result}`}
}

export function isEven(number) {
    return (number % 2 === 0)? true : false
}

export function firstElement(arr){
    return {mes:  ` ${arr[0]}`}
}

export function sum(...arr){
    let result = 0
    for(let i = 0; i<arr.length; i++){
        result = result+ arr[i]
    }
    return result;
}

export function printNameAge(obj) {
    return {mes: `Name: ${obj.name}, age: ${obj.age}`}
} 

export function printName(obj){
    let result = ""
    for( let i = 0; i < obj.length; i++){
        result+= (i>0 ?", ": "") + obj[i].name
    }
    return {mes: result}
}

export function stringLength(str){
    return str.length
}

export function toUpperCase(str){
    return str.toUpperCase()
}

export function formatCurrency(number){
    let numberFormat = Number(number).toLocaleString();
    return {mes: `${numberFormat}VND`}
}

export function max(arr){
    let max = arr[0]
    for(let i =0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
} 

export function isPrime(n){
    if (n < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n).toFixed(0); i++){
        if((n % i ) == 0){
            return false
        }
    }
    return true
}

export function repeatString(str, lop){
    let result = ""
    for(let i = 0; i< lop; i++){
        result += str + " "
    }
    return {mes: `${result}`}
}

export function sumOdd(arr){
    let sum  = 0;
    for(let i = 0; i < arr.length; i++){
        if((arr[i]) % 2 != 0){
            sum+=arr[i]
        }
    }
    return sum;
}

export function sumGreaterThan(arr, n){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > n){
            sum+=arr[i]
        }
    }
    return sum
}

export function formatDate(str){
    let result = "";
    let strSplit = str.split("-");
    for(let i = strSplit.length-1; i >= 0; i--){
        result+= strSplit[i]
        if (i > 0) {
            result += "/";
        }
    }
    return result
}

export function firstThree(arr){
    let result = []
    for (let i = 0; i <= 2; i++){
        result.push(arr[i])
    }
    return result
}

export function containsChar(str, k){
    for(let i = 0; i< str.length; i++){
        if(str[i] == k){
            return true
        }
    }
    return false
}

export function mergeArrays(arr1, arr2){
    for( let i = 0; i<arr2.length; i++){
        arr1.push(arr2[i])
    }
    return arr1
}

export function countOccurrences(arr, key){
    let cout = 0
    for(let i = 0; i<=arr.length; i++){
        if(arr[i] == key){
            cout+=1;
        }
    }
    return cout
}

export function filterOdd(arr){
    let arrOdd = []
    for (let i = 0; i<arr.length; i++){
        if((arr[i] % 2) != 0){
            arrOdd.push(arr[i])
        }
    }
    return arrOdd
}

export function greaterThan(arr, key){
    let arrPush = []
    for( let i = 0; i<=arr.length; i++){
        if(arr[i] > key){
            arrPush.push(arr[i])
        }
    }
    return arrPush
}

export function factorial(n){
    let result = 1;
    for(let i = 1; i<= n; i++){
        result = result * i
    }
    return result
}

export function separateEvenOdd(arr){
    let even = []
    let odd = []
    for(let i = 0; i< arr.length; i++){
        if((arr[i] % 2) == 0){
            even.push(arr[i])
        }
        else{
        odd.push(arr[i])
        }
    }
    return {mes: `even: [${even}], odd: [${odd}]`}
}

export function sortAsc(arr){
    
    for(let i= 0 ; i< arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

export function sumEvenIndex(arr){
    let cout = 0
    for(let i = 0; i < arr.length; i++){
        cout++
    }
    return cout
}

export function multiplyByTwo(arr){
    let arr_2 = []
    for(let i = 0; i < arr.length; i++){
        let index = arr[i] * 2
        arr_2.push(index)
    }
    return arr_2
}
export function arrayToString(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}


export const sumArray = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

export const countOccurrences = (arr, value) => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            result++
        }
    }
    return result
}

export function removeDuplicates(arr) {
    let result = []

    const objMap = {};

    for (let i = 0; i < arr.length; i++) {
        if(objMap[arr[i]] === undefined){
            objMap[arr[i]] = 1
        }
    }   
    result = Object.keys(objMap)
    return result
}

export function flattenArray(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        for( let j = 0; j < arr[i].length; j++){
            res.push(arr[i][j])
        }
    }
    return res
}   

export function isSymmetric(arr){
    let left = 0
    let right = arr.length-1
    while(left < right){
        if(arr[left] != arr[right]){
            return false
        }
        left ++
        right --
    }
    return true
}

export function findSecondLargest(arr){
    let max = arr[0]
    let secondMax = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max
            max = arr[i]
        }
        else if (arr[i] < max && arr[i] > secondMax){
            secondMax = arr[i]
        }
    }
    return secondMax
}

export function sortProductsByPrice(products){
    return products.sort((a, b) => a.price - b.price)
}

export function findMostExpensiveProduct(products){
    let max = products[0]
    for(let i = 1; i < products.length; i++){
        if(products[i].price > max.price){
            max = products[i]
        }
    }
    return max
}

export function groupByType(arr){
    let res = {}

    for( let i = 0; i < arr.length; i++){
        const {type, name} = arr[i]
        if(res[type] === undefined){
            res[type] = [];
        }
        res[type].push(name)
     }
    return res
}

export function isSubset(arr1, arr2) {
    return arr2.filter(x => arr1.includes(x)).length === arr2.length;
}

export function findMaxKey(obj){
    return  Object.keys(obj).reduce((maxKey, key) => 
    obj[key] > obj[maxKey] ? key : maxKey);
}

export function mergeObjectsSumValues(obj1, obj2){
    let res = {...obj1}
    for(let key in obj2){
        if(res[key] != undefined){
            res[key] += obj2[key]
        }
        else{
            res[key] = obj2[key]
        }
    }
    return res
}

export function countElements(arr){
    let res = {}
    for(let i = 0; i < arr.length; i++){
        if( res[arr[i]] === undefined){
            res[arr[i]] = 1
        }   
        else{
             res[arr[i]] += 1
        }
    }
    return res
}

export function cleanObject(obj){
    let res = {}

    for(let key in obj){

        if(obj[key] !== undefined && obj[key] !== null){
            res[key] = obj[key]
        }
      
    }
    return res
}

export function hasDuplicate(arr){
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            if(arr[i] == arr[j]){
                return false
            }
        }
    }
    return true
}

export const sumByGroup =  (arr, key) => {
    let res = {}    
    for(let i = 0; i < arr.length; i++){
        const groupKey = arr[i][key]
        const price = arr[i]['price'] 
        if(res[groupKey] === undefined){
            res[groupKey] = price
        }
        else{
            res[groupKey] += price
        }
    }
    return res  

}
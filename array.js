
// let arr = [5, 4, 6, 8, 9, 7, 3, 2, 1, 45, 25, 32, 85, 74, 96, 24]

//retving data of array on webpage 

// for(let i=0;i<arr.length;i++){
//     document.getElementById('show').innerHTML+= arr[i]+'<br>';
// }

// Second method

// document.getElementById('show').innerHTML = arr.map(value=> value )

// accssecing data of array

// let elm = document.getElementById('show');
// let num = document.getElementById('data');

// function getData() {

//     let ch = parseInt(num.value.replace(/['"]/g, ''));

//     if (num.value > arr.length || typeof (parseInt(num.value)) !== 'number' || num.value === '') {
//         elm.innerText = 'please input valid number'
//     } else {
//         elm.innerText = arr[ch];
//     }
//     if(0 > num.value) elm.innerText = 'your input number should be greater than zero '
// }

// document.getElementById('btn').addEventListener('click', getData); 

// inserting element in array

// let array = [8, 2, 6, 9, 4, 1]

// let oldarr = document.getElementById('old-arr').innerHTML = 'Old Array' + ' ' + array;

// let usernum = document.getElementById('num');
// let position = document.getElementById('position');

// function insertFun() {

//     for (let i = array.length - 1; i >= 0; i--) {

//         if (i >= position.value) {

//             array[i + 1] = array[i];
//             if (i === parseInt(position.value)) array[i] = usernum.value;
//         }
//     }
//     document.getElementById('new-arr').innerHTML = 'New Array' + ' ' + array;
// }

// document.getElementById('ins-val').addEventListener('click', insertFun)

// deleting element from array

// let array = [8, 2, 6, 9, 4, 1]

// let removeNum = document.getElementById('remove');
// let oldarr = document.getElementById('old-arr').innerHTML = 'Old Array' + ' ' + array;

// function removeFun() {

//     for (let i = parseInt(removeNum.value); i < array.length; i++) {
//         array[i] = array[i + 1]
//     }
//     array.length =array.length-1
//     document.getElementById('new-arr').innerHTML = 'New Array' + ' ' + array;

// }
// document.getElementById('rm-btn').addEventListener('click', removeFun)

// searching element in array -- linier search
// let array = [5, 2, 9, 4, 8, 3, 1, 6, 10, 9, 15, 2, 8,9,2,8]

// let searchNum = document.getElementById('search');
// let oldarr = document.getElementById('old-arr').innerHTML = 'Array' + ' ' + array;
// let elm = document.getElementById('show');
// let arr = [];
// let arrindex = ''

// function searchFun() {

//     for (let i = 0; i < array.length; i++) {

// search first index
// if (array[i] === parseInt(searchNum.value)) {
//     elm.innerText = i;
//     break;
// }
// search last index
// if (array[i] === parseInt(searchNum.value)) {
//     elm.innerText = i;

// }
// Search all index
//         if (array[i] === parseInt(searchNum.value)) {
//             arr.push(i);
//             arrindex += `${i} ,`
//         }
//     }
//     elm.innerText = arrindex;
// }
// document.getElementById('sr-btn').addEventListener('click', searchFun);

// merge two sorted array

let arrA = [2, 6, 8, 10, 20, 30];
let arrB = [3, 5, 7, 9]

function mergeArr(firArr, secArr) {

        let arrC = [];

        let i = 0, j = 0, k = 0;

        while (firArr.length > i && secArr.length > j) {

                if (firArr[i] <= secArr[j]) {

                        arrC[k] = firArr[i];
                        i++
                } else {
                        arrC[k] = secArr[j];
                        j++
                }
                k++
        }

        while (firArr.length > i) {
                arrC[k] = firArr[i];
                i++
                k++
        }

        while (secArr.length > j) {
                arrC[k] = secArr[j];
                j++
                k++
        }

        return arrC;
}

// console.log(mergeArr(arrA, arrB));

// merge two array...

let arrOne = [2, 6, 8, 10, 20, 30];
let arrTwo = [3, 5, 7, 9];
let arrThree = []

for (let i = 0; i < arrOne.length; i++) {
        arrThree[i] = arrOne[i]
}

for (let i = 0; i < arrTwo.length; i++) {
        arrThree[arrOne.length + i] = arrTwo[i]
}

// console.log(arrThree);

// find majority element of array;

// let arr = [2, 4, 5, 5, 2, 5, 1, 1, 5, 5];

// first solution - bruteforce

// let index = -1;
// let maxOccar = 0;

// for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {

//                 if (arr[i] === arr[j]) count++;
//         }

//         if (count > maxOccar) {
//                 maxOccar = count;
//                 index = i;
//         }
// }

// if (maxOccar > arr.length / 2) {
//         console.log(arr[index]);

// } else {
//         console.log('no majority element');

// }

// second solution - using moore voting algo - does not pass all teste cases

// let arr = [2, 4, 5, 5, 2, 2, 1, 1, 2];

// let count = 0;
// let maxOccar = 0;

// for (let i = 0; i < arr.length; i++) {

//         if (count == 0) {
//                 maxOccar = i;
//         }

//         if (arr[i] === arr[maxOccar]) {
//                 count++
//         } else {
//                 count--;
//         }
// }

// console.log(maxOccar);
// console.log(count);

//  find max sum in countigious subArray and also the subArray start and end index

// let arr = [-2, 4, -3, 1, -5, 8, -4, 5, -5];

//  solution using kadne's algo

let startIndex = null;
let endIndex = null;

function kadneAlgo(arr) {

        let max = 0;
        let currMax = 0;

        for (let i = 0; i < arr.length; i++) {

                currMax += arr[i];

                if (currMax > max) {
                        max = currMax;
                        endIndex = i;
                }

                if (currMax > 0 && startIndex === null) {
                        startIndex = i;
                }

                if (currMax < 0) {
                        currMax = 0;
                        endIndex = null;
                        startIndex = null;
                }

        }

        return max;
}

// console.log(kadneAlgo(arr));
// console.log(startIndex);
// console.log(endIndex);

// buy and sell stock - find maximum profit when we can only buy one and sell that

// let stocks = [8, 1, 5, 3, 6, 4];

// let maxProfit = 0;
// let trade = stocks[0];
// let currProfit = 0;

// for (let i = 0; i < stocks.length; i++) {

//         trade = Math.min(stocks[i], trade);

//         if (stocks[i] > trade) currProfit = stocks[i] - trade;

//         if (currProfit > maxProfit) maxProfit = currProfit;

// }

// console.log(maxProfit);

// buy and sell stocks - calculate the maxProfit when user can buy as many round he wants but he could only hold one stock and after seling he buy again;


// function findMaxProfit(stocks) {

//         let buy = 0;
//         let sell = 0;
//         let profit = 0;
//         let dayarr = [];
//         let currSum = 0;

//         for (let i = 1; i < stocks.length; i++) {

//                 if (stocks[i] >= stocks[i - 1]) {
//                         sell++;
//                 } else {
//                         currSum = stocks[sell] - stocks[buy];
//                         if (currSum > 0) {
//                                 dayarr.push([buy, sell]);
//                                 profit += currSum;
//                         }
//                         sell = i;
//                         buy = i;
//                 }
//         }
//         currSum = stocks[sell] - stocks[buy];
//         if (currSum > 0) {
//                 dayarr.push([buy, sell]);
//                 profit += currSum;
//         }

//         return dayarr;
// }

// let stocks = [5, 3, 6, 2, 1, 4, 9, 5, 2];

// console.log(findMaxProfit(stocks));

// taping RainWater problem; find the sum of maximum water store;

let block = [1, 0, 2, 1, 0, 1, 3, 2, 1, 4, 2];

function collectWaterUnit(data) {

        let leftMax = [];
        let rightMax = [];

        let l = data[0];

        for (let i = 0; i < data.length; i++) {
                l = Math.max(l, data[i]);
                leftMax.push(l);
        }

        let r = data[data.length - 1];

        for (let i = data.length - 1; i >= 0; i--) {
                r = Math.max(r, data[i]);
                rightMax.unshift(r);
        }

        let sum = 0;

        for (let i = 0; i < data.length; i++) {
                sum += (Math.min(leftMax[i], rightMax[i]) - data[i]);
        }

        return sum;

}

// console.log(collectWaterUnit(block));

// find pivot index of sorted roteted array; -> min index;

let arr = [0, 4, 5, 9, 12, 25, 26, 32, 36, 40, 48];

let k = 6;

for (let i = 0; i < k; i++) {
        let x = arr.shift();
        arr.push(x);
}
// console.log(arr);

// First Solution

// function findPivot(data) {

//         let low = 0;
//         let high = data.length - 1;

//         if (data[low] < data[high]) return data[0];

//         while (low <= high) {

//                 let mid = Math.floor((low + high) / 2);

//                 if (data[mid] > data[mid + 1]) {
//                         return data[mid + 1];
//                 }
//                 else if (data[mid] < data[mid - 1]) {
//                         return data[mid];
//                 }
//                 else if (data[mid] > data[low]) {
//                         low = mid + 1;
//                 }
//                 else if (data[mid] < data[high]) {
//                         high = mid - 1;
//                 }

//         }

// }

// console.log(findPivot(arr));

// second Solution

let lo = 0;
let hi = arr.length - 1;

while (lo < hi) {

        let mid = Math.floor((lo + hi) / 2);

        if (arr[mid] < arr[hi]) {
                hi = mid;
        } else {
                lo = mid + 1;
        }
}

// console.log(arr[lo]);

// find the pair index of target value;

// let data = [50, 25, 60, 40, 90, 20, 10, 80, 45];
// let target = 75;

// let tempObj = {};
// let ans = null;

// for (let i = 0; i < data.length; i++) {

//         if (data[i] < target) {
//                 let need = target - data[i];

//                 if (tempObj[need] === undefined) {
//                         tempObj[data[i]] = i;
//                 } else {
//                         ans = [tempObj[need],i];
//                         break;
//                 }
//         }
// }

// console.log(ans);
// console.log(tempObj);

// same with two pointer approch;

let data = [50, 25, 60, 40, 90, 20, 10, 80, 45];
let target = 85;
let tempObj = {};

for (let val in data) {
        tempObj[data[val]] = val;
}

let ans = false;
let newArr = data.sort()
let ind = null;
let i = 0;
let j = newArr.length - 1;

while (i < j) {

        if ((newArr[i] + newArr[j]) > target) {
                j--;
        } else if ((newArr[i] + newArr[j]) < target) {
                i++;
        } else if ((newArr[i] + newArr[j]) == target) {
                ans = true;
                ind = [+tempObj[newArr[j]], +tempObj[newArr[i]]];
                break;
        }
}

// console.log(ans);
// console.log(ind);
// console.log(data);

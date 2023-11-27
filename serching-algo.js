//  Leanear Search

// let arr = [5,2,6,9,7,8,3,1,4,10];

// let position = 8;
// let result = undefined;

// for(let i=0; i<arr.length; i++){

//     if(arr[i] === position){

//         result = i;
//         break;
//     }
// }

// console.log(result);

// Binary search - Ittrtive approch
//  you can't use binary search on un-sorted array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let find = 2;
// let left = 0;
// let right = arr.length - 1;
// let result = undefined;

// while (left <= right) {

//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === find) {
//         result = mid;
//         break;
//     } else if (arr[mid] < find) {
//         left = mid + 1;
//     } else if (arr[mid] > find) {
//         right = mid - 1;
//     }
// }

// console.log(result);

// Binary Search - Recursive Approch

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let find = 1;
// let left = 0;
// let right = arr.length - 1;

let recursiveBinarySearch = (data, left, right) => {

    if (left > right) return 'Element not Present in given array';

    let mid = Math.floor((left + right) / 2);

    if (data[mid] == find) {
        return mid;
    } else if (data[mid] < find) {
        return recursiveBinarySearch(arr, mid + 1, right);
    } else {
        return recursiveBinarySearch(arr, left, mid - 1);
    }
}

// console.log(recursiveBinarySearch(arr, left, right));


// find element using binary search without right or highest index; don't use array length property to get highest index;

function searchInfinite(arr, findKey) {

    let low = 0;
    let high = 1;

    while (arr[high] < findKey) {
        low = high;
        high *= 2;

    }
    return recursiveBinarySearch(arr, low, high);
}

// console.log('Search Fun value =>',searchInfinite(arr,find));


// rotate the given array k terms and serch any element of array using binary serch;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 1;

// first solution

for (let i = 0; i < k; i++) {
    let x = arr.shift();
    arr.push(x);
}

// console.log(arr);

// second solution

function reverseArr(arr, first, last) {

    while (first <= last) {

        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;

        first++;
        last--;
    }
}

// reverseArr(arr, 0, k - 1);
// reverseArr(arr, k, arr.length - 1);
// reverseArr(arr, 0, arr.length - 1);

// console.log(arr);

// Binary search in roteted array;

let low = 0;
let high = arr.length - 1;
let findIndex = 1;
let ans = undefined;

while (low <= high) {

    let mid = Math.floor((low + high) / 2); 

    if (arr[mid] === findIndex){
        ans = mid;
        break;
    }
  
    if (arr[low] <= arr[mid]) {
        if (findIndex >= arr[low] && findIndex <= arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    } else {
        if (findIndex <= arr[high] && findIndex >= arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

// console.log(ans);









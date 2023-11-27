// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {

    if (arr[0] > arr[1]) {
        let temp = arr[0]
        arr[0] = arr[1];
        arr[1] = temp;
    }
    let num = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {

        num += i
    }

    return num;
}

// console.log(sumAll([4, 1]));

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    const newArr = [];

    let mySet = new Set([...arr1]);

    arr2.forEach(val => {
        let x = mySet.size
        mySet.add(val)
        if (x !== mySet.size) newArr.push(val)
    })
    return newArr;
}

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function diffArray(arr1, arr2) {
    const difference = new Set(arr1);
    arr2.forEach((ele) =>
        difference.has(ele) ? difference.delete(ele) : difference.add(ele)
    );
    return Array.from(difference);
}

//   You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...args) {

    let copy = [...arr]

    for (let i = 0; i < copy.length; i++) {

        if (args.includes(copy[i])) {

            arr[i] = undefined;
        }
    }
    return arr.filter(val => val !== undefined);
}

//  console.log( destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {

    let sourceKey = Object.keys(source);
    let newOBJ = []

    for (let val in collection) {
        let cn = 0;
        for (let key in source) {

            if (collection[val][key] === source[key]) cn++

        }

        if (cn == sourceKey.length) newOBJ.push(collection[val])
    }
    return newOBJ;
}

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

//   spinalCase('This Is Spinal Tap');

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

function myReplace(str, before, after) {

    let index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
}

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {

    let firstStr = str[0];
    let lastStr = str[str.length - 1];
    let alphabet = ''
    let temp = ''
    let j = 0;
    let k = 0;
    let val = undefined;

    for (let i = 97; i <= 122; i++) {
        alphabet += String.fromCharCode(i);

        if ((firstStr.charCodeAt() <= alphabet.charCodeAt(j)) && (lastStr.charCodeAt() >= alphabet.charCodeAt(j))) {

            temp += alphabet[j];

            if (temp[k] !== str[k]) {

                val = temp[k];
                break;
            }
            k++
        }
        j++
    }

    return val;
}

// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// optimal solution

function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}

//   Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(...arr) {

    let mySet = new Set();

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            mySet.add(arr[i][j])
        }
    }
    return Array.from(mySet);
}

//  console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {

    let n1 = 0, n2 = 1;

    while (n2 <= num) {

        console.log(n2);
        n2 += n1;
        n1 = n2 - n1;

    }
}

// sumFibs(15);


//   Sum All Primes

function sumPrimes(num) {

    let result = 0;
    for (let i = 0; i <= num; i++) {
        let flag = true
        for (let j = 2; j < i; j++) {

            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag && i > 1) result += i;
    }
    return result;
}

// console.log(sumPrimes(10));

// *************

function dropElements(arr, func) {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        let val = func(arr[i])


        if (val) {
            newArr.push(...arr.slice(i, arr.length));
            break;
        }
    }


    return arr;
}

// console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }));

// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {

    let binaryArr = str.split(' ');
    let convertStr = binaryArr.map(ele => String.fromCharCode(parseInt(ele, 2)))

    return convertStr.join('');
}

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {

    for (let key in collection) {

        if (!(collection[key][pre])) {

            return false;
        }
    }
    return true;
}

// console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "role"));

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether(val1, val2) {

    if (typeof (val1) === 'number' && typeof (val2) === 'number') {
        return val1 + val2;
    }

    // if (typeof (val1) === 'number' && typeof (val2) !== 'number') {
    //     return undefined;
    // }

    if (typeof (val1) !== 'number' && typeof (val2) === 'number') {
        return undefined;
    }

    if (typeof (val1) === 'number') {

        return (num) => {

            if (typeof (num) === 'number') {
                return num + val1;
            } else {
                return undefined;
            }
        }
    } 
}

// console.log(addTogether(5)(7));





















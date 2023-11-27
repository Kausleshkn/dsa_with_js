//  write a funstion for check  anagram string;

// first solution

function anagramFun(str1, str2) {

    let srtArrA = str1.split('').sort().join('');
    let srtArrB = str2.split('').sort().join('');

    return srtArrA === srtArrB;

}

// console.log(anagramFun('Hell', 'lHle'));

// second solution

let checkAnagram = (strA, strB) => {

    let obj = {};

    for (let char of strA) {
        obj[char] = (obj[char] || 0) + 1;
    }

    for (let char of strB) {
        if (obj[char] !== undefined) obj[char]--;
    }

    for (let key in obj) {
        if (obj[key] !== 0) return false;
    }

    return true;

}

// console.log(checkAnagram('Hell', 'lHle'));

// write a funstion to check string is palindrome or not

function palindrome(str) {

    for (let i = 0; i < str.length / 2; i++) {

        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// console.log(palindrome('levfjvel'));

// find maximum occarance charectar in string;

function maxChar(str) {

    let maxOccar = 0;
    let char = 'no repeted word';

    for (let i = 0; i < str.length; i++) {

        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i].includes(str[j])) count++;
        }

        if (count > maxOccar && count > 1) {
            maxOccar = count;
            char = str[i];
        }
    }
    return char;
}

// console.log(maxChar('hellooo'));

// second Solution

let checkMaxchar = (str) => {

    let obj = {};
    let maxChar = 'no repeted element';
    let maxNum = 0;

    for (let char of str) {

        obj[char] = (obj[char] || 0) + 1;

        if (obj[char] > 1 && obj[char] > maxNum) {
            maxNum = obj[char];
            maxChar = char;
        }
    }
    return maxChar;
}

// console.log(checkMaxchar('dcbhchj'));

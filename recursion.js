

let getFactorial = (n)=>{

    if(n ===0) {
       return 1;
    }
    return n*getFactorial(n-1);
}

// console.log(getFactorial(5));


// reverse a array using recursion

let arr = [1,2,3,4,5,6,7,8,9,10]
let first =0;
let last = arr.length-1;

function reverseFun(data,fir,las){

    if(las>fir){
      
        let temp = data[fir]
        data[fir] =data[las]
        data[las] =temp
        reverseFun(arr,++first,--last)
    }

}

reverseFun(arr,first,last);

// console.log(arr);

// write a funstion which take integer number as a input and print those number as character using recursion

function intTochar(arr, num) {

    if (num === 0) return;

    intTochar(arr, Math.floor(num / 10))

    console.log(arr[num % 10]);
}

let array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// intTochar(array,835);

// write a fun which check array is sorted or not using recursion

function isSorted(arr, index) {

    if (arr[index] > arr[index + 1]) {
        return false;
    }
    if (arr.length === index) {
        return true;
    }
    return isSorted(arr, index + 1);
}

let arrA = [1, 2, 3, 4, 5, 8, 6]

// console.log(isSorted(arrA, 0));

//  check substing is available in dictonary or not;

let ans = " ";
function checkWord(dic, str, idx) {

    // if(idx == str.length) return;

    for (let i = 0; i < str.length; i++) {
        let temp = str.substr(idx, i);        
        if (dic.includes(temp)) ans += temp + " ";
    }

    if(idx !== str.length){
      return  checkWord(dic, str, idx + 1);
    }

    return ans;
}

let dic = ["box", "paper"];
let str = "vhdhboxfggpaperbjldvl";

// console.log(checkWord(dic, str, 0));






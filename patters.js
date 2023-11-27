// print '*' pattern in trangal shape

// let n = 10;
// let x = '';

//     while (n > 0) {
//         x+= '*'
//         console.log(x);
//         n--
//     }


// print '*' in reverse trangal shape pattern;

// let n = 5;
// while (n > 0) {

//     let x = ''
//     let j = 0;

//     while (n > j) {
//         x += '*'
//         j++
//     }
//     console.log(x);
//     n--
// }

// print "*" pattern in squire shape

// let n = 10;
// let i = 0;

// while (n > i) {

//     let j = 0;
//     let star = ''
//     while (n > j) {

//         star += '*';
//         j++
//     }
//     console.log(star);
//     i++;  
// }

// print number in same above order in incresing pattern;

// let n = 2;
// let i = 0;

// while (n >= i) {

//     let j = 0;
//     let star = ''
//     while (n > j) {

//         star += i;
//         j++
//     }
//     console.log(star);
//     i++;  
// }

// print the same with decreasing pattern 

// let n = 5;
// let i = 0;

// while (n >= i) {

//     let j = 0;
//     let star = ''
//     while (n > j) {

//         star += n -i;
//         j++;
//     }
//     console.log(star);
//     i++;  
// }

// print "1 2 3" like pattern;

// let n = 3;
// let i = 0;

// while (n > i) {

//     let j = 1;
//     let star = ''
//     while (n >= j) {

//         star += j;
//         j++;
//     }
//     console.log(star);
//     i++;  
// }

// do the same like above in reverse order

// let n = 3;
// let i = 0;

// while (n >= i) {

//     let j = 0;
//     let star = ''
//     while (n > j) {

//         star += n -j;
//         j++;
//     }
//     console.log(star);
//     i++;  
// }

// print like '1 2 3' '4 5 6'

// let n = 3;
// let i = 0;
// let cn = 1;
// while (n > i) {

//     let j = 1;
//     let star = ''
//     while (n >= j) {

//         star += cn;
//         cn++
//         j++;
//     }
//     console.log(star);
//     i++;  
// }

// print the same in reverse order like above

// let n = 6;
// let i = 0;
// let cn = n*n;
// while (n > i) {

//     let j = 1;
//     let star = ''
//     while (n >= j) {

//         star += cn + ' ';
//         cn--
//         j++;
//     }
//     console.log(star);
//     i++;  
// }

// print the "#" shape with '*' or "." ;

// let n = 6;
// let i = 0;
// while (n > i) {

//     let j = 1;
//     let star = ''
//     while (n >= j) {

//         star += '**'
//         j++;
//     }
//     if (i == n / 2) {
//         console.log(star);
//         console.log(star);

//     }
//     console.log('**        **');
//     i++;
// }

// print the "A" charectar using ". or *";

// let n = 5;
// let i = 0;
// let str = ''
// let ltr = '     '
// let l = ''

// console.log('     ....');

// while (i < n) {

//     let j = 0;
//     while (j < n) {

//         l += '.'
//         if (j == 1) { str += ' ' }
//         if (j == 1) { ltr = ltr.slice(0, ltr.length - j) }
//         j++
//     }

//     console.log(ltr + '..' + str + str + '..');
//     if (i == 2) {
//         console.log(" " + l.slice(0, l.length - 3));
//     }

//     i++;
// }


// pattern

// let n = 10;
// let i = 1;
// let cn = 1
// while (n > i) {
//     let str = ''

//     let j = 0

//     while (j < i) {
//         str += cn + " ";
//         cn++
//         j++
//     }
//     console.log(str);
//     i++

// }

// pattern

// let n = 10;
// let i = 1;

// while (n > i) {
//     let str = ''

//     let j = 0

//     while (j < i) {
//         str += j + i + " ";
//         j++
//     }
//     console.log(str);
//     i++

// }

// above pattern

// let n = 10;
// let i = 1;
// let cn =1;

// while (n > i) {
//     let str = ''

//     let j = 1

//     while (j <= i) {
//         str += cn -i+1 + " ";
//         cn++
//         j++
//     }
//     console.log(str);
//     i++

// }

// pattern - reverse

// let n = 10;
// let i = 1;

// while (n > i) {
//     let str = ''

//     let j = 1

//     while (j <= i) {
//         str += i - j + 1 + " ";
//         j++
//     }
//     console.log(str);
//     i++

// }

// print pattern like "AAA" next "BBB" and so on 

// let n = 4;
// let i = 1;

// while (n >= i) {
//     let j = 1;
//     let str = ''
//     while (n >= j) {

//         str += String.fromCharCode(64+i);
//         j++

//     }
//     console.log(str);
//     i++;

// }

// print pattern like "ABC" next "DEF" and so on 


// let n = 5;
// let i = 1;
// let cn = 1;
// while (n >= i) {
//     let j = 1;
//     let str = ''
//     while (n >= j) {

//         str += String.fromCharCode(64+cn);
//         cn++
//         j++

//     }
//     console.log(str);
//     i++;

// }

// print pattern like "ABC" next "CDE" and so on 

//  let n = 5;
// let i = 1;
// let cn = 1;
// while (n >= i) {
//     let j = 1;
//     let str = ''
//     while (n >= j) {

//         str += String.fromCharCode(65+cn -i);
//         cn++
//         j++

//     }
//     console.log(str);
//     i++;

// }

// print albhabet in trangular pattern

//  let n = 5;
// let i = 1;

// while (n >= i) {
//     let j = 1;
//     let str = ''
//     while (j <= i) {

//         str += String.fromCharCode(64+j);
//         j++
//     }
//     console.log(str);
//     i++;   
// }

// pattern the same trigular in incrsing order

//  let n = 5;
// let i = 1;
// let cn = 1

// while (n >= i) {
//     let j = 1;
//     let str = ''
//     while (j <= i) {

//         str += String.fromCharCode(65+cn -i);
//         cn++
//         j++
//     }
//     console.log(str);
//     i++;   
// }

// print the same tringular in reverse order

// let n = 5;
// let i = 1;
// let cn = 1

// while (n >= i) {
//     let j = 1;
//     let str = ''
//     while (j <= i) {

//         str += String.fromCharCode(65 + n - i + j - 1);
//         cn++
//         j++
//     }
//     console.log(str);
//     i++;
// }




import Queue from "./Queue.js";
import { Stack } from "./stack.js";
import Cirque from "./Circular_queue.js";

let st = new Stack(5);
let cq = new Queue(5);

// reverse the queue

// cq.enqueue('a');
// cq.enqueue('e');
// cq.enqueue('i');
// cq.enqueue('o');
// cq.enqueue('u');


// console.log(cq.print());

// let reverseQue = (qu) => {

//     if (qu.isEmpty() === true) return;

//     let val = qu.peek();
//     qu.dequeue()

//     reverseQue(qu);

//     qu.enqueue(val);
// }

// reverseQue(cq)

// console.log(cq.print());


// reverse the Queue by using Stack;

// cq.enqueue('a');
// cq.enqueue('e');
// cq.enqueue('i');
// cq.enqueue('o');
// cq.enqueue('u');


// cq.print();

// while(cq.isEmpty() == false){

//     st.push(cq.dequeue());

// }

// while(st.isEmpty() == false){

//     cq.enqueue(st.pop());
// }

// cq.print();

// Find the negative num of K size window on given array, if not found return 0;

// first trick - brutforce

// let arr = [-8,2,3,-6,10];
// let temp = [];
// let k = 2;

// for (let i = 0; i < arr.length - k + 1; i++) {

//     let val = [];
//     for (let j = i; j <= i + k - 1; j++) {

//         if (arr[j] < 0) {
//             temp.push(arr[j]);
//             break;
//         }
//          else if (arr[j] > 0) { // if only first (-) index is required in K
//             temp.push(0);
//             break;
//         }
//         // else { // if all (-) index is required in K size window
//         //     val.push(arr[j]);
//         // }
//     }

//     // if (val.length == k) temp.push(0);
// }

// console.log(temp);

// Second trick using Queue data structure

// let arr = [-8,2,3,-6,10];
// let k = 2;
// let temp = []
// let cq = new Queue(5);

// for (let i = 0; i < arr.length - k + 1; i++) {

//     // if first (-) index is required in K size window
//     // cq.enqueue(arr[i])
//     // cq.enqueue(arr[i + 1])

//     // if (cq.peek() < 0) {
//     //     temp.push(cq.peek());
//     // } else {
//     //     temp.push(0);
//     // }

//     // cq.dequeue();
//     // cq.dequeue();

//     // if all (-) index is required in K size window;

//     cq.enqueue(arr[i]);
//     cq.enqueue(arr[i + 1]);

//     let val = [];
//     let j = 0;
//     let tempArr = cq.print();

//     while (tempArr.length > j) {

//         if (tempArr[j] < 0) {
//             temp.push(tempArr[j]);
//             break;
//         } else {
//             val.push(tempArr[j]);
//         }
//         j++;
//     }
//     if (val.length == k) temp.push(0);

//     cq.dequeue();
//     cq.dequeue();

// }

// console.log(temp);

// que -  reverse the Queue in K size by using Stack;

// cq.enqueue('a');
// cq.enqueue('e');
// cq.enqueue('i');
// cq.enqueue('o');
// cq.enqueue('u');

// let k = 3;
// console.log(cq.print());
// let i = 0;
// while (k > i) {

//     st.push(cq.dequeue());
//     i++;
// }

// while (st.isEmpty() == false) {

//     cq.enqueue(st.pop());
// }

// let S = cq.print().length - k;

// while(S--){
//     let x = cq.dequeue();
//     cq.enqueue(x);
// }

// console.log(cq.print());

// que - find the non-repeting charectar in given string , if charectar is repiting then print #;

// let str = 'aabcghdvabjvbhavsvbzhftbjhsvjhp';
// let obj = {};

// for (let i = 0; i < str.length; i++) {
//     let cn = 0;
//     for (let j = 0; j < str.length; j++) {

//         if (str[i].includes(str[j])) cn++;
//     }

//     obj[str[i]] = cn;

// }

// by using queue

// let strque = new Queue(str.length);
// let i = 0;
// let ans = '';
// while (str.length > i) {

//     strque.enqueue(str[i]);
//     let val = strque.peek();

//     if (obj[val] > 1) {
//         if (ans.includes(val) == false) {
//             ans += val;
//             strque.dequeue();
//         } else {
//             ans += '#'
//             strque.dequeue();
//         }
//     } else {
//         ans += val;
//         strque.dequeue();
//     }
//     i++;
// }

// console.log(ans);

// by using array

// let strque = [];
// let i = 0;
// let ans = '';
// while (str.length > i) {

//     strque.push(str[i]);
//     let val = strque[0];

//     if (obj[val] > 1) {
//         if (ans.includes(val) == false) {
//             ans += val;
//             strque.pop();
//         } else {
//             ans += '#'
//             strque.pop();
//         }
//     } else {
//         ans += val;
//         strque.pop();
//     }
//     i++;
// }

// console.log(ans);


// que - solve the fuel - tank and distance problem and return the index;
// (fuel, distance)- and you can use one unit of fuel to cover one distance

// Brutforce trick

// let arr = [[6, 4], [3, 6], [7, 3], [4, 5]];

// let arr = [[6,5],[7,6],[4,7],[10,8],[6,6],[5,4]];


// let balance = 0;
// let count = 0;
// let ans = undefined;
// let temp = 0;

// for (let i = 0; i < arr.length; i++) {

//     let x = (arr[i][0] - arr[i][1]) + balance;

//     if (x >= 0) {
//         balance = x;
//         count++;
//         if (count == 1) {
//             ans = i;
//         }
//         if (count == arr.length + 1) {
//             break;
//         }
//     } else {
//         count = 0;
//         balance =0;
//     }

//     temp++;
//     if (temp == arr.length * 2) break;

//     if (i == arr.length - 1) i = -1;

// }

// console.log(ans);

// second trick;

// let arr = [[6, 4], [3, 6], [7, 3], [4, 5]];
// let arr = [[6, 5], [7, 6], [4, 7], [10, 8], [6, 6], [5, 4]];

// let balance = 0;
// let defecit = 0;
// let start = 0;
// let ans = undefined;

// for (let i = 0; i < arr.length; i++) {

//     balance += (arr[i][0] - arr[i][1]);

//     if (balance <= 0) {
//         defecit += balance;
//         start = i + 1;
//         balance = 0;
//     }
// }

// if ((defecit + balance) >= 0) {
//     ans = start;
// }else{
//     ans = 'Travel not possible';
// }

// console.log(ans);


// que - divide the given array and store it in new array which take one element from first half and second element from second half;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let firstHalfArr = [];
// let N = arr.length;

// for (let i = 0; i < Math.floor(N / 2); i++) {

//     let x = arr.shift();

//     firstHalfArr.push(x);
// }

// let newArr = []

// while (arr.length || firstHalfArr.length) {

//     let x = firstHalfArr.shift();
//     newArr.push(x);
//     let y = arr.shift();
//     newArr.push(y);
// }

// console.log(firstHalfArr);
// console.log(arr);
// console.log(newArr);

// by using queue data structure

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let cqs = new Queue(arr.length);

// while (arr.length) {

//     let x = arr.shift();

//     cqs.enqueue(x);
// }


// let firstHalfQueue = new Queue(cqs.currentSize / 2);
// let N = cqs.print().length;

// for (let i = 0; i < Math.floor(N / 2); i++) {

//     let x = cqs.dequeue();

//     firstHalfQueue.enqueue(x);
// }

// let resQueue = new Queue(firstHalfQueue.currentSize * 2);

// while (cqs.currentSize || firstHalfQueue.currentSize) {

//     let x = firstHalfQueue.dequeue();
//     resQueue.enqueue(x);
//     let y = cqs.dequeue();
//     resQueue.enqueue(y);
// }

// console.log(resQueue.print());

// que - divide the given array in k size window and put the element in k size queue and k queue

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let k = 3;
// let N = Math.floor(arr.length / k);

// let firstQueue = new Queue(N);
// let secQueue = new Queue(N);
// let thiredQueue = new Queue(N);

// while(arr.length){

//     while(firstQueue.currentSize !== N){

//         let x = arr.shift();
//         firstQueue.enqueue(x);
//     }

//     while(secQueue.currentSize !== N){

//         let x = arr.shift();
//         secQueue.enqueue(x);
//     }

//     while(thiredQueue.currentSize !== N){

//         let x = arr.shift();
//         thiredQueue.enqueue(x);
//     }
// }

// console.log(firstQueue.print());
// console.log(secQueue.print());
// console.log(thiredQueue.print());

// que - in the given array find the min and max element in K size window and return it in new array

// let k = 4;
// let temp = [];
// let arr = [5, 1, 9, 6, 2, -5, 8, -4, 3, 4, 7, -2, -6];

// for (let i = 0; i < arr.length - k + 1; i++) {

//     let x = 0;
//     let y = arr[i];

//     for (let j = i; j < i + k; j++) {

//         if (arr[j] > x) x = arr[j];

//         if (arr[j] < y) y = arr[j];

//     }
//     temp.push(x + y)
// }

// console.log(temp);

//  by using queue


// let k = 4;
// let temp = [];
// let arr = [5, 1, 9, 6, 2, -5, 8, -4, 3, 4, 7, -2, -6];

// let tempQ = new Queue(k);

// for (let i = 0; i < arr.length - k + 1; i++) {

//     let x = 0;
//     let y = arr[i];

//     for (let j = i; j < i + k; j++) {
//         tempQ.enqueue(arr[j])
//     }

//     let N = tempQ.print();

//     for (let j = 0; j < N.length; j++) {

//         if (N[j] > x) x = N[j];

//         if (N[j] < y) y = N[j];

//     }
//     temp.push(x + y);

//     for (let j = 0; j < k; j++) {
//         tempQ.dequeue()
//     }
// }

// console.log(temp);























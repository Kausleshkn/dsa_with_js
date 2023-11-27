class Stack {

    constructor(max) {
        this.arr = [];
        this.Size = this.arr.length;
        this.MaxSize = max;
    }

    push(val) {

        if (this.Size < this.MaxSize) {
            this.arr[this.Size] = val;
            this.Size++
        } else {
            console.log('Stack is Full');
            return 'Stack is Full'
        }
    }
    pop() {

        if (this.Size) {
            this.Size--;
            let removedVal = this.arr[this.Size];
            this.arr.length = this.Size;
            return removedVal;
        } else {
            return 'Stack is already Empty';
        }
    }

    peek() {
        return this.arr[this.arr.length - 1 || this.Size - 1];
    }

    size() {
        return this.Size;
    }

    display() {
        return this.arr;
    }

    isEmpty() {
        if (this.Size) {
            return false;
        } else {
            return true;
        }
    }
}

let st = new Stack(8);

export {Stack};

// reverse the Srting by using stack

// function reverseStr(str) {

//     let data = str.split('');

//     for (let i = 0; i < data.length; i++) {

//         stOne.push(data[i])
//     }
//     for (let i = 0; i < data.length; i++) {

//         data[i] = stOne.pop()
//     }

//     return data.join('')
// }

// let str = '123456';
// console.log(reverseStr(str));

// remove middle element from Stack using recursion

// st.push(1);
// st.push(2);
// st.push(3);
// st.push(4);
// st.push(5);
// st.push(6);

// console.log(st.display());

// function removemid(stack,count,size){

//     if(count == Math.floor(size/2)){
//         stack.pop();
//         return;
//     }

//     let num = stack.peek();
//     stack.pop();

//     removemid(stack, count+1,size);

//     stack.push(num);
// }

// removemid(st,0,st.size());

// console.log(st.display());

//  do the same with ittretive approch

// console.log(st.display());

// let temp = [];
// let N = st.size();
// for (let i = 0; i <= N; i++) {

//     if (i < Math.floor(N / 2)) {
//         temp.push(st.peek());
//         st.pop();
//     }

//     if (i == Math.floor(N / 2)) {
//         st.pop();
//     }

//     if (i > Math.floor(N / 2) && temp.length) {
//         st.push(temp.pop());
//     }
// }

// console.log(st.display());

// check parenthisis - [{()}] valid or not;

// function chValid(expretion) {

//     for (let i = 0; i < expretion.length; i++) {

//         let ch = expretion[i];

//         if (ch == '[' || ch == '{' || ch == '(') {
//             st.push(ch);
//         } else {
//             if (st.isEmpty() == false) {

//                 let char = st.peek()

//                 if ((char == '[' && ch == ']') || (char == '{' && ch == '}') || (char == '(' && ch == ')')) {

//                     st.pop();
//                 } else {
//                     return 'Expration is not Valid'
//                 }
//             } else {
//                 return 'Expration is not Valid'
//             }
//         }
//     }

//     if (st.isEmpty()) {

//         return 'Expration is Valid'
//     } else {
//         return 'Expration is not Valid'
//     }
// }

// let expretion = '[{({})}]';
// console.log(chValid(expretion));

// insert element in stack bottam

// st.push(1);
// st.push(2);
// st.push(3);
// st.push(4);
// st.push(5);
// st.push(6);

// console.log(st.display());

// function addBottam (stack ,ele){

//     if(stack.isEmpty()){
//         stack.push(ele);
//         return;
//     }

//     let num = stack.peek();
//     stack.pop()

//     addBottam(stack,ele)

//     stack.push(num);
// }

// addBottam(st,7);
// addBottam(st,8);

// console.log(st.display());

// reverse the stack - recursive approch

// st.push(1);
// st.push(2);
// st.push(3);
// st.push(4);
// st.push(5);
// st.push(6);

// console.log(st.display());

// function addBottam (stack ,ele){

//     if(stack.isEmpty()){
//         stack.push(ele);
//         return;
//     }

//     let num = stack.peek();
//     stack.pop()

//     addBottam(stack,ele)

//     stack.push(num);
// }

// function reverseStack(stack) {

//     if (stack.isEmpty()) return;

//     let num = stack.peek();    
//     stack.pop();

//     reverseStack(stack);

//     addBottam(stack, num)
// }

// reverseStack(st);

// console.log(st.display());

// reverse stack using itretive approch

// console.log(st.display());

// let x = st.display();

// function reverseStack(x,i) {

//     if (x.length / 2 > i) {

//         let temp = x[i];
//         x[i] = x[x.length - i - 1];
//         x[x.length - i - 1] = temp;
//     }else{
//         return;
//     }

//     reverseStack(x,i+1)

// }

// reverseStack(x,0)

// for(let i=0;i<x.length/2;i++){

//     let temp = x[i];
//     x[i] = x[x.length-i-1];
//     x[x.length-i-1] = temp;
// }

// console.log(st.display());

// sort the stack - recursive approch

// st.push(4);
// st.push(1);
// st.push(5);
// st.push(3);
// st.push(-1);
// st.push(2);

// console.log(st.display());

// function Insertsort(stack, ele) {

//     if (stack.isEmpty() || (!stack.isEmpty() && stack.peek() < ele)) {

//         stack.push(ele);
//         return;
//     }

//     let n = stack.peek();
//     stack.pop();

//     Insertsort(stack, ele);

//     stack.push(n);

// }

// function sortStack(stack) {

//     if (stack.isEmpty()) return;

//     let num = stack.peek();
//     stack.pop();

//     sortStack(stack);

//     Insertsort(stack, num);

// }

// sortStack(st)

// console.log(st.display());

// sort the same stack using ittretive approch

// console.log(st.display());

// let x = st.display();

// for (let i = 0; i < x.length-1; i++) {

//     let val = i;

//     for (let j = i + 1; j < x.length; j++) {

//         if (x[val] > x[j]) val = j;

//     }

//     let temp = x[i];
//     x[i] = x[val];
//     x[val] = temp;
// }

// console.log(st.display());

































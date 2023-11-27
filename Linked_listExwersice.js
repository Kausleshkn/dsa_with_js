import Linkedlist from './singly-Linked_list.js';

let list = new Linkedlist();

list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);
list.addNode(50);
list.addNode(60);

list.head.next.next.next.next.next.next = list.head.next.next;
let cycleList = list.head;


// console.log(cycleList);


// ......

let listA = new Linkedlist();

listA.addNode(1);
listA.addNode(2);
listA.addNode(3);
listA.addNode(4);
listA.addNode(5);
listA.addNode(10);
listA.addNode(15);
listA.addNode(20);
listA.addNode(25);

let listB = new Linkedlist();

listB.addNode(20);
listB.addNode(10);
listB.addNode(5);
listB.addNode(10);
listB.addNode(15);
listB.addNode(20);
listB.addNode(25);

// .........

let firstSortedList = new Linkedlist();

firstSortedList.addNode(1);
firstSortedList.addNode(3);
firstSortedList.addNode(5);
firstSortedList.addNode(8);
firstSortedList.addNode(9);

let secondSortedList = new Linkedlist();

secondSortedList.addNode(2);
secondSortedList.addNode(4);
secondSortedList.addNode(6);
secondSortedList.addNode(7);



// print Funstion

function printList(data) {

    if (!data) return null;

    let str = '';
    while (data) {
        str += data.value + '->';
        data = data.next;
    }
    return str;
}

// Task 1 -> Reverse the linked list - ittrative approch;

function reverseLinkedlist(list) {

    let reverseList;

    while (list) {
        let temp = list.next;
        list.next = reverseList;
        reverseList = list;
        list = temp;
    }

    return printList(reverseList);
}

// console.log(reverseLinkedlist(list.head));

// Task 2 -> Reverse the linked list - recursive approch;

function recursiveRev(list) {

    if (list == null || list.next == null) return list;


    // suppose here rest = list and list value is -> {value: 50, next:null}
    let rest = recursiveRev(list.next);

    list.next.next = list;

    list.next = null;
    console.log(rest);

    return rest;
}

// let temp = recursiveRev(list.head);

// console.log(printList(temp));



// let n = list.head; // 10->20->30->40->50->X;

// let k = n.next.next.next; // points 40->50->X;

// let m = n.next.next.next.next; // points 50->X;

// k.next.next = k; // Doing this step, list become 40->50->40->..... in cicular on k variable , so m varible list also become 50->40->...... in circuler pattern. so above opration is processing 

// console.log(m);
// console.log(k);

//  task ->3 - Delete node with node as given parameter;

function deleteNth(list) {

    list.value = list.next.value;
    list.next = list.next.next;

    return printList(list);
}

// console.log(deleteNth(list.head.next.next.next));

// task -> 4 - find nth node from end;

// first solution

function findNth(list, n) {

    let temp = list;
    let count = 0;

    while (temp) {
        temp = temp.next;
        count++;
    }
    let m = count - n + 1;

    temp = list;

    for (let i = 1; i < m; i++) {
        temp = temp.next;
    }

    return temp.value;
}
// 10->20->30->40->50 ; here n=2 from last is 40

// console.log(findNth(list.head, 5));

// second solution

function findNthfromlast(listhead, n) {

    let fast = listhead;
    let slow = listhead;

    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow.value;

}
// 10->20->30->40->50 ; here n=2 from last is 40

// console.log(findNthfromlast(list.head,1));

// task ->5 - delete Nth node from end;

function deleteNthfromend(listhead, n) {

    let fast = listhead;
    let slow = listhead;

    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }

    if (fast == null) {
        listhead = listhead.next;
        return printList(listhead);
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;

    return printList(listhead);

}
// 10->20->30->40->50 ; here n=2 from last is 40

// console.log(deleteNthfromend(list.head,5));

// task ->6 - find the intersection of below two linked list;

let listOne = listA.head;
let listTwo = listB.head;

let interSectonOfList = (listA, listB) => {

    let tempA = listA;
    let tempB = listB;

    let listAcount = 0;
    let listBcount = 0;

    while (tempA !== null) {
        tempA = tempA.next;
        listAcount++
    }

    while (tempB !== null) {
        tempB = tempB.next;
        listBcount++
    }

    tempA = listA;
    tempB = listB;

    if (listAcount < listBcount) {
        let m = listBcount - listAcount;

        for (let i = 1; i <= m; i++) {
            tempB = tempB.next;
        }
    } else {
        let m = listAcount - listBcount;

        for (let i = 1; i <= m; i++) {
            tempA = tempA.next;
        }
    }

    let interSecList = null;
    let actualList = null;
    let cn = 0;
    while (tempA !== null && tempB !== null) {

        if (tempA.value == tempB.value) {

            interSecList = tempA || tempB;

            if (interSecList !== null && cn == 0) {
                actualList = interSecList;
                cn++
            }
        } else {
            interSecList = null;
            actualList = null;
            cn = 0;
        }
        tempA = tempA.next;
        tempB = tempB.next;

    }

    return printList(actualList);
}

// console.log(interSectonOfList(listOne, listTwo));

// task ->7 - find the middle node of list, if list is even , then return the right middle

function findMiddle(listHead) {

    let fast = listHead;
    let slow = listHead;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value;
}

// console.log(findMiddle(list.head));

// task -> 8 - delete the middle element of linkedlist; for even list follow the above instruction

function deleteMiddle(listHead) {

    let fast = listHead;
    let slow = listHead;

    if (listHead.next == null) return null;

    while (fast.next.next !== null && fast.next.next.next !== null) {

        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;

    return printList(listHead);
}

// console.log(deleteMiddle(list.head));

// task -> 9 - detect cycle in a link list;

const detectCycleInList = (listHead) => {

    if (listHead == null || listHead.next == null) return false;

    let slow = listHead;
    let fast = listHead;

    while (fast !== null) {

        if (slow == null) return false;
        slow = slow.next;
        if (fast.next == null) return false;
        fast = fast.next.next;

        if (slow == fast) return true;
    }

    return false;

}

// console.log(detectCycleInList(cycleList));

// task -> 10- detect cycle in link list and return the list where cycle starts;

const detectNreturnCycleInList = (listHead) => {

    if (listHead == null || listHead.next == null) return false;

    let slow = listHead;
    let fast = listHead;

    while (fast !== null) {

        if (slow == null) return false;
        slow = slow.next;
        if (fast.next == null) return false;
        fast = fast.next.next;

        if (slow === fast) {
            break;
        }
    }

    if (fast == null) {
        return false;
    } else {
        let temp = listHead;

        while (temp !== slow) {
            temp = temp.next;
            slow = slow.next;
        }

        return slow;
    }

}

// console.log(detectNreturnCycleInList(cycleList));

// task 11 - merge two sorted linked list 

// first solution;

let la = firstSortedList.head;
let lb = secondSortedList.head;

function mergeSortedList(listA, listB) {

    let tempA = listA;
    let tempB = listB;

    let sortList = new Linkedlist(2);
    let temp = sortList.head;

    while (tempA !== null && tempB !== null) {

        if (tempA.value <= tempB.value) {
            let a = new Linkedlist(tempA.value);
            temp.next = a.head;
            // temp = temp.next;   
            temp = a.head;
            tempA = tempA.next;
        } else {
            let a = new Linkedlist(tempB.value);
            temp.next = a.head;
            // temp = temp.next;
            temp = a.head;
            tempB = tempB.next;
        }
    }

    if (tempA !== null) {
        temp.next = tempA;
    } else {
        temp.next = tempB;
    }

    return printList(sortList.head.next);
}

// console.log(mergeSortedList(la, lb));

// second solution

function mergeSortedListTrickTwo(listA, listB) {

    let tempA = listA;
    let tempB = listB;

    let sortList = new Linkedlist(2);
    let temp = sortList.head;

    while (tempA !== null && tempB !== null) {

        if (tempA.value <= tempB.value) {
            temp.next = tempA;
            // temp = temp.next;   
            temp = tempA;
            tempA = tempA.next;
        } else {
            temp.next = tempB;
            // temp = temp.next;
            temp = tempB;
            tempB = tempB.next;
        }
    }

    if (tempA !== null) {
        temp.next = tempA;
    } else {
        temp.next = tempB;
    }

    return printList(sortList.head.next);
}


// console.log(mergeSortedListTrickTwo(la,lb));

// task ->12 - remove dublicate from sorted list

let Dlist = new Linkedlist();

Dlist.addNode(2);
Dlist.addNode(2);
Dlist.addNode(3);
Dlist.addNode(3);
Dlist.addNode(4);
Dlist.addNode(5);
Dlist.addNode(5);
Dlist.addNode(5);
Dlist.addNode(6);
Dlist.addNode(6);
Dlist.addNode(8);
Dlist.addNode(8);
Dlist.addNode(8);
Dlist.addNode(8);
Dlist.addNode(9);
Dlist.addNode(9);


function removeDublicateInSortedList(list) {

    let temp = list;

    while (temp !== null && temp.next !== null) {

        if (temp.value === temp.next.value) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }

    return printList(list);

}

// console.log(removeDublicateInSortedList(Dlist.head));

// task -> 13 - delete dublicate element in unsorted list

let unSortList = new Linkedlist();

unSortList.addNode(2);
unSortList.addNode(5);
unSortList.addNode(2);
unSortList.addNode(8);
unSortList.addNode(9);
unSortList.addNode(9);
unSortList.addNode(4);
unSortList.addNode(6);
unSortList.addNode(8);
unSortList.addNode(10);
unSortList.addNode(4);
unSortList.addNode(6);
unSortList.addNode(6);
unSortList.addNode(6);
unSortList.addNode(2);
unSortList.addNode(1);
unSortList.addNode(1);

// solution one;

function deleteDublicateInUnsoredList(list) {

    let obj = {};
    let tempD = list;
    let temp = list.head;
    let index = 0;

    while (temp !== null) {

        if (obj[temp.value] === undefined) {
            obj[temp.value] = true;
            index++
        } else {
            tempD.deleteNode(index + 1);
        }
        temp = temp.next;
    }
    return printList(list.head);
}

// console.log(deleteDublicateInUnsoredList(unSortList));

//  second solution

function deleteDublicateInUnsoredListTwo(list) {

    let tempA = list.head;
    let cn = 1;

    while (tempA !== null) {

        let tempB = tempA.next;
        let index = 0 + cn;

        while (tempB !== null) {
            if (tempA.value === tempB.value) {
                list.deleteNode(index + 1)
            } else {
                index++
            }
            tempB = tempB.next;
        }
        cn++
        tempA = tempA.next;
    }

    return printList(list.head)
}

// console.log(deleteDublicateInUnsoredListTwo(unSortList));



// task ->14 - reverse linked list in k group;

let Rlist = new Linkedlist();

Rlist.addNode(5);
Rlist.addNode(10);
Rlist.addNode(15);
Rlist.addNode(25);
Rlist.addNode(30);
Rlist.addNode(35);
Rlist.addNode(40);
Rlist.addNode(45);
// Rlist.addNode(50);

// console.log(printList(Rlist.head));

let k = 3;

function SizeOfList(head, k) {

    let temp = head;
    let length = 0;

    while (temp) {
        temp = temp.next;
        length++;
    }
    return length;
}

let Size = SizeOfList(Rlist.head, k);

function reverseListInkGroup(list, k, Size) {

    // if (Size < k) return list;
    // if(list == null) return null;

    let temp = null;
    let current = null;
    let head = list;
    let cn = 1;

    while (head !== null && cn <= k) {

        temp = head.next;
        head.next = current;
        current = head;
        head = temp;
        cn++;
    }

    if (temp !== null) {
        list.next = reverseListInkGroup(temp, k, Size - k);
    }

    return current;
}

// let x = reverseListInkGroup(Rlist.head, k, Size);

// console.log(printList(x));


// task -> 15 - check palindrome in linked list;

let palinList = new Linkedlist();

palinList.addNode('l');
palinList.addNode('e');
palinList.addNode('v');
palinList.addNode('v');
palinList.addNode('e');
palinList.addNode('l');
// palinList.addNode('7');
// palinList.addNode('8');

function reversea(list) {

    if (list.next == null) return list;

    let rest = reversea(list.next);

    list.next.next = list;
    list.next = null;

    return rest;
}

function checkPalindrom(list) {

    let slow = list;
    let fast = list;

    while (fast.next !== null && fast.next.next !== null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    let reverseList = reversea(slow.next);
    let temp = list;

    while (temp.next !== null && reverseList !== null) {

        if (temp.value !== reverseList.value) {
            return false;
        }

        temp = temp.next;
        reverseList = reverseList.next;
    }

    return true;
}

// console.log(checkPalindrom(palinList.head));


//  task -> 16 - maximum twin sum of a linked list;

let tSum = new Linkedlist();

tSum.addNode(4);
tSum.addNode(4);
tSum.addNode(9);
tSum.addNode(3);
tSum.addNode(12);
tSum.addNode(13);
tSum.addNode(16);
tSum.addNode(15);



function twinSumOfList(list) {

    let slow = list;
    let fast = list;

    while (fast.next !== null && fast.next.next !== null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    let reverseList = reversea(slow.next);
    let temp = list;
    let max = 0;

    while (temp.next !== null && reverseList !== null) {

        if ((temp.value + reverseList.value) > max) {
            max = temp.value + reverseList.value;
        }
        temp = temp.next;
        reverseList = reverseList.next;
    }

    return max;
}

// console.log(twinSumOfList(tSum.head));


// task -> 17 - filter odd even index and value of linked list ;

let oddEvenList = new Linkedlist();

oddEvenList.addNode(1);
oddEvenList.addNode(2);
oddEvenList.addNode(3);
oddEvenList.addNode(4);
oddEvenList.addNode(5);
oddEvenList.addNode(6);
oddEvenList.addNode(7);
oddEvenList.addNode(8);
oddEvenList.addNode(9);
oddEvenList.addNode(10);


// filter by value

function filterListByValue(list) {

    let temp = list;

    let oddList = new Linkedlist(0);
    let evenList = new Linkedlist(0);

    let even = evenList.head;
    let odd = oddList.head;

    while (temp !== null) {

        let a = new Linkedlist(temp.value);

        if ((temp.value % 2) == 0) {
            even.next = a.head;
            even = even.next;
        } else {
            odd.next = a.head;
            odd = odd.next;
        }
        temp = temp.next;
    }

    let tempA = evenList.head;

    while (tempA.next !== null) {

        tempA = tempA.next;
    }
    tempA.next = oddList.head.next;

    return printList(evenList.head.next)

}

// console.log(filterListByValue(oddEvenList.head));

// Filter by Index;

function filterListByIndex(list) {

    let temp = list;
    let count = 1;

    let evenList = new Linkedlist(-1);
    let oddList = new Linkedlist(-1);

    let even = evenList.head;
    let odd = oddList.head;

    while (temp !== null) {

        let a = new Linkedlist(temp.value);

        if ((count % 2) > 0) {
            odd.next = a.head;
            odd = odd.next;
        } else {
            even.next = a.head;
            even = even.next;
        }
        count++;
        temp = temp.next;
    }
    odd.next = evenList.head.next;

    return printList(oddList.head.next)
}

// console.log(filterListByIndex(oddEvenList.head));


// task -> 18 - add two number using linked list;

let firstList = new Linkedlist();

firstList.addNode(6);
firstList.addNode(7);
firstList.addNode(8);
firstList.addNode(9);

let secondList = new Linkedlist();

secondList.addNode(4);
secondList.addNode(5);

// recursive way

function helperFun(listA, listB, sizeA, sizeB, copyList) {

    if (listA == null && listB == null) return 0;

    let data = 0;

    if (sizeA > sizeB) {
        let oc = helperFun(listA.next, listB, sizeA - 1, sizeB, copyList);
        data = oc + listA.value;
    }
    else if (sizeA < sizeB) {
        let oc = helperFun(listA, listB.next, sizeA, sizeB - 1, copyList);
        data = oc + listB.value;
    }
    else {
        let oc = helperFun(listA.next, listB.next, sizeA - 1, sizeB - 1, copyList);
        data = oc + listA.value + listB.value;
    }

    let nc = Math.floor(data / 10);
    let value = data % 10;

    copyList.addNodeAtHead(value);

    return nc;
}

function addTwoNum(listA, listB) {

    let copyList = new Linkedlist();

    let sizeA = 0;
    let sizeB = 0;

    let tempA = listA;
    let tempB = listB;

    while (tempA !== null || tempB !== null) {

        if (tempA !== null) {
            sizeA++;
            tempA = tempA.next;
        }

        if (tempB !== null) {
            sizeB++;
            tempB = tempB.next;
        }
    }

    let oc = helperFun(listA, listB, sizeA, sizeB, copyList);

    if (oc > 0) {
        copyList.addNodeAtHead(oc);
    }

    return copyList;
}

// let addNum = addTwoNum(firstList.head, secondList.head);

// console.log(printList(addNum.head));

// second solution - ittrative trick

function reverseList(list) {

    if (list == null || list.next == null) return list;

    let rest = reverseList(list.next);
    list.next.next = list;

    list.next = null;

    return rest;

}

function addTwoNumItrretively(listA, listB) {

    let carry = 0;
    let tempA = reverseList(listA);
    let tempB = reverseList(listB);

    let resList = new Linkedlist();

    while (tempA !== null || tempB !== null || carry > 0) {
        let sum = 0;

        if (tempA !== null) {
            sum += tempA.value;
            tempA = tempA.next;
        }

        if (tempB !== null) {
            sum += tempB.value;
            tempB = tempB.next;
        }

        let value = (sum + carry) % 10;
        carry = Math.floor(sum / 10);

        resList.addNodeAtHead(value);

    }

    return printList(resList.head);

}

// console.log(addTwoNumItrretively(firstList.head, secondList.head));


//  task -> 19 - rotate a linked list by k place;

let RtList = new Linkedlist();

RtList.addNode(10);
RtList.addNode(20);
RtList.addNode(30);
RtList.addNode(40);
RtList.addNode(50);
RtList.addNode(60);

let k1 = 4;

function roteteList(head, k) {

    let temp = head;
    let lenth = 1;

    while (temp.next !== null) {
        lenth++;
        temp = temp.next;
    }

    temp.next = head;
    let rotateCount = k % lenth;

    while (rotateCount--) {
        temp = temp.next;
    }

    head = temp.next;
    temp.next = null;

    return printList(head);
}

// console.log(roteteList(RtList.head, k1));


// task -> 20 - marge sort in linked list;

let mgSort = new Linkedlist();

mgSort.addNode(5);
mgSort.addNode(2);
mgSort.addNode(8);
mgSort.addNode(1);
mgSort.addNode(9);
mgSort.addNode(6);
mgSort.addNode(3);
mgSort.addNode(4);


function findLeftmiddle(list) {
    if (list == null || list.next == null) return list;

    let slow = list;
    let fast = list;

    while (fast.next !== null && fast.next.next !== null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function mergeTwoList(l1, l2) {

    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.value < l2.value) {
        l1.next = mergeTwoList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoList(l1, l2.next);
        return l2;
    }
}

// let ml = mergeTwoList(la, lb);

function mergeSort(list) {

    if (list == null || list.next == null) return list;

    let middle = findLeftmiddle(list);

    let right = middle.next;
    middle.next = null;

    let left = list;

    let l1 = mergeSort(left);
    let l2 = mergeSort(right);

    return mergeTwoList(l1, l2);
}

// let mrSort = mergeSort(mgSort.head);

// console.log(printList(mrSort));



//  task -> 21 - copy linked list with random node; use leetcode to solve;

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.random = null;
    }
}

let a = new Node(10);
let b = new Node(20);
let c = new Node(30);
let d = new Node(40);
let e = new Node(50);
let f = new Node(60);

a.next = b;
a.random = f;

b.next = c;
b.random = a;

c.next = d;
c.random = e;

d.next = e;
d.random = b;

e.next = f;
e.random = c;

f.next = null;
f.random = d;

// first Solution - using HashMap -> leetcode accepted

function copyRandomPointer(head) {

    if (!head) return null;

    let temp = head;
    let nodeMap = new Map();

    while (temp !== null) {
        nodeMap.set(temp, new Node(temp.value))
        temp = temp.next;
    }

    temp = head;
    while (temp !== null) {

        nodeMap.get(temp).next = nodeMap.get(temp.next) || null;
        nodeMap.get(temp).random = nodeMap.get(temp.random) || null;
        temp = temp.next;
    }

    return nodeMap.get(head);
}

// let x = copyRandomPointer(a);
// console.log(x);

// Second Solution - without using extra space - leetcode acepted

function copyRandomList(head) {

    if (!head) return null;

    let temp = head;

    while (temp !== null) {

        let tempNext = temp.next;

        temp.next = new Node(temp.value);
        temp.next.next = tempNext;

        temp = temp.next.next;
    }

    temp = head;

    while (temp !== null) {
        let randomNode = temp.random;
        temp.next.random = randomNode ? randomNode.next : null;

        temp = temp.next.next;
    }

    temp = head;
    let cloneList = new Node(-2);
    let cTemp = cloneList;

    while (temp !== null) {
        cTemp.next = temp.next;
        temp.next = temp.next.next;

        temp = temp.next;
        cTemp = cTemp.next;
    }

    return cloneList.next;

}

// console.log(copyRandomList(a));


// task -> 22 - flatten liked list; use leetcode to solve;

class FlattenList {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.down = null;
    }
}

let fta = new FlattenList(1);
let ftb = new FlattenList(2);
let ftc = new FlattenList(3);
let ftd = new FlattenList(4);
let fte = new FlattenList(5);
let ftf = new FlattenList(6);
let ftg = new FlattenList(7);
let fth = new FlattenList(8);
let fti = new FlattenList(9);
let ftj = new FlattenList(10);

fta.next = ftd;
fta.down = ftb;
ftb.down = ftc;

ftd.next = fth;
ftd.down = fte;
fte.down = ftf;
ftf.down = ftg;

fth.next = ftj;
fth.down = fti;

//  Solution one

// function flatenList(head) {

//     let temp = head.next;
//     let run = head;
//     let curr = head;

//     if (curr.down !== null) {
//         while (curr.down !== null) {
//             run.next = curr.down

//             run = run.next;
//             curr = curr.down;
//         }
//         run.next = temp;
//     }

//     if(temp !== null){
//         flatenList(temp);
//     }

//     return head;
// }

// let t = flatenList(fta);

// console.log(printList(t));

//  Solution two

const mergeList = (l1, l2) => {

    let mList = new FlattenList(-1);
    let temp = mList;

    while (l1 !== null && l2 !== null) {

        if (l1.value < l2.value) {
            temp.next = l1;
            temp = temp.next;
            l1 = l1.down;
        } else {
            temp.next = l2;
            temp = temp.next;
            l2 = l2.down;
        }
    }

    if (l1 !== null) {
        temp.next = l1;
    } else {
        temp.next = l2;
    }

    return mList.next;
}

function flattenList(head) {

    if (head == null || head.next == null) return head;

    head.next = flattenList(head.next);

    head = mergeList(head, head.next);

    return head;
}

// let ft = flattenList(fta);
// console.log(printList(ft));

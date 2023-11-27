import CreateBST from "./BST.js";
import { Btree, levelOrdertravelsar, Cbt } from "./tree.js";

let bst = new CreateBST();
bst.add(50);
bst.add(25);
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(60);
bst.add(80);
bst.add(55);
bst.add(75);
bst.add(85);

let bsTree = bst.root;




// task ->1 : hight of a binary tree;

function btHight(treeNode) {
    if (treeNode == null) return 0;

    return Math.max(btHight(treeNode.left), btHight(treeNode.right)) + 1;
}

// console.log(btHight(Btree));


// task ->2 : Nodes of a binary tree;

function btNodes(root) {

    if (root == null) return 0;

    return btNodes(root.left) + btNodes(root.right) + 1;
}

// console.log(btNodes(Btree));

// task ->3 : min & max node value of a binary tree;

function maxValOfBt(root) {
    if (root == null) return Number.NEGATIVE_INFINITY;

    return Math.max(root.value, Math.max(maxValOfBt(root.left), maxValOfBt(root.right)));
}

// console.log(maxValOfBt(Btree));

function minValOfBt(root) {
    if (root == null) return Number.POSITIVE_INFINITY;

    return Math.min(root.value, Math.min(minValOfBt(root.left), minValOfBt(root.right)));
}

// console.log(minValOfBt(Btree));

// task ->4 : min & max node value of a binary search tree;

function maxValOfBst(root) {
    if (root.right == null) return root.value;

    return maxValOfBst(root.right);
}
// console.log(maxValOfBst(bsTree));

// ...........

function minValOfBst(root) {
    if (root.left == null) return root.value;

    return minValOfBst(root.left);
}
// console.log(minValOfBst(bsTree));


// task ->5 recursive level order travalsal
// let str = '';
// function recursiveLevelOrder(root, level, count) {
//     if (root == null) return;

//     if (level == 1) {
//         str += root.value + ",";
//     } else if (level > 1) {
//         recursiveLevelOrder(root.left, level - 1, count--);
//         recursiveLevelOrder(root.right, level - 1, count--);
//     }

//     if (count == 0) str += "\n";
// }

// let h = btHight(bsTree);

// for (let i = 1; i <= h; i++) {

//     recursiveLevelOrder(bsTree, i, i == 1 ? 0 : i);
// }

// console.log(str);

// task ->6  Another way for recursive level order travarsal;

let queue = [];

function lot(treeNode, level) {
    if (treeNode == null) return;

    if (queue[level]) {
        queue[level].push(treeNode.value);
    } else {
        queue[level] = [treeNode.value];
    }

    lot(treeNode.left, level + 1);
    lot(treeNode.right, level + 1);

    return queue;
}

// console.log(lot(bsTree, 0));
// console.log(lot(Btree, 0));

//task ->7 search Node in Binary serch tree;

// let value = 52;

function searchNodeInBst(root, key) {
    if (root == null) return false;

    if (root.value == key) return true;

    if (root.value > key) {
        return searchNodeInBst(root.left, key);
    } else {
        return searchNodeInBst(root.right, key);
    }
}

// console.log(searchNodeInBst(bsTree, value));

//task ->8 search node in binary tree

let val = 24;

function searchNodeInBt(root, key) {
    if (root == null) return false;

    if (root.value == key) return true;

    return searchNodeInBt(root.left, key) || searchNodeInBt(root.right, key);
}

// console.log(searchNodeInBt(Btree,val));

//task ->9 Delete node from BST;

function removeBstNode(root, value) {
    if (root == null) return null;

    if (value < root.value) {
        root.left = removeBstNode(root.left, value);
    } else if (value > root.value) {
        root.right = removeBstNode(root.right, value);
    } else {
        if (!root.left && !root.right) {
            return null;
        } else if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }
        root.value = minValOfBst(root.right);
        root.right = removeBstNode(root.right, root.value);
    }

    return root;
}
// console.log(levelOrdertravelsar(bsTree));

// removeBstNode(bsTree,8);

// console.log(lot(bsTree,0));

//task ->10 vertical order travalsal of tree;

let map = {};

function verticalOrderTravelsal(root, hd, vectar) {

    if (root == null) return;

    if (vectar[hd] == undefined) {
        vectar[hd] = [root.value];
    } else {
        vectar[hd].push(root.value);
    }

    verticalOrderTravelsal(root.left, hd - 1, vectar);
    verticalOrderTravelsal(root.right, hd + 1, vectar);

    return vectar;
}

// let data = verticalOrderTravelsal(bsTree, 0, map);

function printVerticalOrder(data) {
    let arr = [];
    let st = '';

    let x = Object.keys(data);
    x.sort((a, b) => a - b);

    for (let i = 0; i < x.length; i++) {

        arr.push(data[x[i]]);

        // let temp = data[x[i]]
        // for (let i = 0; i < temp.length; i++) {
        //     st += temp[i] + ",";
        // }
        // st += "\n";
    }

    return arr;
}

// console.log(printVerticalOrder(data));

//task ->11 left view and right view of binary tree;

let leftViewQ = []
function leftViewOfTree(root, level, q) {

    if (root == null) return;

    if (q[level] == undefined) q.push(root.value);

    leftViewOfTree(root.left, level + 1, q);
    leftViewOfTree(root.right, level + 1, q);

    return q;
}

// console.log(leftViewOfTree(bsTree,0,leftViewQ));

// right view 

// let rightViewQ = []
// function rightViewOfTree(root,level,q){

//     if(root == null) return;

//     if(q[level] == undefined) q.push(root.value);

//     rightViewOfTree(root.right,level +1,q);
//     rightViewOfTree(root.left,level +1,q);

//     return q;
// }

// console.log(rightViewOfTree(bsTree,0,rightViewQ));

// or

let rightViewQ = []
function rightViewOfTree(root, level, q) {

    if (root == null) return;

    q[level] = root.value;

    rightViewOfTree(root.left, level + 1, q);
    rightViewOfTree(root.right, level + 1, q);

    return q;
}

// console.log(rightViewOfTree(bsTree,0,rightViewQ));


//task ->12 top and bottam view of tree;

let toqViewMap = {};
function topViewOfTree(root, hd, vector) {

    if (root == null) return;

    if (vector[hd] == undefined) vector[hd] = root.value;

    topViewOfTree(root.left, hd - 1, vector);
    topViewOfTree(root.right, hd + 1, vector);

    return vector;
}

// let topView = topViewOfTree(bsTree, 0, toqViewMap);

// console.log(printVerticalOrder(topView));

// bottam view 

let bottamViewMap = {};
function bottamViewOfTree(root, hd, vector) {

    if (root == null) return;

    vector[hd] = root.value;

    bottamViewOfTree(root.left, hd - 1, vector);
    bottamViewOfTree(root.right, hd + 1, vector);

    return vector;
}

// let bottamView = bottamViewOfTree(bsTree, 0, bottamViewMap);

// console.log(printVerticalOrder(bottamView));

//task ->13 constract binary tree using below array data;

let binaryArr = [15, 17, 20, 21, 22, 25, 28, 32, 35]; // use the same trick if it's a Linked-List

class BT {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function makeBt(arr) {

    let vector = [];

    for (let i = 0; i < arr.length; i++) {
        vector.push(new BT(arr[i])) // use same for retrive Link_list and add in array;
    }
    let N = vector.length;

    for (let i = 0; i < N / 2; i++) {
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < N) vector[i].left = vector[l];
        if (r < N) vector[i].right = vector[r];
    }

    return vector[0];

}

let binarytree = makeBt(binaryArr);

// task ->14 find node to root path in a binary tree;

let pathArr = [];
function getBtPath(root, node, pathArr) {
    if (root == null) return false;

    if (root.value == node) {
        pathArr.push(root.value);
        return true;
    }

    if (getBtPath(root.left, node, pathArr) || getBtPath(root.right, node, pathArr)) {
        pathArr.push(root.value);
        return true;
    }

    return false;
}

// console.log(getBtPath(binarytree, 28, pathArr), ":", pathArr);

//task ->15 find lowest comman anccestar of binary tree;

function findAncesster(root, n1, n2) {

    if (root == null) return null;

    if (root.value == n1 || root.value == n2) return root.value;

    let left = findAncesster(root.left, n1, n2);
    let right = findAncesster(root.right, n1, n2);

    if (left == null) return right;
    if (right == null) return left;

    return root.value;
}

// console.log(findAncesster(bsTree, 10, 15));

// task ->16 convert the binary tree to Dobly-Linked_list;

let pre = null, head = null;
function btToDll(root) {
    if (root == null) return null;

    btToDll(root.left);

    if (pre == null) head = root;
    else {
        root.left = pre;
        pre.right = root;
    }
    pre = root;

    btToDll(root.right);

    return head;
}

// let hd = btToDll(binarytree);
// console.log(hd);

// let str = "";
// while (hd) {
//     str += hd.value + "->"
//     hd = hd.right;
// }
// console.log(str);

// task ->17 Diemeter of binary tree;

let result = 0;
function diemeterOfBT(root) {

    if (!root) return 0;

    let l = diemeterOfBT(root.left);
    let r = diemeterOfBT(root.right);

    result = Math.max(result, l + r + 1);

    return Math.max(l, r) + 1;
}

// console.log(diemeterOfBT(binarytree));
// console.log(result);

// task ->18 maximum path sum of binary tree;

let maxSum = 0;
function maxSumOfBT(root) {

    if (!root) return 0;

    let l = maxSumOfBT(root.left);
    let r = maxSumOfBT(root.right);

    maxSum = Math.max(result, l + r + root.value);

    return Math.max(l, r) + root.value;
}

// console.log(maxSumOfBT(bsTree));
// console.log(maxSum);

// task ->19 check if tree is BST or NOT;
let prev = Number.NEGATIVE_INFINITY;
function isBST(root) {

    if (root !== null) {

        if (!isBST(root.left)) return false;

        if (prev !== null && root.value <= prev.value) return false;
        prev = root;

        return isBST(root.right);
    }
    return true;
}

// console.log(isBST(bsTree));

// task ->20 floor and ceil value of binary tree;

let key = 70;

function floorValue(root, key) {

    let res = null;

    while (root !== null) {

        if (root.value == key) return root.value;

        if (root.value > key) {
            root = root.left
        } else {
            res = root.value;
            root = root.right
        }
    }
    return res;
}

// console.log(floorValue(bsTree,key));

function ceilValue(root, key) {

    let res = null;

    while (root !== null) {

        if (root.value == key) return root.value;

        if (root.value > key) {
            res = root.value;
            root = root.left
        } else {
            root = root.right
        }
    }
    return res;
}

// console.log(ceilValue(bsTree,key));

// task ->21 find the sum of target node in binary search tree;

let target = 115;
let tempSet = new Set();

function pairOfTarget(root, target, set) {
    if (!root) return false;

    if (pairOfTarget(root.left, target, set) == true) return true;

    if (root.value < target) {
        if (set.has(target - root.value)) {
            return true;
        }
        set.add(root.value);
    }
    return pairOfTarget(root.right, target, set);

}

// console.log(pairOfTarget(bsTree, target, tempSet));
// console.log(tempSet);

// task ->22 print the path of given range in BST;

let rangeArr = [];
let startRange = 15;
let endrange = 80;

function pathOfRangeInBst(root, SR, ER, pathArr) {

    if (!root) return;

    if (SR < root.value && ER < root.value) {
        pathOfRangeInBst(root.left, SR, ER, pathArr);
    }
    else if (SR > root.value && ER > root.value) {
        pathOfRangeInBst(root.right, SR, ER, pathArr);
    }
    else {
        pathOfRangeInBst(root.left, SR, ER, pathArr);
        pathArr.push(root.value);
        pathOfRangeInBst(root.right, SR, ER, pathArr);
    }
    return pathArr;
}

// console.log(pathOfRangeInBst(bsTree, startRange, endrange, rangeArr));

// task ->23 covert a binary tree to binary search tree without modyfying;

let tempArr = [];
function inOrderTrarsal(root, tempArr) {
    if (!root) return;

    inOrderTrarsal(root.left, tempArr);
    tempArr.push(root.value);
    inOrderTrarsal(root.right, tempArr);

    return tempArr;
}
// let ctArr = inOrderTrarsal(binarytree, tempArr);
// ctArr.sort();

function covertBtToBst(root, tempArr) {
    if (!root) return;

    covertBtToBst(root.left, tempArr);
    let val = tempArr.shift();
    root.value = val;
    covertBtToBst(root.right, tempArr);

    return root;
}

// let v = covertBtToBst(binarytree, ctArr);

// console.log((v));






























// const userInput = require("prompt-sync")(); // ES6 not supported
import { question } from 'readline-sync'; // ES6 supported

// Binary tree 

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

// cunstruct binary tree manually;

let Btree = new Node(15);
Btree.left = new Node(10);
Btree.left.left = new Node(5);
Btree.left.right = new Node(13);
Btree.right = new Node(20);
Btree.right.left = new Node(16);
Btree.right.right = new Node(24);
Btree.right.right.left = new Node(8);

// let tree = Btree;
// console.log(tree);


// construct binary tree by taking input

class BinaryTree {
    constructor() {
        this.root = null;
    }

    addNode(newRoot) {

        let enterNode = +question('Enter Data => ');
        if (enterNode == -1) return null;

        newRoot = new Node(enterNode);

        console.log('Enter left node for ' + "- " + enterNode)
        newRoot.left = this.addNode(newRoot.left);
        console.log('Enter right node for ' + "- " + enterNode)
        newRoot.right = this.addNode(newRoot.right);

        return newRoot;
    }
}

// let BT = new BinaryTree();
// let tree = BT.addNode(BT.root);

// inorder travelsal of treee -> LNR

let inOrderStr = '';
function inorder(treeNode) {
    if (treeNode == null) return null;

    inorder(treeNode.left);
    inOrderStr += treeNode.value + ',';
    // console.log(treeNode.value);
    inorder(treeNode.right);

    return inOrderStr;
}

// console.log('InOrder', inorder(tree));

// preorder Traversal of tree -> NLR

let preOrderStr = '';
function preOrder(treeNode) {
    if (treeNode == null) return null;

    preOrderStr += treeNode.value + ',';
    // console.log(treeNode.value);

    preOrder(treeNode.left);
    preOrder(treeNode.right);

    return preOrderStr;
}

// console.log('PreOrder', preOrder(tree));

// postorder traversal of tree -> LRN

let postOrderStr = '';
function postOrder(treeNode) {
    if (treeNode == null) return null;

    postOrder(treeNode.left);
    postOrder(treeNode.right);
    postOrderStr += treeNode.value + ',';
    // console.log(treeNode.value);

    return postOrderStr;
}
// console.log('PostOrder', postOrder(tree));

// Level order travalsal

function levelOrdertravelsar(treeNode) {

    let queue = [];
    queue.unshift(treeNode);
    queue.push(null);

    let str = '';

    while (queue.length) {
        let node = queue.shift();

        if (node == null) {
            if (queue.length) {
                str += '\n';
                queue.push(null);
            }
        } else {

            str += node.value + ",";

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return str;
}

// console.log(levelOrdertravelsar(tree));

class TBT{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

let Cbt = new TBT(15);
Cbt.right = new TBT(25);
Cbt.right.left = new TBT(10);


export {Btree,levelOrdertravelsar,Cbt};
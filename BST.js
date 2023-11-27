// Binary Search tree..

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class CreateBST {
    constructor() {
        this.root = null;
    }

    addNode(btRoot, value) {
        if (btRoot == null) return new Node(value);

        if (value < btRoot.value) {
            btRoot.left = this.addNode(btRoot.left, value);
        }
        else if (value > btRoot.value) {
            btRoot.right = this.addNode(btRoot.right, value);
        } else {
            return btRoot;
        }
        return btRoot;
    }

    add(data) {
        this.root = this.addNode(this.root, data);
    }
}

let bst = new CreateBST();
bst.add(10);
bst.add(5);
bst.add(4);
bst.add(6);
bst.add(15);

let rootNode = bst.root;

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

// console.log(levelOrdertravelsar(rootNode));


// creating Binary search tree ittratively;

function createBstIttratively() {
    this.root = null;
}

createBstIttratively.prototype.addTreeNode = function (value) {

    let node = new Node(value);

    if (this.root == null) {
        this.root = node;  
    } else {
        let currentRoot = this.root;

        while (true) {
            if (currentRoot.value > value) {
                if (currentRoot.left == null) {
                    currentRoot.left = node;
                    break;
                } else {
                    currentRoot = currentRoot.left;
                }
            } else {
                if (currentRoot.right == null) {
                    currentRoot.right = node;
                    break;
                } else {
                    currentRoot = currentRoot.right;
                }
            }
        }
    }
}

// let itretiveBt = new createBstIttratively();

// itretiveBt.addTreeNode(25);
// itretiveBt.addTreeNode(20);
// itretiveBt.addTreeNode(15);
// itretiveBt.addTreeNode(22);
// itretiveBt.addTreeNode(32);

// console.log(itretiveBt.root);

export default CreateBST;

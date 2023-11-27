
// Adjency Matrix Graph => Undirected Graph;

function convertNode(val) {

    let arr = [], cn = 0;

    for (let i = 65; i <= 90; i++) {
        arr[cn] = String.fromCharCode(i);
        cn++;
    }

    for (let i = 0; i < arr.length; i++) {
        if (i == val) return arr[i];
    }
}


class UndirectedMatrixGraph {

    constructor(nodeSize) {
        this.graph = [];

        for (let i = 0; i < nodeSize; i++) {
            this.graph[i] = new Array(nodeSize).fill(0);
        }
        this.size = nodeSize;
    }

    addEdge(node1, node2) {
        this.graph[node1][node2] = convertNode(node2);
        this.graph[node2][node1] = convertNode(node1);
    }

    removeEdge(node1, node2) {

        if (this.hasEdge(node1, node2)) {
            this.graph[node1][node2] = 0;
            this.graph[node2][node1] = 0;
            return "Disconnected sucessfully";
        } else {
            return "Invalid Nodes";
        }
    }

    hasEdge(node1, node2) {
        if ((node1 >= 0 && node1 < this.size) && (node2 >= 0 && node2 < this.size)) {
            return (this.graph[node1][node2] === convertNode(node2)) &&
                (this.graph[node2][node1] === convertNode(node1));
        } else {
            return false;
        }
    }

    negbour(node) {
        return this.graph[node];
    }
}

// let gp = new UndirectedMatrixGraph(4);

// gp.addEdge(0, 1);
// gp.addEdge(0, 2);
// gp.addEdge(1, 2);
// gp.addEdge(1, 3);
// gp.addEdge(3, 1);

// console.log(gp.graph);
// console.log(gp.removeEdge(3, 1));
// console.log(gp.hasEdge(3, 1));
// console.log(gp.negbour(1));
// console.log(gp.graph);


// Adjency Matrix Graph => Directed Graph;

class DirectedMatrixGraph {

    constructor(nodeSize) {
        this.graph = [];

        for (let i = 0; i < nodeSize; i++) {
            this.graph[i] = new Array(nodeSize).fill(0);
        }
        this.size = nodeSize;
    }

    addEdge(node1, node2) {
        this.graph[node1][node2] = convertNode(node2);
    }

    removeEdge(node1, node2) {

        if (this.hasEdge(node1, node2)) {
            this.graph[node1][node2] = 0;
            return "Disconnected sucessfully";
        } else {
            return "Invalid Nodes";
        }
    }

    hasEdge(node1, node2) {
        if ((node1 >= 0 && node1 < this.size) && (node2 >= 0 && node2 < this.size)) {
            return (this.graph[node1][node2] === convertNode(node2));
        } else {
            return false;
        }
    }

    negbour(node) {
        return this.graph[node];
    }
}

// let dGp = new DirectedMatrixGraph(5);

// dGp.addEdge(0, 1);
// dGp.addEdge(1, 2);
// dGp.addEdge(2, 0);
// dGp.addEdge(4, 3);

// console.log(dGp.graph);
// console.log(dGp.removeEdge(3, 0));
// console.log(dGp.hasEdge(3, 0));
// console.log(dGp.negbour(3));

// Adjency List Graph => Undirected Graph;

class Undir_List_Gf {

    constructor() {
        this.graph = {};
    }

    addNode(node) {
        if (this.graph[node] == undefined) {
            this.graph[node] = [];
        } else {
            return "Node Already exist"
        }
    }

    addEdge(source, des) {

        if (this.graph[source] && this.graph[des]) {
            this.graph[source].push(des);
            this.graph[des].push(source);
        }
        else if (this.graph[source]) {
            this.graph[source].push(des);
            this.graph[des] = [source];
        }
        else if (this.graph[des]) {
            this.graph[des].push(source);
            this.graph[source] = [des];
        }
        else if (!this.graph[source] && !this.graph[des]) {
            this.graph[source] = [des];
            this.graph[des] = [source];
        }
    }

    removeEdge(source, des) {

        if (this.graph[source] && this.graph[des]) {
            this.graph[source] = this.graph[source].filter(val => val !== des);
            this.graph[des] = this.graph[des].filter(val => val !== source);
        } else {
            return "Invalid Source or Destination";
        }
    }

    removeNode(node) {
        if (this.graph[node]) {
            let nodes = this.graph[node];
            for (let val of nodes) {
                this.removeEdge(node, val);
            }
            delete this.graph[node];
        } else {
            return "Given node is not connected with Graph";
        }
    }

    getNebour(node) {
        return this.graph[node];
    }

    hasEdge(source, des) {
        return this.graph[source].includes(des);
    }

    print() {
        for (let val in this.graph) {
            console.log(`${val} => ${this.graph[val]}`);
        }
    }
}

// let lGp = new Undir_List_Gf();
// lGp.addNode("A");
// lGp.addNode("B");

// lGp.addEdge("A", "B");
// lGp.addEdge("A", "C");
// lGp.addEdge("G", "H");
// lGp.addEdge("C", "G");

// lGp.removeEdge("A", "B");
// lGp.removeNode("A");
// console.log(lGp.getNebour("A"));
// console.log(lGp.hasEdge("A","C"));
// lGp.print();

// Adjency List Graph => Directed Graph;

class Dir_List_Gf {

    constructor() {
        this.graph = {};
    }

    addNode(node) {
        if (this.graph[node] == undefined) {
            this.graph[node] = [];
        } else {
            return "Node Already exist"
        }
    }

    addEdge(source, des) {

        if (this.graph[source] && this.graph[des]) {
            this.graph[source].push(des);
        }
        else if (this.graph[source]) {
            this.graph[source].push(des);
            this.graph[des] = [];
        }
        else if (this.graph[des]) {
            this.graph[des].push(source);
            this.graph[source] = [];
        }
        else if (!this.graph[source] && !this.graph[des]) {
            this.graph[source] = [des];
            this.graph[des] = [];
        }
    }

    removeEdge(source, des) {

        if (this.hasEdge(source, des)) {
            // this.graph[source] = this.graph[source].filter(val => val !== des);

            let arr = this.graph[source];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === des) {
                    arr.splice(i, 1);
                    break;
                }
            }

        } else {
            return "Invalid Source or Destination";
        }
    }

    removeNode(node) {
        if (this.graph[node]) {
            for (let val in this.graph) {
                if (this.graph[val].includes(node)) this.removeEdge(val, node);
            }
            delete this.graph[node];
        } else {
            return "Given node is not connected with Graph";
        }
    }

    getNebour(node) {
        return this.graph[node];
    }

    hasEdge(source, des) {

        return this.graph[source] && this.graph[des] ?
            this.graph[source].includes(des) : false;
    }

    print() {
        for (let val in this.graph) {
            console.log(`${val} => ${this.graph[val]}`);
        }
    }
}

// let dir_gf = new Dir_List_Gf();

// dir_gf.addNode("A");
// dir_gf.addNode("B");

// dir_gf.addEdge("A", "B");
// dir_gf.addEdge("B", "C");
// dir_gf.addEdge("D", "E");
// dir_gf.addEdge("A", "C");
// .....Sepratar ............
// dir_gf.addEdge("C", "D");
// dir_gf.addEdge("D", "A");
// dir_gf.addEdge("E", "A");

// console.log(dir_gf.getNebour("D"));
// console.log(dir_gf.removeEdge("C","D"));
// console.log(dir_gf.removeNode("A"));

// console.log(dir_gf.hasEdge("D", "A"));

// dir_gf.print();



export { UndirectedMatrixGraph, DirectedMatrixGraph, Undir_List_Gf, Dir_List_Gf };
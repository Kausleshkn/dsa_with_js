
// circular linked list

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
        this.Size = 0;
    }

    addNode(val) {

        let node = new Node(val);

        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next != this.head) {
                current = current.next;
            }
            current.next = node;
        }

        node.next = this.head;
        this.Size++;
    }

    addNodeAtIndex(index, value) {

        let node = new Node(value);

        let lead = this.head;
        let cn = 1;

        if (index == 1) {

            let tail = this.head;

            while (tail.next !== this.head) {
                tail = tail.next;
            }
            let temp = this.head;
            this.head = node;
            this.head.next = temp;

            tail.next = this.head;

        } else {
            while (cn < index - 1) {
                lead = lead.next;
                cn++;
            }
            let temp = lead.next;
            lead.next = node;
            lead.next.next = temp;
        }
        this.Size++;
    }

    getNode(index) {
        let lead = this.head;
        let cn = 1;

        while (cn <= index) {

            if (cn == index) return lead;
            lead = lead.next;
            cn++;
        }
    }

    updateNode(index, val) {

        let temp = this.getNode(index);

        if (temp) {
            temp.value = val;
        } else {
            return false;
        }
    }

    deleteNode(index) {

        let lead = this.head;
        let cn = 1;

        if (index == 1) {

            let tail = this.head;

            while (tail.next != this.head) {
                tail = tail.next;
            }

            this.head = this.head.next;
            tail.next = this.head;
        } else {
            while (cn <= index) {

                if (cn == index - 1) {
                    lead.next = lead.next.next;
                    break;
                }
                lead = lead.next;
                cn++;
            }
        }
        this.Size--;
    }

    print() {

        let temp = this.head;
        let cn = 1;
        let str = '';
        while (cn <= this.Size) {
            str += temp.value + '\n';

            temp = temp.next;
            cn++;
        }
        return str;
    }

    printCIr() {

        let temp = this.head;
        let cn = 1;
        let str = '';
        while (cn <= 15) {
            str += temp.value + '->';

            temp = temp.next;
            cn++;
        }
        return str;
    }
}

let list = new CircularList();

list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);

list.addNodeAtIndex(5, 100);

// list.updateNode(8, 500);

// list.deleteNode(5);


console.log(list.printCIr());

// console.log(list);


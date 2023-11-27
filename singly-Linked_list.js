
// Singly Linked-List;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {

    constructor(val) {
        this.head = null;
        this.tail = null;
        this.Size = 0;

        if (val != null) {
            this.addNode(val);
        }
    }

    addNode(nodeVal) {

        let node = new Node(nodeVal);

        if (this.head == null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.Size++
    }

    addNodeAtHead(value) {

        let node = new Node(value);

        if (this.head == null) {
            this.addNode(value);
        } else {
            let temp = this.head;

            this.head = node;
            this.head.next = temp;
            this.Size++;
        }
    }

    addNodeAtIndex(index, value) {

        let node = new Node(value);

        let lead = this.head;
        let cn = 1;

        if (index == 1) {
            this.head = node;
            this.head.next = lead;
        } else {

            while (cn < index - 1) {

                lead = lead.next;
                cn++;
            }
            let temp = lead.next;
            lead.next = node;
            lead.next.next = temp;
        }

        this.Size++
    }

    updateNode(index, val) {

        let lead = this.head;
        let cn = 1;

        while (cn <= index) {

            if (cn == index) {
                lead.value = val;
            }

            lead = lead.next;
            cn++;
        }
    }

    searchIndex(data) {

        let result = undefined;
        let leadNode = this.head;
        let i = 1;

        while (i <= this.Size) {

            if (leadNode.value == data) {
                result = i;
                break;
            }
            leadNode = leadNode.next;
            i++;
        }
        return result;
    }

    searchNode(data) {

        let result = undefined;
        let leadNode = this.head;
        let i = 1;

        while (i <= this.Size) {

            if (i == data) {
                result = leadNode.value;
                break;
            }
            leadNode = leadNode.next;
            i++;
        }
        return result;
    }

    deleteNode(index) {

        if ((index !== 0) && index <= this.Size) {

            let lead = this.head;
            let cn = 1;

            if (index == 1) {
                this.head = this.head.next;
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
            return true;
        } else {
            return false;
        }
    }

    print() {
        let i = 0;
        let node = this.head;

        let str = '"';

        while (i < this.Size) {

            if (i < this.Size - 1) {
                str += node.value + ' -> ';
            } else {
                str += node.value + ' -> ' + null + '"';
            }
            node = node.next;
            i++;
        }
        return str;
    }
}

let list = new Linkedlist();

// list.addNode(10);
// list.addNode(20);
// list.addNode(30);
// list.addNode(40);

// list.addNodeAtIndex(1, 0);
// list.addNodeAtIndex(2, 5);
// list.addNodeAtIndex(4, 100);
// list.addNodeAtIndex(6, 200);
// list.addNodeAtIndex(8, 300);
// list.addNodeAtIndex(10, 400);

// list.updateNode(2, 1000)
// list.updateNode(4, 2000)
// list.updateNode(6, 3000)
// list.updateNode(8, 4000)
// list.updateNode(10, 5000)

// list.deleteNode(6);

// console.log(list.print());

export default Linkedlist;


// Dubly Linked List;

class Node {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.Size = 0;
    }

    addNode(val) {
        let node = new Node(val);

        if (this.head == null) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.Size++;
    }

    addNodeAtIndex(index, val) {

        let node = new Node(val);

        let lead = this.head;
        let cn = 1;

        while (cn < index - 1) {

            lead = lead.next;
            cn++;
        }

        let temp = lead.next;
        node.prev = lead;
        lead.next = node;
        lead.next.next = temp;
        temp.prev = node;

        this.Size++;
    }

    serchNode(index) {

        let lead = this.head;
        let cn = 1;

        while (cn <= index) {

            if (cn == index) return lead;

            lead = lead.next;
            cn++
        }
    }

    updateNode(index, val) {

        let temp = this.serchNode(index);
        if (temp) temp.value = val;
        else { return false };
    }

    deleteNode(index) {

        let lead = this.head;
        let cn = 1;

        if (index == 1) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {

            while (cn <= index) {

                if (cn == index - 1) {
                    lead.next = lead.next.next;
                    lead.next.prev = lead;
                }

                lead = lead.next;
                cn++;
            }
        }

        this.Size--;
    }

    print() {

        let temp = this.head;
        let str = '';
        while (temp) {

            str += temp.value + '\n';
            temp = temp.next;
        }
        return str;
    }
}

let list = new DoublyList();

list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);
list.addNode(50);
list.addNode(60);
list.addNode(70);
list.addNode(80);


list.addNodeAtIndex(5, 500);

// list.updateNode(4, 500);

// console.log(list.serchNode(4));


list.deleteNode(5);

// console.log(list.print());

console.log(list);


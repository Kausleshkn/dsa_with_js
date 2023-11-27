
class DEqueue {

    constructor(max) {
        this.data = new Array(max);
        this.maxSize = max;
        this.size = 0;
        this.front = -1;
        this.rear = -1;
    }

    add_front(val) {
        if (this.size < this.maxSize) {
            if (this.front == 0) {
                this.front = this.maxSize - 1;
            } else if (this.front == -1) {
                this.front++;
                this.rear++;
            } else {
                this.front--;
            }
            this.data[this.front] = val;
            this.size++;
        } else {
            console.log('Queue is full');
        }
    }

    add_back(val) {
        if (this.size < this.maxSize) {
            if (this.rear == this.maxSize - 1) {
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.data[this.rear] = val;
            this.size++;

            if (this.front == -1) {
                this.front = this.maxSize;
            }
        } else {
            console.log('Queue is full');
        }
    }

    remove_front() {
        if (this.size && this.front > -1) {
            this.data[this.front] = null;

            if (this.front == this.maxSize - 1) {
                this.front = 0;
            } else if (this.front == 0) {
                this.front = -1;
            } else {
                this.front++;
            }
            this.size--;
        } else {
            console.log('No more items in front queue');
        }
    }

    remove_back() {
        if (this.size && this.rear >-1) {
            this.data[this.rear] = null;

            if (this.rear == 0) {
                this.rear == -1;
            } else {
                this.rear--;
            }
            this.size--;
        } else {
            console.log('No more items in rear queue');
        }
    }



    print() {
        console.log(this.data);
    }
}

let dq = new DEqueue(10);

// dq.add_front(5);
// dq.add_front(10);
// dq.add_front(15);
// dq.add_front(20);
// dq.add_front(25);

// dq.print();

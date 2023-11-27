//  circular queue

class Cirque {

    constructor(max) {
        this.data = new Array(max);
        this.maxSize = max;
        this.Size = 0;
        this.rear = -1;
        this.front = -1;
    }

    enqueue(val) {

        if (this.Size !== this.maxSize) {
            if (this.rear == this.maxSize - 1) {
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.data[this.rear] = val;
            this.Size++;

            if (this.front == -1) {
                this.front = 0;
            }
        } else {
            console.log('Queue is full');
        }
    }

    dequeue() {

        if (this.Size) {
            this.data[this.front] = null;
            this.Size--;
            if (this.front == this.maxSize - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
        } else {
            this.front = -1;
            this.rear = -1;
            console.log('Queue is empty');
        }
    }

    print() {
        return this.data;

    }

    isEmpty() {
        return this.Size == 0;
    }

    isFull() {
        return this.Size == this.maxSize;
    }

    head() {
        if (this.front > -1) {
            return this.data[this.front];
        } else {
            return 'No value';
        }
    }

    tail() {
        if (this.rear > -1) {
            return this.data[this.rear];
        } else {
            return 'No value';
        }
    }

    clear() {
        this.data = new Array(this.maxSize);
        this.Size = 0;
        this.rear = -1;
        this.front = -1;

        return true;
    }
}

let cq = new Cirque(10);

// console.log(cq);

export default Cirque;







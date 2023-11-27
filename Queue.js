// queue works in FIFO mood

class Queue {

    constructor(max) {
        this.queue = [];
        this.currentSize = this.queue.length;
        this.maxSize = max;
    }

    enqueue(val) {

        if (this.currentSize < this.maxSize) {
            this.queue[this.currentSize] = val;
            this.currentSize++;
        } else {
            console.log("Queue is Full, you can't add more item");
        }
    }

    dequeue() {

        if (this.currentSize) {

            let remEl = this.queue[0];

            for (let i = 0; i < this.queue.length; i++) {
                this.queue[i] = this.queue[i + 1];
            }
            this.currentSize--;
            this.queue.length = this.currentSize;

            return remEl;

        } else {
            console.log('queue is already empty');
        }
    }

    print() {
        return this.queue;
    }

    peek() {
        return this.queue[0]
    }

    isEmpty() {

        if (this.currentSize) {
            return false;
        } else {
            return true;
        }
    }
}

let queueOne = new Queue(5);

// queueOne.enqueue('a');
// queueOne.enqueue('b');
// queueOne.enqueue('c');
// queueOne.enqueue('d');
// queueOne.enqueue('e');

// queueOne.dequeue()
// queueOne.dequeue()
// queueOne.dequeue()
// queueOne.dequeue()
// queueOne.dequeue()
// queueOne.dequeue()


// queueOne.print()

export default Queue;




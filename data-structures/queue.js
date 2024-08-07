class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // #maxSize = 8;

    enqueue(value) {
        // find tail node

        // if (this.size < this.#maxSize) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            // find tail
            let currNode = this.head;

            while (currNode.next !== null) {
                currNode = currNode.next;
            }

            currNode.next = node;
        }
        // }

        this.size += 1;
    }

    dequeue() {
        const dequeued = this.head.value;

        if (this.size > 1) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }

        this.size -= 1;

        return dequeued;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(15);
queue.enqueue(39);
queue.enqueue(50);
queue.dequeue();
queue.dequeue();
console.log(queue);

export default Queue;

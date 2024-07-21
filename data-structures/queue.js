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

    #maxSize = 8;

    enqueue(value) {
        if (this.size < this.#maxSize) {
            const node = new Node(value);

            if (this.head === null) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
        }

        this.size += 1;
    }

    dequeue(node = this.head) {
        // find tail - node.next == null means tail node

        if (this.size > 0) {
            // base case
            // if there's only this.head (root)
            if (this.size === 1 || node.next.next === null) {
                this.size === 1 ? (this.head = null) : (node.next = null);

                this.size -= 1;
                return;
            }

            // recursive case
            this.dequeue(node.next);
        }
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(15);
queue.enqueue(39);
queue.enqueue(50);
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);

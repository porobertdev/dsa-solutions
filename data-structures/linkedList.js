class LinkedList {
    constructor() {
        this.head = null;
        // this.next = null;
    }

    append(value) {
        // add a new node to the end

        const node = new Node(value);
        let currentNode = this.head;

        // find the last node
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }

    prepend(value) {
        // add a new node to the start
        const node = new Node(value);
        node.next = this.head;

        this.head = node;
    }

    size() {
        // return total number of nodes in the list
        let total = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            currentNode = currentNode.next;

            total += 1;
        }

        return `Size of linked list: ${total}`;
    }

    getHead() {
        // returns the first node
        return 'Head node:', this.head;
    }

    getTail() {
        // returns the last node
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.next === null) {
                return 'Tail node:', currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }
    }

    at(index) {
        // returns node at index
    }

    pop() {
        // removes the last node

        let currentNode = this.head;

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        while (currentNode.next.next !== null) {
            currentNode = currentNode.next;
        }

        const removed = currentNode.next.value;

        currentNode.next = null;

        return 'Removed node value:', removed;
    }

    contains(value) {
        // returns boolean if value is found in the list

        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return 'true';
            }

            currentNode = currentNode.next;
        }

        return false;
    }

    find(value) {
        // returns index of the node that holds the value, or null otherwise

        let index = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return 'Value is at index:', index;
            } else {
                currentNode = currentNode.next;
                index += 1;
            }
        }
    }

    toString() {
        // returns all the values from the linked list as a string
        let string = '';
        let currentNode = this.head;

        while (currentNode !== null) {
            string += `(${currentNode.value}) -> `;
            currentNode = currentNode.next;
        }

        string += 'null';

        return string;
    }

    insertAt(value, index) {
        // inserts a new node with value at index
        const node = new Node(value);

        let counter = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (counter === index - 1) {
                node.next = currentNode.next;

                currentNode.next = node;
                return;
            }

            currentNode = currentNode.next;

            counter += 1;
        }
    }

    removeAt(index) {
        // remove node at index
        const size = this.size();

        if (index > size - 1) {
            console.log("That index doesn't exist.");
            return;
        }

        let counter = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (counter === index - 1) {
                console.log('Node value removed:', currentNode.next.value);

                currentNode.next = currentNode.next.next;
            }

            currentNode = currentNode.next;

            counter += 1;
        }
    }
}

class Node {
    constructor(value = null, next) {
        this.value = value;
        this.next = null;
    }
}

const lnkList = new LinkedList();
// console.log(lnkList);

// lnkList.append('test');
// console.log(new Node());

lnkList.prepend('hello bro');
console.log(lnkList);

lnkList.prepend('one more');
console.log(lnkList);

lnkList.prepend('prepend works :D');
console.log(lnkList);

console.log(lnkList.size());

lnkList.append('wtff braosfaoso');
console.log(lnkList);

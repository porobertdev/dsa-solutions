class LinkedList {
    constructor() {
        this.head = null;
    }

    #isIndexInvalid(index) {
        const size = this.size() - 1;

        if (index < 0 || index > size) {
            console.log('invalid index');
            return true;
        }

        return false;
    }

    append(value, node = this.head) {
        // add a new node to the end

        // base case
        if (node.next === null) {
            const newNode = new Node(value);
            node.next = newNode;

            return;
        }

        // recursive case
        this.append(value, node.next);
    }

    prepend(value) {
        // add a new node to the start
        const node = new Node(value);
        node.next = this.head;

        this.head = node;
    }

    size(node = this.head, total = 0) {
        // return total number of nodes in the list

        // base case
        if (node === null) {
            console.log(`Size of linked list: ${total}`);
            return total;
        }

        // recursive case
        total += 1;
        return this.size(node.next, total);
    }

    getHead() {
        // returns the first node
        return 'Head node:', this.head;
    }

    getTail(node = this.head) {
        // returns the last node

        // base case
        if (node.next === null) {
            // tail node
            return node;
        }

        // recursive case;
        this.getTail(node.next);
    }

    at(index, node = this.head, counter = 0) {
        // returns node at index

        if (this.#isIndexInvalid(index)) {
            return;
        }

        if (counter === index) {
            return node;
        }

        // recursive case
        counter += 1;

        return this.at(index, node.next, counter);
    }

    pop(node = this.head) {
        // removes the last node

        // base case
        // if there's only head node, remove it.
        if (node.next === null) {
            this.head = null;
            return;
        } else if (node.next.next === null) {
            console.log('Last node removed:', node.next);

            node.next = null;
            return;
        }

        // recursive case
        this.pop(node.next);
    }

    contains(value, node = this.head) {
        // returns boolean if value is found in the list

        // base case
        if (node === null) {
            return false;
        }

        // recursive case
        if (node.value === value) {
            return true;
        }

        return this.contains(value, node.next);
    }

    find(value, node = this.head, index = 0) {
        // returns index of the node that holds the value, or null otherwise

        // base case
        if (node === null) {
            return null;
        } else if (node.value === value) {
            return index;
        }

        // recursive case
        index += 1;

        return this.find(value, node.next, index);
    }

    toString(node = this.head) {
        // returns all the values from the linked list as a string

        // base case
        if (node === null) {
            return 'null';
        }

        // recursive case
        return `(${node.value}) -> ${this.toString(node.next)}`;
    }

    insertAt(value, index, node = this.head, counter = 0) {
        // inserts a new node with value at index

        if (this.#isIndexInvalid(index)) {
            return;
        }

        // base case
        if (counter === index - 1) {
            const newNode = new Node(value);

            newNode.next = node.next;
            node.next = newNode;

            return;
        }

        // recursive case
        counter += 1;

        this.insertAt(value, index, node.next, counter);
    }

    removeAt(index, node = this.head, counter = 0) {
        // remove node at index

        if (this.#isIndexInvalid(index)) {
            return;
        }

        // base case
        if (counter === index - 1) {
            console.log('Node value removed:', node.next.value);

            node.next = node.next.next;
        }

        // recursive case
        counter += 1;

        this.removeAt(index, node.next, counter);
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

lnkList.prepend('prepend works');
console.log(lnkList);

console.log(lnkList.size());

lnkList.append('oh yea');
console.log(lnkList);

export { LinkedList, Node };

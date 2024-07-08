class Tree {
    constructor() {
        this.root = null;
    }

    breadthFirstSearch(node = this.root, queue = []) {
        // base case
        if (node.left === null && node.right === null && queue.length == 0) {
            console.log(node.value);
            return;
        }

        // recursive case
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }

        console.log(node.value);
        this.breadthFirstSearch(queue.shift(), queue);
    }

    depthFirstSearch(mode) {
        console.log(`\n----- DFS: ${mode} -----\n`);

        function order(node) {
            if (node === null) return;

            switch (true) {
                case mode === 'preorder':
                    console.log(node.value);
                    order(node.left);
                    order(node.right);
                    break;
                case mode === 'inorder':
                    order(node.left);
                    console.log(node.value);
                    order(node.right);
                    break;
                case mode === 'postorder':
                    order(node.left);
                    order(node.right);
                    console.log(node.value);
                    break;
            }
        }

        order(this.root);
    }
}

class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const binaryTree = new Tree();

binaryTree.root = {
    value: 'root',
    left: {
        value: 'D',
        left: {
            value: 'B',
            left: {
                value: 'A',
                left: null,
                right: null,
            },
            right: {
                value: 'C',
                left: null,
                right: null,
            },
        },
        right: {
            value: 'E',
            left: null,
            right: null,
        },
    },
    right: {
        value: 'J',
        left: {
            value: 'G',
            left: null,
            right: {
                value: 'I',
                left: null,
                right: null,
            },
        },
        right: {
            value: 'K',
            left: null,
            right: null,
        },
    },
};
// console.log(binaryTree);

// binaryTree.breadthFirstSearch();
binaryTree.depthFirstSearch('postorder');

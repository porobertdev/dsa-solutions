class Node {
    constructor(value = null) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.root = this.buildBalancedTree(this.#processArr(arr));
    }

    #processArr(arr) {
        // sort
        arr.sort((a, b) => a - b);

        // remove duplicates
        arr = arr.filter((n, index) => arr[index - 1] != arr[index]);

        return arr;
    }

    buildBalancedTree(arr) {
        // base case
        if (arr.length === 0) {
            return null;
        }

        // recursive case
        const middle = Math.floor(arr.length / 2);
        const node = new Node(arr[middle]);

        node.left = this.buildBalancedTree(arr.slice(0, middle));
        node.right = this.buildBalancedTree(arr.slice(middle + 1));

        // return level-0 root node
        return node;
    }

    insert(value, node = this.root) {
        let path = value > node.data ? 'right' : 'left';

        // if it's a leaf node
        if (node[path] === null) {
            node[path] = new Node(value);
        } else if (node[path].data === value) {
            // if it's a duplicate
            return;
        } else {
            this.insert(value, node[path]);
        }
    }

    deleteItem(value, node = this.root) {
        // TODO: allow removal of root node

        // compare target value with node's value
        let path = value > node.data ? 'right' : 'left';

        // if it's a leaf node or if value is a duplicate
        if (node[path] === null) {
            return;
        }

        // if the next node has the target value
        if (node[path].data === value) {
            // if it's a leaf node
            if (node[path].left === null && node[path].right === null) {
                node[path] = null;
                return;
            }

            if (node[path].left === null) {
                node[path] = node[path].right;
            } else if (node[path].right === null) {
                node[path] = node[path].left;
            } else {
                // has two non-empty children
                node[path].left.right = node[path].right;
                node[path] = node[path].left;
            }
        } else {
            this.deleteItem(value, node[path]);
        }
    }

    find(value, node = this.root) {
        // base case: value is not found
        if (node === null) {
            return;
        } else if (node.data === value) {
            // console.log(node);
            return node;
        }

        // recursive case
        if (value < node.data) {
            return this.find(value, node.left);
        } else {
            return this.find(value, node.right);
        }
    }

    levelOrder(callback, node = this.root, queue = []) {
        // breadth-first traversal
        const arr = [];

        // base case
        // if it's a leaf node and queue is empty
        if (node.left === null && node.right === null && queue.length == 0) {
            return node.data;
        }

        // recursive case
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }

        if (!callback) {
            // console.log(queue);
            arr.push(node.data);
        } else {
            callback(node);
        }

        return arr.concat(this.levelOrder(callback, queue.shift(), queue));
    }

    preorder(callback, node = this.root) {
        // root/read, left, right
        const arr = [];

        // base case
        if (node === null) {
            return arr;
        }

        // recursive case
        if (!callback) {
            arr.push(node.data);

            return arr.concat(
                this.preorder(callback, node.left),
                this.preorder(callback, node.right)
            );
        } else {
            callback(node);
        }

        this.preorder(callback, node.left);
        this.preorder(callback, node.right);
    }

    inorder(callback, node = this.root, arr = []) {
        // left, root/read, right

        // base case
        if (node === null) {
            return arr;
        }

        // recursive case
        if (!callback) {
            // left
            this.inorder(callback, node.left, arr);

            // root/read
            arr.push(node.data);

            // right
            this.inorder(callback, node.right, arr);

            return arr;
        } else {
            this.inorder(callback, node.left);
            callback(node);
            this.inorder(callback, node.right);
        }
    }

    postorder(callback, node = this.root, arr = []) {
        // left, right, root/read

        // base case
        if (node === null) {
            return arr;
        }

        // recursive case
        if (!callback) {
            // left
            this.postorder(callback, node.left, arr);

            // right
            this.postorder(callback, node.right, arr);

            // root/read
            arr.push(node.data);

            return arr;
        } else {
            this.postorder(callback, node.left);
            callback(node);
            this.postorder(callback, node.right);
        }
    }

    depth(node, root = this.root) {
        // base case
        if (root.data === node) {
            return 0;
        }

        // recursive case
        if (node > root.data) {
            return this.depth(node, root.right) + 1;
        } else {
            return this.depth(node, root.left) + 1;
        }
    }

    height(node) {
        // initial node is a simple value
        if (typeof node !== 'object') {
            node = this.find(node);
        }

        // base case
        if (node === null || (node.left === null && node.right === null)) {
            return 0;
        }

        // recursive case
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    isBalanced(node = this.root) {
        // base case
        if (node === null) return;

        // recursive case
        const left = this.height(node.left);
        const right = this.height(node.right);

        return (left < right ? right - left : left - right) <= 1;
    }

    rebalance() {
        if (!this.isBalanced()) {
            console.log('\n\nTREE IS NOT BALANCED. REBALANCING...\n\n');

            // convert tree to arr using BFS (breadth-first search)
            const arr = this.levelOrder();
            console.log(arr);

            this.root = this.buildBalancedTree(this.#processArr(arr));
        }
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? '│   ' : '    '}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? '    ' : '│   '}`,
                true
            );
        }
    }
}

const tests = [
    [50],
    // [1, 2, 3, 4, 5, 6],
    // [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324],
    // [1, 2, 3, 4, 5, 6, 7],
];

for (const test of tests) {
    const binaryTree = new Tree(test);
    console.log(binaryTree.root, '\n\n');
    binaryTree.insert(30);
    binaryTree.insert(20);
    binaryTree.insert(40);
    binaryTree.insert(70);
    binaryTree.insert(60);
    binaryTree.insert(80);
    binaryTree.insert(85);
    binaryTree.insert(90);
    binaryTree.deleteItem(40);

    console.log('\n\n\n');

    binaryTree.prettyPrint(binaryTree.root);

    // FIND TEST
    console.log(binaryTree.find(70));

    // without cb: returns arr
    console.log('===== LEVEL ORDER =====', binaryTree.levelOrder());
    binaryTree.levelOrder((node) => console.log(node.data));

    // preorder
    console.log('===== PREORDER =====', binaryTree.preorder());
    binaryTree.preorder((node) => console.log(node.data));

    // inorder
    console.log('===== INORDER =====', binaryTree.inorder());
    binaryTree.inorder((node) => console.log('Node value:', node.data));

    // postorder
    console.log(binaryTree.postorder());
    binaryTree.postorder((node) => console.log('Node value:', node.data));

    // height
    console.log('=====HEIGHT=====', binaryTree.height(50));

    // depth
    console.log('=====DEPTH=====', binaryTree.depth(80));

    // isBalanced
    console.log(binaryTree.isBalanced());

    // rebalance
    binaryTree.rebalance();
    binaryTree.prettyPrint(binaryTree.root);

    console.log(binaryTree.isBalanced());
}

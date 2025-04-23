const binaryTree = {
    root: {
        data: 50,
        left: {
            data: 30,
            left: {
                data: 20,
                left: null,
                right: null,
            },
            right: {
                data: 40,
                left: null,
                right: null,
            },
        },
        right: {
            data: 70,
            left: {
                data: 60,
                left: null,
                right: null,
            },
            right: {
                data: 80,
                left: null,
                right: {
                    data: 85,
                    left: null,
                    right: {
                        data: 90,
                        left: null,
                        right: null,
                    },
                },
            },
        },
    },
};

function levelOrder(node, queue = []) {
    // breadth-first traversal
    const arr = [];

    // base case
    if (node === null) {
        return arr;
    }

    // recursive case
    queue.push(node.left, node.right);
    arr.push(node.data);

    return arr.concat(levelOrder(queue.shift(), queue));
}

console.log(levelOrder(binaryTree.root));

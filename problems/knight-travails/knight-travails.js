import Queue from '../../data-structures/queue.js';

class ChessTable {
    constructor(size) {
        this.size = size;
    }

    // [row, column]
    #knightMoves = [
        [-2, -1], // up-left
        [-2, 1], // up-right

        [2, -1], // down-left
        [2, 1], // down-right

        [-1, -2], // left-up
        [1, -2], // left-down

        [-1, 2], // right-up
        [1, 2], // right-down
    ];

    findShortest(start, target) {
        const queue = new Queue();
        const paths = {};
        const visited = [];

        // enque the starting position
        queue.enqueue(start);
        paths[start] = [start];

        while (!queue.isEmpty()) {
            const vertex = queue.dequeue();
            const [row, col] = vertex;

            for (const move of this.#knightMoves) {
                const nextMove = [row + move[0], col + move[1]];

                if (this.#isValidMove(nextMove)) {
                    // if it's the target node
                    if (nextMove.toString() === target.toString()) {
                        const shortest = paths[vertex];
                        shortest.push(nextMove);

                        console.log(
                            `\nEnd position found. SHORTEST PATH has ${shortest.length - 1} edges:\n\n`,
                            shortest
                        );
                        return;
                    } else if (!paths[nextMove]) {
                        // if next path doesn't exist, then create it by using the current path that leads to it
                        paths[nextMove] = paths[vertex].concat([nextMove]);
                    }

                    // enqueue if the node wasn't visited
                    if (!visited.toString().includes(nextMove.toString())) {
                        queue.enqueue(nextMove);
                    }

                    visited.push(nextMove);
                }
            }
        }
    }

    #isValidMove(move) {
        const [row, col] = move;

        return (
            row >= 0 && row <= this.size - 1 && col >= 0 && col <= this.size - 1
        );
    }
}

const table = new ChessTable(8);
table.findShortest([0, 0], [7, 7]); // [0, 0], [2, 1], [0, 2], [2, 3], [4, 4], [6, 5], [7, 7]
table.findShortest([0, 0], [3, 3]); // [ [ 0, 0 ], [ 2, 1 ], [ 3, 3 ] ]
table.findShortest([3, 3], [4, 3]); // [ [ 3, 3 ], [ 1, 2 ], [ 3, 1 ], [ 4, 3 ] ]

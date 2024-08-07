## Knight Travails

Assignment from [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).

Given a start and end position, find the shortest path for the Knight.

### Observations

-   the table is 8 rows \* 8 columns = 64 squares
-   each position is like a coordinate: [0, 5] represents row 0 and column 5
-   there can more than one shortest path, but I care about the first one only
-   the knight has max 8 possible moves. The closer it gets to the edges of the table, the less possible moves there are.

### Algorithm: BFS

This implementation uses a kind of dynamic adjacency list as data structure. No list is generated or stored anywhere, but that's how it works. For the search algorithm, I chose BFS (Breadth-First Traversal), which visits all vertexes (nodes) on the current level before moving to the next one.

From the start position, I check which moves are possible for the Knight to make by using the private method`isValidMove()`, which uses the private field `#knightMoves`. Then I **enqueue** each possible move, and I repeat the same process for each enqueued move.

You can think about the graph as a **dynamic generated graph**.

I track the path for each position by using the `path` object, where each key represents the visited possible moves, and the value of it is an array of coordinates (sub-arrays) that led to that move.

When the `nextMove` equals `target`, I take the path that led to the current move, push `nextMove`, and return that path. That's the shortest path from start to target.

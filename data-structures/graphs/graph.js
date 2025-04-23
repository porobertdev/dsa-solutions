// Graph implementation
class Graph {
    constructor(size) {
        this.adjacencyList = this.#createAdjacencyList(size);
    }

    #createAdjacencyList(size) {
        const arr = [];

        for (let vertex = 0; vertex <= size - 1; vertex++) {
            // no need for number because each index represents a vertex
            arr.push([]);
        }

        return arr;
    }

    // Add Vertex
    addVertex() {
        this.adjacencyList.push([]);
    }

    // Update Vertex
    // Delete Vertex
    deleteVertex(vertex) {
        this.adjacencyList.splice(vertex, 1);
    }
    j;

    // Add Edge
    addEdge(destination, vertex) {
        /*
         each vertex contains a list of vertexes which forms an edge with it
         thus, we can say there's a edge, when vertex u is present in vertex v's list
         */
        this.adjacencyList[destination].push(vertex);
    }
    // Update Edge
    // Delete Edge
    // Check if 2 Vertices are Neighbors

    // Search Vertex
    find(vertex) {}

    // Print All Neighbors of a Vertex

    // BFS implementation
    findShortestPath(start, end) {
        const visited = [];
        const queue = [start];

        // each index is a vertex, and it holds the path that led to it
        const paths = [];
        paths[start] = [start];

        while (queue.length !== 0) {
            const vertex = queue.shift();

            // take the path of the previous vertex
            const prevPath = paths[vertex];

            for (const neighbor of this.adjacencyList[vertex]) {
                // if node is not visited
                if (!visited.includes(neighbor)) {
                    /*
                    if there's no path for this vertex,
                    then use the previous path
                    */
                    if (!paths[neighbor]) {
                        paths[neighbor] = prevPath.concat([neighbor]);

                        // OR deep copy array without link to the original
                        /* const newPath = [...prevPath];
                        newPath.push(neighbor);
                        paths[neighbor] = newPath; */
                    }

                    // if vertex is the one we're looking for
                    if (neighbor === end) {
                        console.log('FINAL PATHS: ', paths);
                        console.log(
                            `\nSHORTEST PATH: ${paths[neighbor]} of length ${paths[neighbor].length - 1} edges.`
                        );
                        return;
                    }
                }

                // node has been visited
                visited.push(neighbor);

                // update queue
                queue.push(neighbor);
            }
        }
    }

    findShortest(start, end) {
        const queue = [start];
        const paths = [[start]];

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log('🚀 ~ Graph ~ findShortest ~ vertex:', vertex);

            for (const neighbour of this.adjacencyList[vertex]) {
                if (neighbour === end) {
                    // target node is found
                    paths[vertex].push(neighbour);
                    console.log('queue', queue);

                    console.log('===== PATHS =====\n', paths);
                    console.log(
                        `\nSHORTEST PATH: ${paths[vertex]} with ${paths[vertex].length - 1} edges.`
                    );
                    return;
                }

                if (!paths[neighbour]) {
                    // if path doesn't exist, then create it
                    paths[neighbour] = paths[vertex].concat([neighbour]);

                    // if paths[neighbour] doesn't exist, this means the node is not visited.
                    queue.push(neighbour);
                }
            }
        }
    }

    // Print Graph
    print() {
        for (let v = 0; v <= this.adjacencyList.length; v++) {
            console.log(`Vertex ${v}: ${this.adjacencyList[v]}`);
        }
    }
}

const graph = new Graph(7);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 0);
graph.addEdge(1, 3);
graph.addEdge(1, 5);
graph.addEdge(2, 0);
graph.addEdge(2, 6);
graph.addEdge(3, 1);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 3);
graph.addEdge(4, 6);
graph.addEdge(5, 1);
graph.addEdge(5, 3);
graph.addEdge(5, 6);
graph.addEdge(6, 2);
graph.addEdge(6, 4);
graph.addEdge(6, 5);
graph.addEdge(4, 10);

graph.print();

// graph.findShortestPath(1, 6);
// graph.findShortestPath(0, 4);
// graph.findShortestPath(0, 10);
graph.findShortest(0, 10);

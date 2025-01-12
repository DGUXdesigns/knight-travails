import { Node } from './Node.js';
import { Graph, prettyprint } from './Graph.js';

function knightMoves(start, end) {
  const board = new Graph(8); // Initialize 8x8 Chessboard
  const rootNode = new Node(start[0], start[1]);
  board.addEdge(start[0], start[1]); // Add starting node to the graph

  let queue = [];
  queue.push(rootNode);

  let visited = new Set(); // Set to track visited nodes using Unique IDs
  visited.add(rootNode.data[0] * 8 + rootNode.data[1]); // Add the starting position

  const predecessors = {}; // To track the shortest path

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const currentRow = currentNode.data[0];
    const currentCol = currentNode.data[1];

    // If destination is reached, stop the search
    if (currentRow === end[0] && currentCol === end[1]) {
      let pathNode = [currentRow, currentCol];

      // Rebuild the path taken
      while (pathNode) {
        board.addEdge(pathNode[0], pathNode[1]); // Mark location on adjacency matrix
        board.nodes.unshift(pathNode); // Add current path node to node storage
        let pathNodeIndex = pathNode[0] * 8 + pathNode[1];
        pathNode = predecessors[pathNodeIndex]; //
      }

      prettyprint(board.matrix);
      board.printResult();
      return;
    }

    // All possible moves
    const moves = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [-1, 2],
      [1, -2],
      [-1, -2],
    ];

    // Explore all valid Knight moves
    for (let move of moves) {
      const newRow = currentNode.data[0] + move[0];
      const newCol = currentNode.data[1] + move[1];

      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        const newIndex = newRow * 8 + newCol;

        if (!visited.has(newIndex)) {
          const newNode = new Node(newRow, newCol);
          queue.push(newNode);
          visited.add(newIndex);
          predecessors[newIndex] = [currentNode.data[0], currentNode.data[1]];
        }
      }
    }
  }
}

// Initiate knight moves
knightMoves([3, 3], [4, 3]);

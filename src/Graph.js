export class Graph {
  constructor(size) {
    this.nodes = [];
    this.matrix = [];
    for (let i = 0; i < size; i++) {
      this.matrix[i] = new Array(size).fill(0);
    }
  }

  addEdge(row, col) {
    this.matrix[row][col] = 1;
  }

  printResult() {
    console.log(
      `=> KnightMoves([${this.nodes[0]}], [${this.nodes[this.nodes.length - 1]}])`,
    );

    console.log(
      `=> You made it in ${this.nodes.length - 1} ${this.nodes.length - 1 === 1 ? 'move' : 'moves'}! Here's your path:`,
    );

    for (let node of this.nodes) {
      console.log(node);
    }
  }
}

export function prettyprint(matrix) {
  let header = 'i  ';
  for (let j = 0; j < matrix.length; j++) {
    header += j + ' ';
  }
  console.log(header);
  console.log();

  for (let i = 0; i < matrix.length; i++) {
    let row = i + '  ';
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] + ' ';
    }
    console.log(row.trim());
  }
  console.log();
}

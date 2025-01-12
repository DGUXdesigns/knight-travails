import { Node } from './Node.js';

export class Graph {
  constructor(size) {
    this.matrix = [];
    for (let i = 0; i < size; i++) {
      this.matrix[i] = new Array(size).fill(0);
    }
  }

  addEdge(row, col) {
    this.matrix[row][col] = 1;
  }

  checkEdge(row, col) {
    if (this.matrix[row][col] === 1) {
      return true;
    } else {
      return false;
    }
  }

  prettyprint() {
    let header = 'i   ';
    for (let j = 0; j < this.matrix.length; j++) {
      header += j + ' ';
    }
    console.log(header);
    console.log();

    for (let i = 0; i < this.matrix.length; i++) {
      let row = i + '   ';
      for (let j = 0; j < this.matrix[i].length; j++) {
        row += this.matrix[i][j] + ' ';
      }
      console.log(row.trim());
    }
  }
}

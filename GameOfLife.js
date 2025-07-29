class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  makeBoard() {
    let board = [];
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(0);
      }
      board.push(row);
    }
    return board;
  }

  getCell(row, col) {
    if (row < 0 || row >= this.height || col < 0 || col >= this.width) {
      return 0;
    }
    return this.board[row][col];
  }

  setCell(value, row, col) {
    if (row >= 0 && row < this.height && col >= 0 && col < this.width) {
      this.board[row][col] = value;
    }
  }

  toggleCell(row, col) {
    if (row >= 0 && row < this.height && col >= 0 && col < this.width) {
      this.board[row][col] = this.board[row][col] ? 0 : 1;
    }
  }

  livingNeighbors(row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const neighborRow = row + i;
        const neighborCol = col + j;
        if (
          neighborRow >= 0 &&
          neighborRow < this.height &&
          neighborCol >= 0 &&
          neighborCol < this.width
        ) {
          if (this.board[neighborRow][neighborCol] === 1) {
            count++;
          }
        }
      }
    }
    return count;
  }

  tick() {
    const newBoard = this.makeBoard();
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        const alive = this.board[row][col];
        const neighbors = this.livingNeighbors(row, col);

        if (alive) {
          newBoard[row][col] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
        } else {
          newBoard[row][col] = (neighbors === 3) ? 1 : 0;
        }
      }
    }
    this.board = newBoard;
  }
}

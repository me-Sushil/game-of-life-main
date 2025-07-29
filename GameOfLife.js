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
      for (let i = 0; i < this.width; i++) {
        row.push(0);
      }
      board.push(row);
    }
    return board;
  }

  getCell(row, col) {
    if (
      row < 0 ||
      row > this.board.length ||
      col < 0 ||
      col > this.board.length
    ) {
      return 0;
    }
    return this.board[row][col];
  }

  setCell(value, row, col) {
    if (
      row < 0 ||
      row > this.board.length ||
      col < 0 ||
      col > this.board.length
    ) {
      return;
    }
    this.board[row][col] = value;
  }

  toggleCell(row, col) {
    if (
      row < 0 ||
      row > this.board.length ||
      col < 0 ||
      col > this.board.length
    ) {
      return;
    }
    if (this.board[row][col] === 1) {
      this.board[row][col] = 0;
    } else {
      this.board[row][col] = 1;
    }
  }
  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;

        let neighborRow = row + 1;
        let neighborCol = col + 1;

        if (
          neighborRow >= 0 &&
          neighborRow < this.height &&
          neighborCol >= 0 &&
          neighborCol < this.width
        ) {
          if (this.board[neighborRow][neighborCol] = 1) {
            count++;
          }
        }
      }
    }
    return count;
  }

  tick() {
    const newBoard = this.makeBoard();
    for (let i = 0; i < this.board; i++) {
      for (let j = 0; j < this.board; j++) {
        const alive = this.board[row][col];
        const neighbors = this.livingNeighbors(row, col);

        if (alive) {
          if (neighbors[row][col] === 2 || neighbors[row][col] === 3) {
            newBoard[row][col] = 1;
          } else {
            newBoard[row][col] = 0;
          }
        } else {
          if (neighbors === 3) {
            newBoard[row][col] = 1;
          } else {
            newBoard[row][col] = 0;
          }
        }
      }
    }

    this.board = newBoard;
  }
}

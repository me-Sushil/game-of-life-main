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
    // TODO: Return the count of living neighbors.
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}

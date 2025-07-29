const width = 47;
const height = 18;
const gol = new GameOfLife(width, height);

const tds = [];

const table = document.createElement("tbody");
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById("board").append(table);

const paint = () => {
  for (let i = 0; i < tds.length; i++) {
    const td = tds[i];
    const row = Number(td.dataset.row);
    const col = Number(td.dataset.col);
    if (gol.getCell(row, col) === 1) {
      td.classList.add("alive");
    } else {
      td.classList.remove("alive");
    }
  }
};

document.getElementById("board").addEventListener("click", (event) => {
  if (event.target.tagName !== "TD") return;
  const row = Number(event.target.dataset.row);
  const col = Number(event.target.dataset.col);
  gol.board[row][col] = gol.board[row][col] === 1 ? 0 : 1;
  paint();
});

document.getElementById("step_btn").addEventListener("click", (event) => {
  gol.tick();
  paint();
});

let isPlaying = false;
document.getElementById("play_btn").addEventListener("click", (event) => {
  if (!isPlaying) {
    gameInterval = setInterval(() => {
      gol.tick();
      paint();
    }, 500);
    isPlaying = true;
   }else {
      clearInterval(gameInterval)
      isPlaying = false;
    }
  });

document.getElementById("random_btn").addEventListener("click", (event) => {
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      gol.setCell(Math.random() > 0.5 ? 1 : 0, row, col);
    }
  }
  paint();
});

document.getElementById("clear_btn").addEventListener("click", (event) => {
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      gol.setCell(0, row, col);
    }
  }
  paint();
});



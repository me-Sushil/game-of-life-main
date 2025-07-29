const width = 47;
const height = 18;
const gol = new GameOfLife(width, height);

// Actual table cells
const tds = [];

// <table> element
const table = document.createElement("tbody");
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
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
  gol.toggleCell(row, col);
  paint();
});

document.getElementById("step_btn").addEventListener("click", (event) => {
  gol.tick();
  paint();
});

let interval = null;
document.getElementById("play_btn").addEventListener("click", (event) => {
  if (interval) return; // prevent multiple intervals
  interval = setInterval(() => {
    gol.tick();
    paint();
  }, 200); // adjust speed here
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
  // TODO: Clear the board and paint
});


// // --- Pause ---
// document.getElementById("pause_btn").addEventListener("click", () => {
//   clearInterval(interval);
//   interval = null;
// });

// // --- Reset Random ---
// document.getElementById("random_btn").addEventListener("click", () => {
//   for (let row = 0; row < height; row++) {
//     for (let col = 0; col < width; col++) {
//       gol.setCell(Math.random() > 0.5 ? 1 : 0, row, col);
//     }
//   }
//   paint();
// });

// // --- Clear ---
// document.getElementById("clear_btn").addEventListener("click", () => {
//   for (let row = 0; row < height; row++) {
//     for (let col = 0; col < width; col++) {
//       gol.setCell(0, row, col);
//     }
//   }
//   paint();
// });

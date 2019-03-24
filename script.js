function setup() {
  createCanvas(900, 900);
  background(255);
  strokeWeight(5);
  for (let i in table) {
    for (let j in table[i]) {
      fill(currentFillColor);
      rect(i * (width / table.length), j * (height / table[i].length), width / table.length, height / table[i].length)
      if (currentFillColor === 255) {
        currentFillColor = 255 / 2;
      } else if (currentFillColor === 255 / 2) {
        currentFillColor = 255;
      }
    }
  }
}
let currentFillColor = 255;

const createBoard = (width, height) => Array.from(new Array(width))
  .fill(Array.from(new Array(height))
    .fill(null));

const table = createBoard(3, 3);

function draw() {}
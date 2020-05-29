//define variables
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const canvas = document.getElementById('pixelCanvas');
const gridSize = document.querySelector('#gridChooser');
var chosenColor = document.querySelector('#colorPicker').value;

//when submit is clicked, inputted width and height are used to create grid
gridSize.addEventListener('submit', function (event) {
  event.preventDefault();
  let width = gridWidth.value;
  let height = gridHeight.value;
  clearGrid();
  makeGrid(width,height);
});

/*function that creates grid according to inputted width and height
adds event listeners to record color when chosen and apply to pixels
when clicked or dragged over*/
function makeGrid(width,height) {
  let grid = '';
  for (let h=1;h <= height;h++) {
    grid += '<tr class="pixel" draggable="true">';
    for (let r=1;r <= width;r++) {
      grid += '<td class="pixel" draggable="true"></td>';
      };
    grid += '</tr>';
    };
  canvas.innerHTML = grid;
  canvas.addEventListener('click', newColor);
  canvas.addEventListener('dragover', newColor);
  canvas.addEventListener('click', pixelClick);
  canvas.addEventListener('dragover', pixelDrag);
};

//function to clear grid so that new chosen dimensions override
function clearGrid() {
  pixels = document.querySelectorAll(".pixel");
  for (let i=0;i<pixels.length;i++) {
    pixels[0].remove();
  };
}

//applies chosen color to pixel
function pixelClick(event) {
  event.target.style.backgroundColor = chosenColor;
}

//applies chosen color to pixels
function pixelDrag(event) {
  event.preventDefault;
  event.target.style.backgroundColor = chosenColor;
}

//records chosen color
function newColor(event) {
  event.preventDefault;
  chosenColor = document.querySelector('#colorPicker').value;
};

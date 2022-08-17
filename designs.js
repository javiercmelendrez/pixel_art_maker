// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const form = document.getElementById("sizePicker");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const height = e.target.elements.inputHeight.value;
  const width = e.target.elements.inputWidth.value;
  makeGrid(height, width);
}

function makeGrid(height, width) {
  const table = document.getElementById("pixelCanvas");
  table.innerHTML = "";
  for (let i = 0; i < height; i++) {
    let row = pixelCanvas.insertRow(i);

    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", function (evt) {
        evt.preventDefault();
        let color = document.getElementById("colorPicker");
        cell.style.backgroundColor = color.value;
      });
    }
  }
}

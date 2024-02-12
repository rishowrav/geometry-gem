function getValueById(idName) {
  const idValue = parseFloat(document.getElementById(idName).value);
  return idValue;
}
function setValueById(idName, setValue) {
  const id = document.getElementById(idName);
  id.innerText = setValue;
}

function calTriangle() {
  // base
  const triangleBase = getValueById("triangle-base");
  // height
  const triangleHeight = getValueById("triangle-height");
  // calculate triangle
  const triangleArea = 0.5 * triangleBase * triangleHeight;
  // display triangle area
  setValueById("triangle-area", triangleArea);
}

function calRectangle() {
  // width
  const rectangleWidth = getValueById("rectangle-width");
  // length
  const rectangleLength = getValueById("rectangle-length");
  // calculate rectangle
  const rectangleArea =
    parseFloat(rectangleWidth) * parseFloat(rectangleLength);
  // display rectangle area
  setValueById("rectangle-display", rectangleArea);
}

function calParallelogram() {
  const parallelogramBase = getValueById("parallelogram-base");
  const parallelogramHeight = getValueById("parallelogram-height");
  const parallelogramArea = parallelogramBase * parallelogramHeight;
  setValueById("parallelogram-display", parallelogramArea);
}
// Experiment

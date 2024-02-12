function calTriangle() {
  // base
  const triangleBase = document.getElementById("triangle-base");
  const triangleBaseValue = parseFloat(triangleBase.value);
  // height
  const triangleHeight = document.getElementById("triangle-height");
  const triangleHeightValue = parseFloat(triangleHeight.value);

  // calculate triangle
  const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;

  // display triangle area
  const triangleAreaDisplay = document.getElementById("triangle-area");
  triangleAreaDisplay.innerText = triangleArea;
}

function calRectangle() {
  // width
  const rectangleWidth = document.getElementById("rectangle-width").value;
  // length
  const rectangleLength = document.getElementById("rectangle-length").value;
  // calculate rectangle
  const rectangleArea =
    parseFloat(rectangleWidth) * parseFloat(rectangleLength);
  // display rectangle area
  const rectangleAreaDisplay = document.getElementById("rectangle-display");
  rectangleAreaDisplay.innerText = rectangleArea;
}

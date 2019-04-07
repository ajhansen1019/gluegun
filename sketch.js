function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {

  if (touchIsDown || mouseIsPressed) {
    rect(touchX, touchY, 10, 10)
  }
}

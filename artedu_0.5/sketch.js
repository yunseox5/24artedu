let noiseScale = 0.01
let stepLength = 100
let stars = {
  num: 300,
  maxSize: 6
}
let hue

function setup() {
  colorMode(HSB, 255)
  createCanvas(displayWidth, displayHeight);
  drawStars()
}

function drawStars () {
  drawingContext.shadowColor = color(200)
  fill(255)
  for(let i = 0; i < stars.num; i++) {
    let x = random(width)
    let y = random(height)
    let starSize = stars.maxSize * noise(x, y, noise(x * noiseScale, y * noiseScale))
    drawingContext.shadowBlur = map(starSize, 0, stars.maxSize, 3, 100)
    circle(x, y, starSize)
  }
}

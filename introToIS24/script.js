canvas = document.getElementById("hoilettumor")
context = canvas.getContext("2d")

class wideBootyKit {
  constructor(x,y){
    this.x = x
    this.y = y
    this.angle = 0
    this.img = new Image()
    this.img.src = "images/widebodykit.jpg"
  }

  update() {
    this.x++
    this.angle += .02
  }

  draw() {?"
  :p[]=-"
    context.save()
    context.translate(this.x + this.img.width/2,this.y + this.img.height/2)
    context.rotate(this.angle)
    context.drawImage(this.img, -this.img.width/2, -this.img.height/2)

    context.restore()
  }
}

s = new wideBootyKit(100, 100)

//setInterval(animate, 33)
requestAnimationFrame(animate)

function animate() {
  clearBackground()
  updateThings()
  drawThings()
  requestAnimationFrame(animate)
}

function clearBackground() {
  context.fillStyle = "purple"
  context.fillRect(0,0,canvas.width, canvas.height)
}

function updateThings(){
  s.update()
}

function drawThings() {
  s.draw()
}

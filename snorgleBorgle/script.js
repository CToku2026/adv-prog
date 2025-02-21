let canvas = document.getElementById("can")
let context = canvas.getContext("2d")

document.addEventListener("keydown", handleKeyDown)
document.addEventListener("keyup", handleKeyUp)

function handleKeyDown(evt) {
  if(evt.key == "a" ) {
    player.movingLeft = true
  }
  else if(evt.key == "d") {
    player.movingRight = true
  }
  else if(evt.key == " ") {
    if( player.isStanding ) {
      player.isStanding = false
      player.inAirVertSpeed = -10
    }
  }
}

function handleKeyUp(evt) {
  if(evt.key == "a" ) {
    player.movingLeft = false
  }
  else if(evt.key == "d") {
    player.movingRight = false
  }
}

class Platform {
  constructor(y) {
    this.minWidth = 40
    this.maxWidth = 100
    this.width = Math.random()*(this.maxWidth - this.minWidth)
          + this.minWidth
    this.height = 20
    this.x = Math.random()*(canvas.width - this.width)
    this.y = y
    this.speed = 2
    this.red = Math.random()*256
    this.green = Math.random()*256
    this.blue = Math.random()*256
  }



  update() {
    this.y += this.speed
    if(this.y > canvas.height) {
      this.y = -this.height - Math.random()*50
      this.width = Math.random()*(this.maxWidth - this.minWidth) +
            this.minWidth
      this.x = Math.random()*(canvas.width - this.width)
    }
  }

  draw() {
    context.fillStyle = `rgb( ${this.red}, ${this.green}, ${this.blue})`
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}

class Player {
  constructor() {
    this.width = 50
    this.height = 50
    this.x = canvas.width/2 - this.width/2
    this.y = 0
    this.horizSpeed = 5
    this.inAirVertSpeed = 0
    this.inAirVertSpeedDelta = 0.2
    this.isStanding = false
    this.movingRight = false
    this.movingLeft = false
  }

  draw() {
    context.fillStyle = "green"
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  update() {
    if(this.movingRight) {
      this.x += this.horizSpeed
    }
    if(this.movingLeft) {
      this.x -= this.horizSpeed
    }

    if(this.isStanding) {
      this.y += platforms[0].speed
      //falling off ledge
      if(!stillStanding()) {

        this.isStanding = false
        this.inAirVertSpeed = 0
        this.inAirVertSpeed += this.inAirVertSpeedDelta
      }
    }
    else {
      let result = checkForCollision()
      if(result) {
        this.y = result.y - this.height
        this.isStanding = true
        console.log(this.y)
      }
    }
    if( ! this.isStanding) {
      this.y += this.inAirVertSpeed
      this.inAirVertSpeed += this.inAirVertSpeedDelta
    }

  }
}

platforms = []
platforms.push( new Platform(0) )
platforms.push( new Platform(130) )
platforms.push( new Platform(250) )
platforms.push( new Platform(360) )

player = new Player()


requestAnimationFrame(animate)

function animate() {
  clearBackground()
  updateThings()
  drawThings()
  requestAnimationFrame(animate)
}


function clearBackground() {
  context.fillStyle = "DodgerBlue"
  context.fillRect(0, 0, canvas.width, canvas.height)
}

function updateThings() {
  player.update()
  for( let x of platforms ) {
    x.update()
  }
}

function drawThings() {
  player.draw()

  for( let x of platforms ) {
    x.draw()
  }
}

function checkForCollision() {
  for(let plat of platforms) {
    let currBottom = player.y + player.height
    let nextBottom = currBottom + player.inAirVertSpeed
    if( currBottom < plat.y  && nextBottom > plat.y &&
      player.x + player.width > plat.x && player.x < plat.x + plat.width
    ) {
      return plat
    }
  }
  return false
}

function stillStanding(){
  for (let plat of platforms) {
    if( Math.abs(player.y + player.height - plat.y) < 2) {
      console.log("found plat")
      if(player.x + player.width < plat.x || player.x > plat.x + plat.width) {
        console.log("fell off")
        return false
      }
      else{
        return true
      }
    }
  }
  return false
}

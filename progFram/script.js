"use strict"

let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

class sprite {
  constructor(){
    this.x = 100;
    this.y = 100;
    this.deltaX = 0;
    this.deltaY = 0;
    this.width = 112;
    this.height = 112;
    this.front = [];
    this.back = [];
    this.left = [];
    this.right = [];
    this.spinning = [];
    let root = "./images/squid/";
    for(let i=1;i<=52;i++){
      let img = new Image();
      img.src = root + "frame_" + i + ".jpg";
      this.front.push(img);

      if(i==1) {
        this.spinning.push(img);
      }


      img = new Image();
      img.src = root + "frame_" + i + ".jpg";
      this.back.push(img);

      if(i==21) {
        this.spinning.push(img);
      }

      img = new Image();
      img.src = root + "frame_" + i + ".jpg";
      this.left.push(img);

      if(i==33) {
        this.spinning.push(img);
      }

      img = new Image();
      img.src = root + "frame_" + i + ".jpg";
      this.right.push(img);

    }
    this.current = this.left;
    this.currentSpritePos = 0;
    this.numberOfImages = 52;

    this.IDLE = 123;
    this.WALK = 456;
    this.SPIN = 789;
    //this.notFound = 404;
    //this.SUFFER = 666;
    //this.HIGH_AF = 420;
    this.currentState = this.IDLE;
  }

  update(){
    if(frameCount % 3 == 0){
      this.currentSpritePos++;
      this.currentSpritePos %= this.numberOfImages;
    }

    if(this.currentState == this.IDLE) {
      //doing jack shit
      if( Math.random() < 0.01){
        if(Math.random() < 0.5){
          this.currentState = this.WALK;
          this.deltaX = Math.random()*4-2;
          this.deltaY = Math.random()*4-2;
          if(Math.abs(this.deltaX) > this.abs(this.deltaY)) {
            if (this.deltaX > 0) {
              this.current = this.right;
            }
            else {
              this.current = this.left;
            }
          }
          else {
            if(this.deltaY > 0){
              this.current = this.front;
            }
            else {
              this.current = this.back;
            }
          }
        }
      }
        else {
          this.currentState = this.SPIN;
          this.deltaX = 0;
          this.deltaY = 0;
        }
      }

    }

    else if(this.currentState == this.WALK) {
      this.x += this.deltaX;
      this.y += this.deltaY;

      if(this.x < 0){
        this.x = 0;
        this.deltaX = - this.deltaX;
      }

      if(this.x + this.width > canvas.width){
        this.x = canvas.width - this.width;
        this.deltaX = - this.deltaX;
      }

      if(this.y < 0){
        this.y = 0;
      }

      if(this.y + this.height > canvas.height){
        this.y = canvas.height - this.height;
        this.deltaY = - this.deltaY;
      }

    }

    else if(this.currentState == this.SPIN) {
      //kinda nothing i think idk
      this.current = this.spinning;
      this.deltaX = 0;
      this.deltaY = 0;
    }

    draw(){
      context.drawImage( this.current[this.currentSpritePos],this.x,this.y,this.width,this.height);
    }
  }


let sprite1 = new sprite();

let sprites = [];

sprites.push(sprite1);

requestAnimationFrame(animate);
let frameCount = 0;

function animate() {
  clearBackground();
  update();
  draw();
  frameCount++;
  requestAnimationFrame(animate);
}

function clearBackground() {
  context.fillStyle = "white";
  context.fillRect(0,0,canvas.width,canvas.height);
}

function update() {
  for(let go of sprites) {
    go.update();
  }
}

function draw() {
  for(let go of sprites) {
    go.draw();
  }
}

"use strict"
//Variables
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");



//classes
class Ellipse {
  constructor(x1,y1,rW,rH, rad1, eAng, rad2, inputNum){
    this.x1 = x1; this.rW = rW; this.rad1 = rad1;
    this.y1 = y1; this.rH = rH; this.rad2 = rad2;
    this.eAng = eAng; this.inputNum;

    this.subElli1 = undefined;

    this.color = `rgb( ${Math.random()*256},
                        ${Math.random()*256},
                        ${Math.random()*256} )`

    if(Math.abs(this.rW*2) <= this.x1) {
      this.subElli1 = new Ellipse (this.x1,this.y1,this.rW*2,this.rH*2,this.rad1,this.eAng,this.rad2, this.inputNum-1);
      console.log("winfo-recurs");

    }
  }

  draw() {
    if(this.subElli1) {
      this.subElli1.draw();

      context.fillStyle = this.color;

      context.beginPath();
        context.ellipse(this.x1,this.y1,this.rW,this.rH,this.rad1,this.eAng,this.rad2);
      context.closePath();

      context.fill();
      console.log("winfo-draw");
    }
  }
}

//functions
function update(){
  let input = document.getElementById('numberCheck');
  let number = input.value;
  let elli = new Ellipse(canvas.width/2,canvas.height/2,1,1,Math.PI/4,0,2*Math.PI, number);
  clearBackground();
  elli.draw();
  console.log("winfo");
}

function clearBackground() {
  context.fillStyle = "white";
  context.fillRect(0,0,canvas.width,canvas.height);
}

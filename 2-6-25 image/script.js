"use strict"

let context = document.getElementById("can").getContext("2d");

let imgIdle1 = new Image();
imgIdle1.src = "images/pika_Idle1.png";

let imgIdle2 = new Image();
imgIdle2.src = "images/pika_Idle2.png";

let currImagePos = 0;
let numbImgI1 = 4;
let numbImgI2 = 10;
let totNumImage = numbImgI1;
let frameCount = 0;
let currImg = imgIdle1;



// let angle = Math.atan2(mouseY - (imgY + imgH/2),
//                       mouseX - (imgX + imgW/2));
// context.translate(imgX + imgW/2, imgY + imgH/2);

// let flipIt = false;
// if(angle>Math.PI/2) {
//   angle -= Math.PI;
//   flipIt = true;
// } else if (angle < -Math.PI/2){
//   angle += Math.PI;
//   flipIt = true
// }



imgIdle1.onload = function() {
  requestAnimationFrame(animate);
}

function animate(){
  frameCount++;
  context.clearRect(0,0,can.width,can.height);
  let origY = 0;
  let origX = (currImagePos) * currImg.width/totNumImage;
  let origW = currImg.width/totNumImage;
  let origH = 70;

  let randNumb = getRandomInt(10);
  if(currImg == imgIdle1 && randNumb == 1){
    currImg = imgIdle2;
    totNumImage = numbImgI2;
  }

  context.drawImage(currImg, origX, origY, origW, origH,
                   0, 0, origW*2, origH*2);
  if(frameCount % 8 == 0) {
    currImagePos++;
    currImagePos %= totNumImage;
  }

  console.log(randNumb);


  requestAnimationFrame(animate);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

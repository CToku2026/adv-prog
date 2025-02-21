"use strict"

function sPgColorChange(){
  document.getElementById('special').style.color = document.getElementById("colorPicker").value;
}

function bgColorChange(){
  document.bgColor = document.getElementById("colorPicker").value;
}

function txtColorChange(){
  document.body.style.color = document.getElementById("colorPicker").value;
}

"use strict"

let input;

let display = document.getElementById("display");

let list = [];

function itemAdd(){
  input = document.getElementById("inputArea").value;
  list.push(input);
  console.log("added " + input);
  refresh();
}

function listSort(){
  list.sort((a,b) => a.length - b.length);
  refresh();
  console.log(list);
}

function refresh(){
  let text = "";
  let count = 1;
  list.forEach((item) => {
      text += ("<pre>" + count + ". " + item + "\n" + "</pre");
      count++;
  });

  display.innerHTML = text;
}

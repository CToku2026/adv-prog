"use strict"

function checkNumber(){
  let input = document.getElementById('numberToCheck');
  let number = input.value;
  if(isNaN(number)){
    alert("aint a number buddy");
    return;
  }

  let answer = "";

  if(isPrime(number)) {
    answer = number + " is prime";
  }
  else{
    answer = number + " isn't prime";
  }

  alert(answer);
}

function getListOfPrimes(){
  let input = Number(prompt("enter int:", "0"));
  let output = document.getElementById("primeList");
  let number = input;
  let i = 1;
  let base = 1;
  let answer = "";
  while(i <= number) {
    if(isPrime(base)) {
      answer += base + "<br>";
      i++;
    }
    base++;
  }
  output.innerHTML = answer;
  answer = "";
}

function isPrime(x) {
  let number = x;
  if(number <= 1){
    return false;
  }
  for(let i = 2; i < number; i++) {
    if(number % i == 0) {
      return false;
    }
  }
  return true;
}

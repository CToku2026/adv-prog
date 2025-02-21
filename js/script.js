function main(){
  let valueNum = '';
  for(let i = 1; i <= 100; i++) {
    output = document.getElementById('outputArea')

    if( i % 3 == 0 && i % 5 == 0){
      valueNum += "fizzBuzz<br>";
    }
    else if( i % 3 == 0){
      valueNum += "fizz<br>";
    }
    else if(i%5 == 0){
      valueNum += "buzz<br>"
    }
    else{
      valueNum += i + "<br>"
    }
  }
  output.innerHTML = valueNum;
}
main();

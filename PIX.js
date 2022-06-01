const hour = new Date().getHours(); 

if (hour < 23) {
  document.getElementById('cell1').style.backgroundColor = "red";
} else{
  document.getElementById('cell1').style.backgroundColor = "yellow";
}

if (hour < 12){
  console.log('Day')
} else if (hour<18){
  console.log('Afternoon')
} else {
  console.log('Night')
}

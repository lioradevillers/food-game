//const win = document.querySelector('#BonApp');
//document.querySelector('win').style.display = 'none';
const startGame = document.querySelector('.bye');
document.addEventListener('keypress', function(){
    document.querySelector('.bye').style.display = 'none';
    console.log("got here");
}
);
const Sushi = document.querySelector('#sushi'); 
Sushi.addEventListener('click', function() {
   document.querySelector('#BonApp').style.display = 'block';
   this.style.display = 'none';
   //mouse wins
});

let number = 30;
//execute a function EVERY 1000ms
const idInterval = setInterval(function () {
 number--;
 
  //number %= 5;
  if (number == 0) {
   clearInterval(idInterval);
    document.querySelector('#GameOver').style.display = 'block';
  }
}, 1000);
    


let posTop = 10;
let posLeft = 10;
document.addEventListener('keydown', function(event){
    console.log(event);
const key = event.code;
if (key == "ArrowDown") {
    posTop = posTop + 10;
}
if (key == "ArrowUp") {
    posTop = posTop -10;
}
if (key == "ArrowLeft") {
    posLeft = posLeft -10;
}
if (key == "ArrowRight") {
    posLeft = posLeft +10;
}
if (posTop > 90) {
    posTop = 0;
}
if (posLeft > 90) {
    posLeft = 0;
}
if (posTop < 0) {
    posTop = 90;
}
if (posLeft < 0) {
    posLeft = 90;
}

Sushi.style.top = posTop + '%';
Sushi.style.left = posLeft + '%';

}
);


//const playerOne = document.querySelector('.playerOne');
//.playerOne.addEventListener('keydown', function() {

//});
var randomNumber1 = Math.floor(Math.random() *6) + 1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() *6) + 1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , "images/dice" + randomNumber2 + ".png");

var score1 = score2 = 0;

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "🚩player 1 wins";
    score1 ++;
}
else if( randomNumber1 === randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
  score1 = score2 = +1;
}
else
{
   document.querySelector("h2").innerHTML = "player 2 wins🚩";
   score2 ++;
}

document.querySelector("h3").innerHTML = "\nplayer 1 Score = " +score1+ " ∆ player 2 Score = " +score2;

if(score1 > score2){
 document.querySelector("h4").innerHTML = "player 1 is the winner with score = " +score1;
} else if(score1 === score2){
document.querySelector("h4").innerHTML = "It's a draw!";
}
else
{
  document.querySelector("h4").innerHTML = "player 2 is the winner with score = " +score2;
}

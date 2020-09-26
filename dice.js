
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage="dice"+ randomnumber1 + ".png";
var randomimage="image/"+ randomdiceimage;
var random = document.querySelectorAll("img")[0];
random.setAttribute("src",randomimage);
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage2="dice"+ randomnumber2 + ".png";
var randomimage2="image/"+ randomdiceimage2;
var random = document.querySelectorAll("img")[1];
random.setAttribute("src",randomimage2);
if(randomnumber1>randomnumber2)
{
  document.querySelector("h2").innerHTML="PLAYER 1 WINS  &#128079";

}
else{
  document.querySelector("h2").innerHTML="PLAYER 2 WINS  &#128079";

}

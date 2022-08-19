var player1=Math.floor(Math.random()*6)+1;
var imagDice1="images/dice"+player1+".png"
var img1=document.querySelectorAll("img")[0]
img1.setAttribute("src",imagDice1)

var player2=Math.floor(Math.random()*6)+1;
var imagDice2="images/dice"+player2+".png"
var img2=document.querySelectorAll("img")[1]
img2.setAttribute("src",imagDice2)

if(player1>player2){
    document.querySelector("h1").innerHTML="player one is winer  ❤ 🏋 👏 "
    document.querySelector("h1").style.color="blue"
    document.write(player1+player2)
    document.querySelector("h2").innerText=player1+player2  


}
else if(player1<player2){
    document.querySelector("h1").innerHTML="player two  is winer ❤ 🏋 👏 "
    document.querySelector("h1").style.color="pink"
        document.write(player1+player2)
        document.querySelector("h2").innerText=player1+player2  



}
else { (player1==player2)
    document.querySelector("h1").innerHTML="لافائز 😫😫   "
    document.querySelector("h1").style.color="yellow"
    document.write(player1+player2)
    document.querySelector("h2").innerText="no things  😫" 

}

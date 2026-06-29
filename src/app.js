import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
   const suit = ["♦", "♥", "♠", "♣"]
   const value = [2, 3, 4, 5, 6, 7 , 8, 9, 10, "J", "Q", "K", "A"]
  
   function changeCard(){
    let suitRandom = Math.floor(Math.random() * suit.length)
    let valueRandom = Math.floor(Math.random() * value.length)

    let chosenSuit = suit[suitRandom]
    let chosenValue = value[valueRandom]
    
    let icon1 = document.getElementById("icon1")
    let icon2 = document.getElementById("icon2")
    let number = document.getElementById("number")

     if (chosenSuit == "♥" || chosenSuit == "♦"){
    icon1.style.color = "red"
    icon2.style.color = "red"
    number.style.color = "red"
    }else{
    icon1.style.color = "black"
    icon2.style.color = "black"
    number.style.color = "black"
  }
  
    icon1.innerHTML = chosenSuit
    icon2.innerHTML = chosenSuit
    number.innerHTML = chosenValue
  }
 
  

  changeCard()

  let buttonCard = document.getElementById("buttonCard")
  buttonCard.addEventListener("click", changeCard)

  let changeInterval = setInterval(changeCard, 10000)

  let input1 = document.getElementById("input1")
  let input2 = document.getElementById("input2")
  let pokerCard = document.getElementById("pokerCard")

  input1.addEventListener("input", function(){
    pokerCard.style.width = input1.value + "px"
  })
  input2.addEventListener("input", function(){
    pokerCard.style.width = input2.value +"px"
    })
};

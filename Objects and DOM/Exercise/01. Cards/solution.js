function solve() {
   let resultDiv = document.getElementById("result");
   let resultSpans = resultDiv.getElementsByTagName("span");

   let firstPlayerResult = resultSpans[0];
   let secondPlayerResult = resultSpans[2];

   let firstPlayerCard;
   let secondPlayerCard;

   let firstPlayerChoosedCard = false;
   let secondPlayerChoosedCard = false;

   let historyDiv = document.getElementById("history");

   let firstPlayerCardsDiv = document.getElementById("player1Div");
   firstPlayerCardsDiv.addEventListener("click", function(event){

      if (event.target &&
         event.target.nodeName == "IMG" &&
         firstPlayerChoosedCard === false) {

         firstPlayerCard = event.target;
         firstPlayerCard.src = "images/whiteCard.jpg";
         firstPlayerChoosedCard = true;

         let cardPoints = Number(firstPlayerCard.name);
         firstPlayerResult.textContent = cardPoints;

         if (secondPlayerChoosedCard === true) {
            
            firstPlayerChoosedCard = false;
            secondPlayerChoosedCard = false;

            if (Number(secondPlayerResult.textContent) > cardPoints) {

               secondPlayerCard.style.border = "2px solid green";
               firstPlayerCard.style.border = "2px solid red";

            } else {
               secondPlayerCard.style.border = "2px solid red";
               firstPlayerCard.style.border = "2px solid green";
            }

            let resultString = `[${firstPlayerCard.name} vs ${secondPlayerCard.name}] `;
            historyDiv.textContent += resultString;

         }
      }
   });

   let secondPlayerCardsDiv = document.getElementById("player2Div");
   secondPlayerCardsDiv.addEventListener("click", function(event){
      
      if (event.target &&
         event.target.nodeName == "IMG" &&
         secondPlayerChoosedCard === false) {

         secondPlayerCard = event.target;
         secondPlayerCard.src = "images/whiteCard.jpg";
         secondPlayerChoosedCard = true;

         let cardPoints = Number(secondPlayerCard.name);
         secondPlayerResult.textContent = cardPoints;

         if (firstPlayerChoosedCard === true) {
            
            firstPlayerChoosedCard = false;
            secondPlayerChoosedCard = false;

            if (Number(firstPlayerResult.textContent) > cardPoints) {

               firstPlayerCard.style.border = "2px solid green";
               secondPlayerCard.style.border = "2px solid red";

            } else {
               firstPlayerCard.style.border = "2px solid red";
               secondPlayerCard.style.border = "2px solid green";
            }
            
            let resultString = `[${firstPlayerCard.name} vs ${secondPlayerCard.name}] `;
            historyDiv.textContent += resultString;
         }
      }  
   });
}
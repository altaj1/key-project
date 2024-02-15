document.addEventListener("keyup",(event)=>{
   const pressKey = event.key;
   if( pressKey === 'Escape'){
    gameOver();
}
   const currentAlphabetElement = document.getElementById("showDisplye");
   const curreAlphabet = currentAlphabetElement.innerHTML;
   const expectedAlphabet = curreAlphabet.toLowerCase();

   if(pressKey == expectedAlphabet){
    console.log("you got a point");
    const currentScore = getTextElementById("current-score");
     const updateScore = currentScore + 1;
    setTextElementValueById("current-score", updateScore);
    continueGame();
    removeBackgtoundColoor(expectedAlphabet);
   }else{
    const currentLife = getTextElementById("current-life");
    const updatedScore = currentLife -1
    setTextElementValueById("current-life", updatedScore);

    if(updatedScore == 0){
        gameOver()
    }

   }
})
function enterGameFun(){
    addClass("landingPageID");
    addClass("final-score")
    removeClass("secendPageID");
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}
function continueGame (){
    const alphabet = gnaretRandomAlphabet();
    const findDispely = document.getElementById("showDisplye");
    findDispely.innerText = alphabet;
    setBackgtoundColoor(alphabet);   
}

function gameOver(){
    removeClass("final-score");
    addClass("secendPageID");
const lastScore = getTextElementById("current-score");
setTextElementValueById("last-score", lastScore)
const curreAlphabet = document.getElementById("showDisplye").innerText;

removeBackgtoundColoor(curreAlphabet);
}
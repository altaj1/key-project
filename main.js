document.addEventListener("keyup",(event)=>{
   const pressKey = event.key;
   const currentAlphabetElement = document.getElementById("showDisplye");
   const curreAlphabet = currentAlphabetElement.innerHTML;
   const expectedAlphabet = curreAlphabet.toLowerCase();

   if(pressKey == expectedAlphabet){
    console.log("you got a point");
    const currentScore = getTextElementById("current-score");
     const updateScore = currentScore + 1;
    setTextElementValueById("current-score", updateScore);
    continueGame()
    removeBackgtoundColoor(expectedAlphabet)
   }
   

})
function enterGameFun(){
    addClass("landingPageID");
    removeClass("secendPageID");
    continueGame()

}
function continueGame (){
    const alphabet = gnaretRandomAlphabet();
    const findDispely = document.getElementById("showDisplye");
    findDispely.innerText = alphabet;
    setBackgtoundColoor(alphabet);   
}
function enterGameFun(){
    addClass("landingPageID");
    removeClass("secendPageID");
    // continueGame()
      setInterval(function (){
        const id = continueGame();
        console.log(id)
        removeBackgtoundColoor(id)
      }, 2000);
}
function continueGame (){
    const alphabet = gnaretRandomAlphabet();
     console.log("this sdahdaikhr",alphabet)
    const findDispely = document.getElementById("showDisplye");
    
    findDispely.innerText = alphabet;
    setBackgtoundColoor(alphabet);
    return alphabet
   
}
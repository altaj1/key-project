function addClass (id){
    const findID = document.getElementById(id);
   const insertClass =  findID.classList.add("hidden");
   return insertClass
}

function removeClass (id){
const findID = document.getElementById(id)
const removeClass = findID.classList.remove("hidden")
return removeClass;
}

function gnaretRandomAlphabet(){
const alphabetString = "qwertyuiopasdfghjklzxcvbnm";
const alphabets = alphabetString.split("");
// gnaret random number
const randomNumber = Math.random() * 25;
const index  = Math.round(randomNumber);
const alphabet = alphabets[index];
return alphabet; 
}

function setBackgtoundColoor(id){
    const findID = document.getElementById(id.toString());
    const setColor = findID.style.backgroundColor = "blue";
}
function removeBackgtoundColoor(id){
    const findID = document.getElementById(id.toString());
    const setColor = findID.style.backgroundColor = "";
    return setColor;
}
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = "Come On";
let speed = 300/speedEl.value;

let characterID=1;

writeText();

function writeText(){
    textEl.innerText=text.slice(0,characterID);
    characterID++;
    if(characterID>text.length){
        characterID=1;
    }
    setTimeout(writeText,speed);
}

speedEl.addEventListener('input',(e)=>{
    speed = 300/e.target.value;
});
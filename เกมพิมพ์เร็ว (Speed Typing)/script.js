const wordEl=document.getElementById('word');
const textEl=document.getElementById('text');
const scoreEl=document.getElementById('score');
const timeEl=document.getElementById('time');

const btnLevelEl=document.getElementById('level-btn');
const settingsEl=document.getElementById('settings');
const levelFormEl=document.getElementById('level-form');
const levelEl=document.getElementById('level');
const gameoverEl=document.getElementById('gameover-container');

// const words=["Will you be my friend","go to the park","That door is open"];
const words=["friend","park","open"];

let randomText;
let score=0;
let time=10; //easy => 15 , medium => 10 , hard => 5
const saveMode=localStorage.getItem('mode') !==null ? localStorage.getItem('mode') :  'medium';

let level='medium';

const timeInterval=setInterval(updateTime,1000);

function getRandomWord (){
    return words[Math.floor(Math.random()*words.length)]
}

function displayWordToUI(){
    randomText=getRandomWord();
    timeEl.innerHTML=time;
    wordEl.innerHTML = randomText;
}
textEl.addEventListener('input',(e)=>{
    const inputText=e.target.value;

    if(inputText === randomText){
        if(saveMode =='easy'){
            time+=5;
        }else if(saveMode =='medium'){
            time+=3;
        }else{
            time+=2;
        }
        displayWordToUI();
        updatScore();
        e.target.value='';
    }
});

function updatScore(){
    score+=10;
    scoreEl.innerHTML=score;
}
function updateTime(){
    time--;
    timeEl.innerHTML=time;
    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver(){
    gameoverEl.innerHTML=`
    <h1>Good Bye</h1>
    <p>Total ${score} Score</p>
    <button onclick="location.reload()">Play Again</button>
    `;
    gameoverEl.style.display='flex';
}
btnLevelEl.addEventListener('click',()=>{
    settingsEl.classList.toggle('hide'); //  classList คือการดึง class hide ที่อยู่ใน settings มาใช้งาน
});

levelEl.addEventListener('change',(e)=>{
    level=e.target.value;
    localStorage.setItem("mode",level);
});

function startGame(){
    levelEl.value=saveMode;

    if(saveMode =='easy'){
        time=15;
    }else if(saveMode =='medium'){
        time=10;
    }else{
        time=5;
    }

    displayWordToUI();

}
startGame();
textEl.focus();

// const card=document.querySelector('.card');
const showBtn=document.getElementById('show');
const hiddenBtn=document.getElementById('btn-hidden');
const addContainer=document.getElementById('add-container');
const cardContainer=document.getElementById('card-container');
const nextBtn=document.getElementById('next');
const prevBtn=document.getElementById('prev');
const currentEl=document.getElementById('current');
const clearBtn=document.getElementById('clear');
const questionEl=document.getElementById('question');
const answerEl=document.getElementById('');
const addCard=document.getElementById('add-card');

let currentActiveCard=0;
let cardsEl=[]; //เก็บจำนวนคำถามทัั้งหมด
const cardData=getCardData();

function createCard(){
    cardData.forEach((data,index)=>{
        createSingleCard(data,index);
    });
}

function createSingleCard(data,index){
    const card=document.createElement('div');
    card.classList.add('card');

    if(index==0){
        card.classList.add('active');
    }

    card.innerHTML=`
            <div class="inner-card">
                <div class="inner-card-front">
                    <p>${data.question}</p>
                </div>
                <div class="inner-card-back">
                    <p>${data.answer}</p>
                </div>
            </div>  
    `;
    card.addEventListener('click',()=>card.classList.toggle("show-answer")); //toggle คือการสลับ class ในเวลาที่เรากด click 
    cardsEl.push(card);
    cardContainer.appendChild(card);
    updateCurretnQuestion();
}

function updateCurretnQuestion(){
    currentEl.innerText = `${currentActiveCard+1} / ${cardsEl.length}`;
}


createCard();
// card.addEventListener('click',()=>card.classList.toggle("show-answer")); 
showBtn.addEventListener('click',()=>addContainer.classList.add('show'));
hiddenBtn.addEventListener('click',()=>addContainer.classList.remove('show'));
nextBtn.addEventListener('click',()=>{

    cardsEl[currentActiveCard].className = 'card left';
    currentActiveCard = currentActiveCard+1;
    if(currentActiveCard>cardsEl.length-1){ // จำนวน 4 , 0,1,2,3
        currentActiveCard=carsdEl.length-1;
    }    
    cardsEl[currentActiveCard].className = 'card active';
    updateCurretnQuestion();
});

prevBtn.addEventListener('click',()=>{

    cardsEl[currentActiveCard].className = 'card right';
    currentActiveCard = currentActiveCard-1;
    if(currentActiveCard<0){ // จำนวน 4 , 0,1,2,3
        currentActiveCard=0; // กลับไปที่ Array ที่ 0 หรือข้อ ที่ 1 ในหน้า index
    }
    cardsEl[currentActiveCard].className = 'card active';
    updateCurretnQuestion();
});

addCard.addEventListener('click',()=>{
    const question=questionEl.value;
    const answer=answerEl.value;
    if(question.trim() && answer.trim()){
        const newCard={question,answer};
        createSingleCard(newCard);
        questionEl.value='';
        answerEl.value='';
        addContainer.classList.remove('show');
        cardData.push(newCard);
        setCardData(cardData);
    }
});


function setCardData(cards){
    localStorage.setItem('cards',JSON.stringify(cards));
    window.location.reload();
}

function getCardData(){
    const cards=JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards; // ถ้าไม่ได้เก็บข้อมูลก็จะได้ข้อมูลเปล่าๆ แต่ถ้าเป็น เท็จ ก็จะรีเทิร์น  cards กลับไป
}

clearBtn.addEventListener('click',()=>{
    localStorage.clear();
    cardContainer.innerHTML='';
    window.location.reload();
});




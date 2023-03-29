const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-content');
const slideLeft = document.querySelector('.left-content');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// จำนวนภาพ สไลด์
const slideLength = slideRight.querySelectorAll('div').length;

let activeIndex = 0;

upButton.addEventListener('click',()=>chaneImage("up"));

downButton.addEventListener('click',()=>chaneImage("down"));


// 0 - 3
function chaneImage(direction){
    const sildeHight = sliderContainer.clientHeight;
    if(direction === "up"){
        activeIndex++;
        if(activeIndex>slideLength-1){
            activeIndex = 0;
        }
    }else if(direction === "down"){
        activeIndex--;
        if(activeIndex<0){
            activeIndex = slideLength-1;
        }
    }
    slideLeft.style.transform=`translateY(-${activeIndex*sildeHight}px)`;
    slideRight.style.transform=`translateY(-${activeIndex*sildeHight}px)`;
    
    
}
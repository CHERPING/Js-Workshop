const switchToggle=document.querySelector('input[type="checkbox"]') //เลือกตัวแปร checkbox เพื่อทำการเปลี่ยน light mode เป็น dark mode
const toggleIcon=document.getElementById('toggle-icon'); //เรียกตัวแปร id:toggle-icon 
const nav=document.getElementById('nav'); // เรียก nav มาเพื่อแก้ไขใช้งาน
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');

function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkmode();
        imageSwitchmode('dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
        lightmode();
        imageSwitchmode('light');
    }
}
function darkmode(){
    toggleIcon.children[0].textContent="DarkMode"; // เปลี่ยน text โหมดกลางวันให้เป็นกลางคืน children[0] คือลูกคนแรกใน toggle-icon
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon'); // เปลี่ยนรูปโหมด icon ให้เป็นกลางคืนกลางวันสลับกัน replace คือการทับภาพให้เกิดภาพใหม่
    nav.style.backgroundColor='rgb(0 0 0 / 50% )';
}
function lightmode(){
    toggleIcon.children[0].textContent="DayMode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
}

function imageSwitchmode(mode){ // เรียก (mode) มาใช้งานเพื่อเปลี่ยนภาพในแต่ละโหมด
    image1.src=`img/freelancer_${mode}.svg`;
    image2.src=`img/game_${mode}.svg`;
    image3.src=`img/web_${mode}.svg`;
}

switchToggle.addEventListener('change',switchMode);
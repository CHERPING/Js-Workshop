const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');

const count=document.getElementById('count');
const total=document.getElementById('total');

const movieSelected=document.getElementById('movie');

let price=+movieSelected.value;


container.addEventListener('click',(e)=>{
    if (e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')) { // ใหเเลือกที่นั่ง seat ที่ไม่ใช้ seat occupied
        e.target.classList.toggle('selected') // ถ้าตรงที่นั่งว่างแล้วเราเลือกมันจะเปลี่ยนจาก seat เป็น seat selected
        updateSelected();
    }
})
movieSelected.addEventListener('change',(e)=>{
    price=+e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);
    updateSelected();
})

function updateSelected(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const countseats=selectedSeats.length;
    const seatsIndex=[...selectedSeats].map(seat=>[...seats].indexOf(seat));
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    count.innerText=countseats;
    total.innerText=countseats*price;
}

function setMovieData(movieIndex,moviePrice){
    localStorage.setItem("movieIndex",movieIndex);
    localStorage.setItem("moviePrice",moviePrice);
}

function showDatatoUI(){
    const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats"));
    const selectedmovieIndex=localStorage.getItem("movieIndex"); // ตำแหน่งหนังที่เราจองไว้
    seats.forEach((seat,index)=>{
        if(selectedSeats.indexOf(index)>-1){
            seat.classList.add('selected');
        }
    });
    if (selectedmovieIndex !=null){
        movieSelected.selectedIndex=selectedmovieIndex; 
     }
}

showDatatoUI();
updateSelected();
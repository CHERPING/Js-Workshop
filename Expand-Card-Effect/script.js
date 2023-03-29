// const containerEl=document.querySelector('container');
const item=document.querySelectorAll('.item');

item.forEach((item)=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
        
    });
})

function removeActive(){
    item.forEach((item)=>{
            item.classList.remove('active');
    });
    
}
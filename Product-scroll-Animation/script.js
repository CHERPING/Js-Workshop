const categories =document.querySelectorAll('.category');

window.addEventListener('scroll',showCaregory);

function showCaregory(){
    const calculateHeight = window.innerHeight-300;

    categories.forEach(category=>{
        const topPosition = category.getBoundingClientRect().top;
        if(topPosition<calculateHeight){
            category.classList.add('active');
        }else{
            category.classList.remove('active');
        }
    });
}


const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated_bg');
const animated_text = document.querySelectorAll('.animated_text');

setTimeout(showContent,2000);

function showContent(){
    header.innerHTML=`
    <img src="https://cdn.pixabay.com/photo/2018/01/24/15/08/live-3104077__340.jpg" alt="">
    `;
    title.innerHTML=`BED`;
    description.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore cumque obcaecati repellendus rem corrupti error aperiam corporis delectus beatae!`;
    profile_img.innerHTML=` <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="">` ;
    seller_name.innerHTML=`Pimtaya`;
    price.innerHTML=`Price 1000 $`;
    animated_bg.forEach(el=>el.classList.remove('animated_bg'));
    animated_text.forEach(el=>el.classList.remove('animated_text'));
}
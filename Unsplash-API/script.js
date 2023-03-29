const count=10;
const apiKey='kWTyYXvbF93cjAf89zkOIyromQEbr88OPKUdkCLYN9s';
const apiUrl=`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`; // GET API

const imageContainer=document.getElementById('img-container');
let photoArrays=[];
async function getPhotos(){
    try{ // การดักเพราะอาจจะเกิดการ error
        const response = await  fetch(apiUrl);
        photoArrays=await response.json();
        displayImage();        
    }catch(err){
        console.log(err);
    }

}

function displayImage(){
    photoArrays.forEach((photo)=>{
        const item=document.createElement('a'); // ดึง a เพื่อให้ links กับรูปภาพ
        item.setAttribute('href',photo.links.html);//  links เพื่อไปยังหน้าหลักของภาพ
        item.setAttribute('target','_blank');

        const img=document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('title',photo.alt_description);
        img.setAttribute('alt',photo.alt_description);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}
getPhotos();

window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){ // เช็คและคำนวณขนาดของรูปภาพ
            // ดึงภาพมาแสดงผล
            // alert("ดึงภาพมาแสดงผล");
            getPhotos();
            
    }
})
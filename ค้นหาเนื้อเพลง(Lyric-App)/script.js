const form=document.getElementById('form');
const search=document.getElementById('search');
const result=document.getElementById('result');
const more=document.getElementById('more');

const apiURL="https://api.lyrics.ovh/";

form.addEventListener('submit',e=>{
    e.preventDefault(); // เวลากดปุ่ม submit จะไม่มีการกระพริบหน้าจอ และ form จะไม่ทำการ reset ค่าถึงจะดึงข้อมูลมาได้
    const songtxt=search.value.trim();

    if(!songtxt){
        alert("Not Found");
    }else{
        searchLyrics(songtxt);
    }
    
});

async function searchLyrics(song){
   const res = await fetch(`${apiURL}suggest/${song}`); //res = respont
   const allSongs = await res.json();
   showData(allSongs); 
}

function showData(songs){
    result.innerHTML=`
        <ul class="songs">
        ${songs.data.map(song=>
            `<li>
            <span>
                <strong>${song.artist.name}</strong> - ${song.title}
            </span>
            <button class="btn"
                data-artist="${song.artist.name}"
                data-song="${song.title}"            
            >Lyrics</button>
            </li>`
            ).join("")}
        </uil>
    `;
    if(songs.next || song.prev){
        more.innerHTML=`
        ${songs.prev ? `<button class="btn" onclick="getMoreSong('${songs.prev}')"> Previous</button>` : ''}
        ${songs.next ? `<button class="btn" onclick="getMoreSong('${songs.next}')"> Next</button>` : ''}
        `;
    }else{
        more.innerHTML=""
    }
        
}

async function getMoreSong(songsUrl){
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${songsUrl}`); //res = respont
    const allSongs = await res.json();
    showData(allSongs); 
}


result.addEventListener('click',e=>{
    const clickEl=e.target;

    if(clickEl.tagName=="BUTTON"){
        const artist = clickEl.getAttribute('data-artist');
        const songName = clickEl.getAttribute('data-song');

        getLyrics(artist,songName);
    }
});

async function getLyrics(artist,songName){
        const res = await fetch(`${apiURL}v1/${artist}/${songName}`); //res = respont
        const lyrics = await res.json();
        console.log(lyrics);
        
        
}


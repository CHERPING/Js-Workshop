const music_container=document.getElementById('music-container');
const playBtn=document.getElementById('play')
const prevBtn=document.getElementById('prev')
const nextBtn=document.getElementById('next')
const audio=document.getElementById('audio')
const progress=document.getElementById('progress')
const progress_container=document.getElementById('progress-container')
const title=document.getElementById('title')
const cover=document.getElementById('cover')

const songs=["Contra","HavestMoon","Mario"];
let index=2;

function loadSongs(song){
    title.innerText=`${song}`;
    cover.src=`cover/${song}.jpg`;
    audio.src=`music/${song}.mp3`;    
}

loadSongs(songs[index])

playBtn.addEventListener('click',()=>{
    const isPlay=music_container.classList.contains('play'); // ทำเพื่อเช็๋ค ว่าเล่นเพลงอยู่หรือไม่

    if(isPlay){
        pauseSong(); //ถ้ามีการเล่นก็ต้องทำให้หยุุดเล่น
    }else{
        playSong(); //แต่ถ้าไม่เล่นก็ให้ทำการเล่น
    }
    
});

prevBtn.addEventListener('click',()=>{
    index--;
    if(index<0){
        index=songs.length-1;
    }
    loadSongs(songs[index]);
    playSong();
});

nextBtn.addEventListener('click',nextSong);

function nextSong(){
    index++;
    if(index>songs.length-1){
        index=0; //ถ้า index มากกว่าตำแหน่งสุดท้ายแล้วให้ย้ายไปที่ตำแหน่งแรก
    }
    loadSongs(songs[index]);
    playSong();
}

function playSong(){
    music_container.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    music_container.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    audio.pause();
}

audio.addEventListener('timeupdate',updateProgress);

function updateProgress(e){
    const {duration,currentTime} = e.srcElement;
    const progressPrecent=(currentTime/duration)*100; //duration = ความยาวของเพลง currentTime = เวลาปัจจุบัน

    progress.style.width=`${progressPrecent}%`;
}

progress_container.addEventListener('click',setProgress);

function setProgress(e){
    const width=this.clientWidth;
    const clickx=e.offsetX;
    const duration=audio.duration;
    audio.currentTime=(clickx/width)*duration;
}
 audio.addEventListener('ended',nextSong);
let city="quebec";
const apikey="20c33c3c5f7d74b1f3a4e018a31f3665";

const form=document.getElementById('form');
const search=document.getElementById('search');

function setData(){
    showWeather();
}

async function showWeather(){
    try {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const response = await fetch(url);
        const data=await response.json();
        showDataToUI(data);
    } catch (error) {
        console.log(error);
    }
}

function showDataToUI(data){
    const city=document.getElementById('city');
    const state=document.getElementById('state');
    const weather=document.getElementById('weather');
    const status=document.getElementById('status');
    const humidity=document.getElementById('humidity');
    const wind=document.getElementById('wind');

    city.innerText=data.name;
    state.innerText=data.sys.country;
    weather.children[0].innerHTML=calculate(parseInt(data.main.temp))+"&deg;";
    weather.children[1].innerHTML="Min : "+calculate(parseInt(data.main.temp_min))+"&deg;"+" Max : "+calculate(parseInt(data.main.temp_max))+"&deg;";

    // status
    status.innerText=data.weather[0].main;
    humidity.innerText="Humidity : "+data.main.humidity;
    wind.innerText="Wind : "+data.wind.speed;
}

function calculate(k){
    return k-273;
}

function callDataAPI(e){
    e.preventDefault();
    city=search.value;
    showWeather();
}


form.addEventListener('submit',callDataAPI);
setData();
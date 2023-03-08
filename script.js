//getWeather(navigator.geolocation.getCurrentPosition(currentPos=>[currentPos.coords.latitude,currentPos.coords.longitude]));

function ktf(k){
    return Math.floor(((k-273.15)*1.8)+32);
}

async function getWeather(loc="Queens",appId="3da34838b66f1f97a67092a0c4b5382a"){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${appId}`;
    if (typeof loc=="array"){
        let url=`https://api.openweathermap.org/data/2.5/weather?lat={${loc[0]}}&lon={${loc[1]}}&APPID=${appId}`;
    }
    let re = await fetch(url,{mode:'cors'});
    if (!re.ok) {
        console.log(re.status, re.statusText);
        document.getElementById("err").innerHTML=`${re.status} ${re.statusText}`;
    } else {
        document.getElementById("err").innerHTML="Everything's working!";
        await re.json().then(r=>printWeather(r));
    }
}

function printWeather(r){
    document.getElementById("city").innerHTML=`<strong>City</strong>: ${r.name}`;
    document.getElementById("temp").innerHTML=`<strong>Temperature</strong>: ${ktf(r.main.temp)}°F`;
    document.getElementById("feels_like").innerHTML=`<strong>Feels Like</strong>: ${ktf(r.main.feels_like)}°F`;
    document.getElementById("temp_min").innerHTML=`<strong>Minimum</strong>: ${ktf(r.main.temp_min)}°F`;
    document.getElementById("temp_max").innerHTML=`<strong>Maximum</strong>: ${ktf(r.main.temp_max)}°F`;
}

function submit(){
    getWeather(document.getElementById('loc').value);
}

getWeather();
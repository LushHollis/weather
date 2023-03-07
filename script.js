//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function ktf(k){
    return Math.floor(((k-273.15)*1.8)+32);
}

async function getWeather(loc="London",appId="3da34838b66f1f97a67092a0c4b5382a"){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${appId}`;
    let re = await fetch(url,{mode:'cors'});
    if (!re.ok) {
        console.log(re.status, re.statusText);
        document.getElementById("err").innerHTML=`${re.status} ${re.statusText}`;
    } else {
        document.getElementById("err").innerHTML="Loading...";
        await re.json().then(r=>printWeather(r));
    }

    //await re.then(r=>r.json()).then(r=>printWeather(r));
}

function printWeather(r){
    document.getElementById("temp").innerHTML=`<strong>Temperature</strong>: ${ktf(r.main.temp)}°F`;
    document.getElementById("feels_like").innerHTML=`<strong>Feels Like</strong>: ${ktf(r.main.feels_like)}°F`;
}

function submit(){
    getWeather(document.getElementById('loc').value);
}

getWeather();
function getTemp(loc="London",appId="3da34838b66f1f97a67092a0c4b5382a"){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${appId}`;
    fetch(url,{mode:'cors'}).then(r=>r.json()).then(r=>console.log(r));
}

getTemp("London");
getTemp("Queens");
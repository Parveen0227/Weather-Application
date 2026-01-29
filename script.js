function getWeather(){

let city=document.getElementById("city").value;

if(city===""){
alert("Please enter city");
return;
}

let apiKey="1f898d99e99e8a09dfcecc7afd3e9a29";

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
.then(res=>res.json())
.then(data=>{

if(data.cod=="404"){
alert("City not found");
return;
}

let temp=data.main.temp;
let weather=data.weather[0].main;

// Clothes suggestion
let clothes="";

if(temp>30){
clothes="Hot ☀ Wear cotton clothes.";
}
else if(temp>20){
clothes="Normal 🌤 Light clothes.";
}
else if(temp>10){
clothes="Cool 🌥 Full sleeves recommended.";
}
else{
clothes="Cold ❄ Wear jacket or warm clothes.";
}

if(weather=="Rain"){
clothes+=" Also carry umbrella ☔";
}

// 🌟 Daily Tip based on weather
let tip="";

if(weather=="Rain"){
tip="Better to stay indoors and avoid traveling.";
}
else if(temp>35){
tip="Drink plenty of water today.";
}
else if(temp<10){
tip="Keep yourself warm and avoid cold air.";
}
else{
tip="Have a great day!";
}

// 🌟 Air Quality Message (simple logic)
let airQuality="Normal";

if(temp>35){
airQuality="High pollution possible. Avoid long outdoor activities.";
}
else if(weather=="Rain"){
airQuality="Air is fresh after rain.";
}
else if(temp<10){
airQuality="Cold air, breathe carefully.";
}

// Display Result
document.getElementById("result").innerHTML=`
<h3>${data.name}</h3>
<p>Temperature: ${temp}°C</p>
<p>Weather: ${weather}</p>
<p><b>Clothes:</b> ${clothes}</p>
<p><b>Daily Tip:</b> ${tip}</p>
<p><b>Air Quality:</b> ${airQuality}</p>
`;

})
.catch(error=>{
alert("Something went wrong");
console.log(error);
})

}
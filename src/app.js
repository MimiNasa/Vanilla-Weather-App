
//look for ciy weather //


function searching (event){
  event.preventDefault();

  let Faranheit= document.querySelector("#fAH");
  Faranheit.setAttribute("style","font-size:16px");
  Faranheit.setAttribute("class","unactive");

  let Celcius= document.querySelector("#celcius");
  Celcius.setAttribute("style","font-size:30px");
  Celcius.setAttribute("class","active");


  let apiKey = "c56134558ca84ab1e7072449202b8614";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  let nowCity=document.querySelector("#citySearch");

  let info = `${apiUrl}${nowCity.value}&units=metric&appid=${apiKey}`;
  console.log(info);

  //api for forecast//
  let apiUrlFor = "https://api.openweathermap.org/data/2.5/forecast?q=";

  let infoForcast = `${apiUrlFor}${nowCity.value}&units=metric&appid=${apiKey}`;
  console.log(infoForcast); 
  

 axios.get(info).then(showPlace);
 axios.get(infoForcast).then(showForecastHourly);

 }

 // information of weather searched//

   function showPlace (response){
   
   let infoWeather= response.data.weather[0].main;
  
   let city= document.querySelector("#cityNow");
   city.innerHTML=`${response.data.name}`;

   let clima= document.querySelector("#temp");
   clima.innerHTML=`${Math.round(response.data.main.temp)}°`;

   let emoji=document.querySelector("#emojihoy");
     emoji.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
     console.log(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);   


  let status=document.querySelector("#descrip");
   status.innerHTML=`${infoWeather}`;

  let minTemp=document.querySelector("#min");
   minTemp.innerHTML=`${Math.round(response.data.main.temp_min)}°`;

  let maxTemp=document.querySelector("#max");
   maxTemp.innerHTML=` ${Math.round(response.data.main.temp_max)}°`;

  let speedW=document.querySelector("#speed");
  speedW.innerHTML=` ${response.data.wind.speed} km/h`;

  let humidW=document.querySelector("#humid");
  humidW.innerHTML=` ${(response.data.main.humidity)}%`;

  let feelsW=document.querySelector("#feels");
  feelsW.innerHTML=` ${Math.round(response.data.main.feels_like)}°`;

  //let day =document.querySelector("#dateNow");day.innerHTML=giveTime(response.data.dt*1000);

        }

 // function for daily forecast//

  function showForecastHourly (response){

   let iconUno= document.querySelector("#firstIC");
   iconUno.innerHTML=`${Math.round(response.data.list[0].main.temp)}° <br> <img src="http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let iconDos= document.querySelector("#secondIC");
   iconDos.innerHTML=`${Math.round(response.data.list[1].main.temp)}° <br> <img src="http://openweathermap.org/img/wn/${response.data.list[1].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let iconTre= document.querySelector("#thidIC");
   iconTre.innerHTML=`${Math.round(response.data.list[2].main.temp)}° <br> <img src="http://openweathermap.org/img/wn/${response.data.list[2].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let iconVier= document.querySelector("#fourIC");
   iconVier.innerHTML=`${Math.round(response.data.list[3].main.temp)}° <br> <img src="http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png" style="height: 40px"/>`;
   
   //Daily forecast//

  let daysTemI= document.querySelector("#weatherForecastUno");
  daysTemI.innerHTML=`${Math.round(response.data.list[1].main.temp_max)}°/ ${Math.round(response.data.list[8].main.temp_min)}°       <img src="http://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png" style="height: 40px"/>`;

   let daysTemII= document.querySelector("#weatherForecastDos");
  daysTemII.innerHTML=`${Math.round(response.data.list[9].main.temp_max)}°/ ${Math.round(response.data.list[16].main.temp_min)}°      <img src="http://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png" style="height: 40px"/>`;

  let daysTemIII= document.querySelector("#weatherForecastTre");
  daysTemIII.innerHTML=`${Math.round(response.data.list[17].main.temp_max)}°/ ${Math.round(response.data.list[24].main.temp_min)}°       <img src="http://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let daysTemIV= document.querySelector("#weatherForecastVier");
  daysTemIV.innerHTML=`${Math.round(response.data.list[25].main.temp_max)}°/ ${Math.round(response.data.list[32].main.temp_min)}°        <img src="http://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let daysTemV= document.querySelector("#weatherForecastQ");
  daysTemV.innerHTML=`${Math.round(response.data.list[33].main.temp_max)}°/ ${Math.round(response.data.list[39].main.temp_min)}°        <img src="http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  
    //let day =document.querySelector("#firstH");
  //day.innerHTML=giveTime(response.data.list[0].dt*1000);

  }

let currCity=document.querySelector("#lookforcity");
currCity.addEventListener("submit",searching);


//////////link for fareheim//////////

function changeFah(event){
event.preventDefault();

let Faranheit= document.querySelector("#fAH");
Faranheit.setAttribute("style","font-size:30px");
Faranheit.setAttribute("class","active");

let Celcius= document.querySelector("#celcius");
Celcius.setAttribute("style","font-size:16px");
Celcius.setAttribute("class","unactive");


let apiKey = "c56134558ca84ab1e7072449202b8614";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let nowCity=document.querySelector("#citySearch");

let info2 = `${apiUrl}${nowCity.value}&units=imperial&appid=${apiKey}`;

  //api for forecast Faranheit//
  let apiUrlFor = "https://api.openweathermap.org/data/2.5/forecast?q=";

  let infoForcastF = `${apiUrlFor}${nowCity.value}&units=imperial&appid=${apiKey}`;
  console.log(infoForcastF); 
  
  axios.get(info2).then(changeWeather);
  axios.get(infoForcastF).then(showForecastHourly);
}

function changeWeather(response){

    
  let tempElement= document.querySelector("#temp");
  tempElement.innerHTML=`${Math.round(response.data.main.temp)}°`;

  let minTempF=document.querySelector("#min");
   minTempF.innerHTML=`${Math.round(response.data.main.temp_min)}°`;

  let maxTempF=document.querySelector("#max");
   maxTempF.innerHTML=` ${Math.round(response.data.main.temp_max)}°`;

  let speedWF=document.querySelector("#speed");
  speedWF.innerHTML=` ${response.data.wind.speed} mph`;

 let feelsWF=document.querySelector("#feels");
  feelsWF.innerHTML=` ${Math.round(response.data.main.feels_like)}°`;

  }


let tempC=document.querySelector("#celcius");
tempC.addEventListener("click",searching);

let tempF=document.querySelector("#fAH");
tempF.addEventListener("click",changeFah);


//////////////// getting weather from current location//

function getLoc(event){
 event.preventDefault();

 navigator.geolocation.getCurrentPosition(showPosition);

}

function showPosition(position){

     let apiKey = "c56134558ca84ab1e7072449202b8614";
     let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

     let latitude= position.coords.latitude;
     let longitude= position.coords.longitude;
     let infoLoc = `${apiUrl}lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

     axios.get(infoLoc).then(nameCity);

     
    
    }

    function nameCity (response){

      let Faranheit= document.querySelector("#fAH");
      Faranheit.setAttribute("style","font-size:16px");
      Faranheit.setAttribute("class","unactive");

      let Celcius= document.querySelector("#celcius");
      Celcius.setAttribute("style","font-size:30px");
      Celcius.setAttribute("class","active");

      let nameLoc=`${response.data.name}`;
      console.log(nameLoc);

      let apiKey = "c56134558ca84ab1e7072449202b8614";
      let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
      let infoLoc = `${apiUrl}${nameLoc}&units=metric&appid=${apiKey}`;
       console.log(infoLoc);

        //api for forecast//
      let apiUrlFor = "https://api.openweathermap.org/data/2.5/forecast?q=";

      let infoForcastLoc = `${apiUrlFor}${nameLoc}&units=metric&appid=${apiKey}`;
      console.log(infoForcastLoc); 
  
      axios.get(infoForcastLoc).then(showForecastHourly);
      axios.get(infoLoc).then(showPlace);
     }
 

let place=document.querySelector("#currLoc");
place.addEventListener("click", getLoc); 

navigator.geolocation.getCurrentPosition(showPosition);
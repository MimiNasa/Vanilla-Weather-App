
//look for ciy weather //


function searching (event){
  event.preventDefault();

  let apiKey = "c56134558ca84ab1e7072449202b8614";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  let nowCity=document.querySelector("#citySearch");

  let info = `${apiUrl}${nowCity.value}&units=metric&appid=${apiKey}`;

  //api for forecast//
  let apiUrlFor = "https://api.openweathermap.org/data/2.5/forecast?q=";

  let infoForcast = `${apiUrlFor}${nowCity.value}&units=metric&appid=${apiKey}`;
  console.log(infoForcast); 
  

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
  daysTemI.innerHTML=`${Math.round(response.data.list[8].main.temp_max)}°/ ${Math.round(response.data.list[8].main.temp_min)}°`;

   let daysTemII= document.querySelector("#weatherForecastDos");
  daysTemII.innerHTML=`${Math.round(response.data.list[16].main.temp_max)}°/ ${Math.round(response.data.list[16].main.temp_min)}°`;

  let daysTemIII= document.querySelector("#weatherForecastTre");
  daysTemIII.innerHTML=`${Math.round(response.data.list[24].main.temp_max)}°/ ${Math.round(response.data.list[24].main.temp_min)}°`;
  
  let daysTemIV= document.querySelector("#weatherForecastVier");
  daysTemIV.innerHTML=`${Math.round(response.data.list[32].main.temp_max)}°/ ${Math.round(response.data.list[32].main.temp_min)}°`;
  
  let daysTemV= document.querySelector("#weatherForecastQ");
  daysTemV.innerHTML=`${Math.round(response.data.list[39].main.temp_max)}°/ ${Math.round(response.data.list[39].main.temp_min)}°`;
  
 
  // Emojinforecast//
   let emojiUno= document.querySelector("#emojiForecastI");
   emojiUno.innerHTML=`<img src="http://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let emojiDos= document.querySelector("#emojiForecastII");
   emojiDos.innerHTML=`<img src="http://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let emojiTre= document.querySelector("#emojiForecastIII");
   iconTre.innerHTML=`<img src="http://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let emojiVier= document.querySelector("#emojiForecastIV");
   emojiVier.innerHTML=`<img src="http://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png" style="height: 40px"/>`;
   
   let emojiV= document.querySelector("#emojiForecastV");
   emojiV.innerHTML=`<img src="http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
    //let day =document.querySelector("#firstH");
  //day.innerHTML=giveTime(response.data.list[0].dt*1000);

  }

 
 
 axios.get(info).then(showPlace);

 axios.get(infoForcast).then(showForecastHourly);

 }

let currCity=document.querySelector("#lookforcity");
currCity.addEventListener("submit",searching);

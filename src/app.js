
//get the current time and date//
 
 function giveTime(timestamp){

  let now= new Date(timestamp);
  

  let days=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  let today=days[now.getDay()];
  let hours= now.getHours();
  let minutes=now.getMinutes();

 if (hours<10){
    hours=`0${hours}`;
 }
 
 if (minutes<10){
    minutes=`0${minutes}`;
 }

  return `Last updated: ${today} ${hours}:${minutes}, ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;

  }

 
//get the forecast time //
 
 function giveTimeFH (timestamp){

  let now= new Date(timestamp);
  
  let hours= now.getHours();

 if (hours<10){
    hours=`0${hours}`;
 }

  return `${hours}:00`
}

//get the forecast date//
 
 function giveTimeF (timestamp){

  let now= new Date(timestamp);
  

  let days=["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat" ];
  let today=days[now.getDay()];

  return `${today} ${now.getDate()}/${now.getMonth()+1}`;
}

//look for ciy weather //


function searching (event){
  event.preventDefault();

  let Faranheit= document.querySelector("#fAH");
  Faranheit.setAttribute("style","font-size:16px");
  Faranheit.setAttribute("class","unactive");

  let Celcius= document.querySelector("#celcius");
  Celcius.setAttribute("style","font-size:30px");
  Celcius.setAttribute("class","active");

  let nowCity=document.querySelector("#citySearch");
  showPlace(nowCity.value);
 }

 // information of weather searched//

   function showPlace (response){

    
  let apiKey = "c56134558ca84ab1e7072449202b8614";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

  let info = `${apiUrl}${response}&units=metric&appid=${apiKey}`;

 axios.get(info).then(displayInformation);
 
 axios.get(info).then(changeWeather);

   //api for forecast//
  let apiUrlFor = "https://api.openweathermap.org/data/2.5/forecast?q=";

  let infoForcast = `${apiUrlFor}${response}&units=metric&appid=${apiKey}`;
 
  
    axios.get(infoForcast).then(showForecastHourly);

   }

  function displayInformation (response) {
   
   let city= document.querySelector("#cityNow");
   city.innerHTML=`${response.data.name}`;

   let speedW=document.querySelector("#speed");
  speedW.innerHTML=` ${response.data.wind.speed} km/h`;

  }

  //Function to display weather information//

  function changeWeather(response){

    console.log(response);
  
   let infoWeather= response.data.weather[0].main;
   let clima= document.querySelector("#temp");
   clima.innerHTML=`${Math.round(response.data.main.temp)}°`;

   let emoji=document.querySelector("#emojihoy");
     emoji.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
     
  let status=document.querySelector("#descrip");
   status.innerHTML=`${infoWeather}`;

  let minTemp=document.querySelector("#min");
   minTemp.innerHTML=`${Math.round(response.data.main.temp_min)}°`;

  let maxTemp=document.querySelector("#max");
   maxTemp.innerHTML=` ${Math.round(response.data.main.temp_max)}°`;

  let humidW=document.querySelector("#humid");
  humidW.innerHTML=` ${(response.data.main.humidity)}%`;

  let feelsW=document.querySelector("#feels");
  feelsW.innerHTML=` ${Math.round(response.data.main.feels_like)}°`;

  let day =document.querySelector("#dateNow");
  day.innerHTML=giveTime(response.data.dt*1000);

   }

 // function for daily forecast//

  function showForecastHourly (response){

    //Hourly forecast//

   let iconUno= document.querySelector("#firstIC");
   iconUno.innerHTML=`${Math.round(response.data.list[0].main.temp)}° <br> <img src="http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let iconDos= document.querySelector("#secondIC");
   iconDos.innerHTML=`${Math.round(response.data.list[1].main.temp)}° <br> <img src="http://openweathermap.org/img/wn/${response.data.list[1].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let iconTre= document.querySelector("#thidIC");
   iconTre.innerHTML=`${Math.round(response.data.list[2].main.temp)}° <br> <img src="http://openweathermap.org/img/wn/${response.data.list[2].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let iconVier= document.querySelector("#fourIC");
   iconVier.innerHTML=`${Math.round(response.data.list[3].main.temp)}° <br> <img src="http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png" style="height: 40px"/>`;
   
  let hourFI =document.querySelector("#firstH");
  hourFI.innerHTML=giveTimeFH(response.data.list[0].dt*1000);

  let hourFII =document.querySelector("#secondH");
  hourFII.innerHTML=giveTimeFH(response.data.list[1].dt*1000);

  let hourFIII =document.querySelector("#thirdH");
  hourFIII.innerHTML=giveTimeFH(response.data.list[2].dt*1000);

  let hourFIV =document.querySelector("#fourH");
  hourFIV.innerHTML=giveTimeFH(response.data.list[3].dt*1000);
   
   
   //Daily forecast//

   let dateFI =document.querySelector("#diaUno");
  dateFI.innerHTML=giveTimeF(response.data.list[2].dt*1000);

  let dateFII =document.querySelector("#diaDos");
  dateFII.innerHTML=giveTimeF(response.data.list[10].dt*1000);

  let dateFIII =document.querySelector("#diaTres");
  dateFIII.innerHTML=giveTimeF(response.data.list[18].dt*1000);

  let dateFIV =document.querySelector("#diaVier");
  dateFIV.innerHTML=giveTimeF(response.data.list[26].dt*1000);

  let dateFV =document.querySelector("#diaCink");
  dateFV.innerHTML=giveTimeF(response.data.list[34].dt*1000);
   
  let daysTemI= document.querySelector("#weatherForecastUno");
  daysTemI.innerHTML=`${Math.round(response.data.list[1].main.temp_max)}°/ ${Math.round(response.data.list[8].main.temp_min)}°            <img src="http://openweathermap.org/img/wn/${response.data.list[8].weather[0].icon}@2x.png" style="height: 40px"/>`;

   let daysTemII= document.querySelector("#weatherForecastDos");
  daysTemII.innerHTML=`${Math.round(response.data.list[9].main.temp_max)}°/ ${Math.round(response.data.list[16].main.temp_min)}°           <img src="http://openweathermap.org/img/wn/${response.data.list[16].weather[0].icon}@2x.png" style="height: 40px"/>`;

  let daysTemIII= document.querySelector("#weatherForecastTre");
  daysTemIII.innerHTML=`${Math.round(response.data.list[17].main.temp_max)}°/ ${Math.round(response.data.list[24].main.temp_min)}°            <img src="http://openweathermap.org/img/wn/${response.data.list[24].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let daysTemIV= document.querySelector("#weatherForecastVier");
  daysTemIV.innerHTML=`${Math.round(response.data.list[25].main.temp_max)}°/ ${Math.round(response.data.list[32].main.temp_min)}°             <img src="http://openweathermap.org/img/wn/${response.data.list[32].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  let daysTemV= document.querySelector("#weatherForecastQ");
  daysTemV.innerHTML=`${Math.round(response.data.list[33].main.temp_max)}°/ ${Math.round(response.data.list[39].main.temp_min)}°             <img src="http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png" style="height: 40px"/>`;
  
  
    //let day =document.querySelector("#firstH");
  //day.innerHTML=giveTime(response.data.list[0].dt*1000);

  }

let currCity=document.querySelector("#lookforcity");
currCity.addEventListener("submit",searching);


//////////link for fareheim//////////

function changeFah(event){
event.preventDefault();

let Faranheit= document.querySelector("#fAH");
Faranheit.setAttribute("style","font-size:24px");
Faranheit.setAttribute("class","active");

let Celcius= document.querySelector("#celcius");
Celcius.setAttribute("style","font-size:14px");
Celcius.setAttribute("class","unactive");

let nowCity=document.querySelector("#citySearch");
  displayFarenheim(nowCity.value);

}

function displayFarenheim (response) {
let apiKey = "c56134558ca84ab1e7072449202b8614";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

let info2 = `${apiUrl}${response}&units=imperial&appid=${apiKey}`;

axios.get(info2).then(changeWeather);
axios.get(info2).then(changeSpeed);

  //api for forecast Faranheit//
  let apiUrlFor = "https://api.openweathermap.org/data/2.5/forecast?q=";

  let infoForcastF = `${apiUrlFor}${response}&units=imperial&appid=${apiKey}`;
  axios.get(infoForcastF).then(showForecastHourly);
}
   
function changeSpeed (response){
  
  let speedWF=document.querySelector("#speed");
  speedWF.innerHTML=` ${response.data.wind.speed} mph`;

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
      Faranheit.setAttribute("style","font-size:14px");
      Faranheit.setAttribute("class","unactive");

      let Celcius= document.querySelector("#celcius");
      Celcius.setAttribute("style","font-size:24px");
      Celcius.setAttribute("class","active");

      let nameLoc =document.querySelector("citySearch")
      nameLoc=`${response.data.name}`;

      console.log(nameLoc);
      showPlace(nameLoc);
     }
 

let place=document.querySelector("#currLoc");
place.addEventListener("click", getLoc); 

 showPlace("Paris");
navigator.geolocation.getCurrentPosition(showPosition);
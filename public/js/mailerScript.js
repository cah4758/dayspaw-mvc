const appoint = require('../../controllers/api/appointmentRoutes');

function returnAppointments(){

    url = appoint.get(appointments)

    fetch(url)
    .then(response => {
        return response.json();
    })

}

console.log(returnAppointments());




// function getCurrentWeather(cityName, units){

//     var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units='+units+'&appid=8ddd48929a37115dc77fee6865b3699e';

//     fetch(url)
//     .then(response => {
//         return response.json();
//     })

//     .then(weather => {
//         //console.log("Whole thing ", weather);
//         //console.log("Current Temp " + weather.main.temp);

//        var date = moment().format('MM/DD/YYYY');

//         currentCity.innerHTML = weather.name+" ("+date+")";
//         currentPic.src= "http://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png";
//         currentTemp.innerHTML = "Temp: "+ weather.main.temp+"°F";
//         currentWind.innerHTML = "Wind Speed: "+weather.wind.speed+" MPH";
//         currentHumidity.innerHTML = "Humidity: "+weather.main.humidity+"%";
        
//         var lat = weather.coord.lat;
//         var lon = weather.coord.lon;

//         getAdvancedWeather(lat, lon);
//         save(weather.name);
//         loadSavedCities();

//     })
//  }


// function doSomething() {
//   console.log('Check appointment, send emails');

//   for(let i=0; i<8; i++){
//     if(1){

//     }

//   }

// }

// const getNotes = () =>
//   fetch('/api/appointments/1', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });


// console.log(getNotes()); 
  
// setInterval(doSomething, 10 * 1000);

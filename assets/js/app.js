// CURRENT WEATHER:
getWeatherData()
function getWeatherData() {
  console.log();

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Aalborg&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric`;

fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        receiveWeatherData(data);
      })
      .catch((error) => {
        console.error("error fetching data", error);
        // return null;
      });
}

function receiveWeatherData (weatherData) {
let temperature = weatherData.main.temp;
let weatherIcon = weatherData.weather[0].icon;
console.log(weatherData);


displayTemp(temperature);
displayIcon(weatherIcon);

}


function displayTemp(myTemp) {
    console.log(myTemp);

    const myCurrentWeather = document.getElementById('currentWeather');
    myCurrentWeather.innerText = `${myTemp}°C`;
}

function displayIcon(myIcon) {
  console.log(myIcon);
 
  const myCurrentIcon = document.getElementById('currentIcon');
  
    const weatherIconsList = {
    '01d': 'sunny.svg',
    '02d': 'sunny_cloudy.svg',
    '03d': '2clouds.svg',
    '04d': 'cloudy.svg'
  };

  const iconFileName = weatherIconsList[myIcon];

  if (iconFileName) {
    const iconPath = `assets/img/${iconFileName}`;
    myCurrentIcon.setAttribute('src', iconPath);
      } else {
    console.error("Weather icon not found");
    }
  }
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Inject to DOM
document.getElementById("currentDate").innerHTML = days[currentDate.getDay()] + ", " + months[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentYear;

// ToggleMenu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
// Create the five-day forecast
var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for (i = 1; i < 6; i++) {
    if ([currentDate.getDay() + (i)] <= 6) {
        document.getElementById("day" + i).innerHTML = day[currentDate.getDay() + (i)]
    } else {
        document.getElementById("day" + i).innerHTML = day[currentDate.getDay() + (i) - 7];
    }
}
const apiforecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=${unit}&appid=${apiKey}`;
fetch(apiforecastURL)
    .then((response) => response.json())
    .then((forecasts) => {
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 1);
        let dateString = getDateString(nextDate);
        let hourString = '18:00:00';
        let counter = 1;
        //Loop through results
        forecasts.list.forEach(
            (forecast) => {
                if (forecast.dt_txt.includes(dateString) && forecast.dt_txt.includes(hourString)) {
                    const currentImage = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
                    document.querySelector(`#forecastIcon${counter}`).setAttribute("src", currentImage);
                    document.querySelector(`#forecastIcon${counter}`).setAttribute("alt", forecast.weather[0].description);
                    const element = document.getElementById(`temp${counter}`);
                    element.innerHTML = Math.ceil(forecast.main.temp) + '&deg;F';
                    counter += 1;
                    nextDate.setDate(nextDate.getDate() + 1);
                    dateString = getDateString(nextDate);
                }
            }
        );
    });

function getDateString(date) {
    let dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return dateString;
}
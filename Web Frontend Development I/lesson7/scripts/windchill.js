let currentTemp = 41;
let windSpeed = 8;
let windChill = 0
let humidity = 50;
if (currentTemp < 50 && windSpeed > 3) {
    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
}
document.getElementById("currentTemp").innerHTML = currentTemp + '&deg;F';
document.getElementById("windSpeed").innerHTML = windSpeed + ' mph';
document.getElementById("humidity").innerHTML = windSpeed + '%';

if (windChill == 0) {
    document.getElementById("windChill").innerHTML = 'N/A'
} else {
    document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;F';
}
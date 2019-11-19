const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=83c8bac9c65d0a5a7bfe57cfe98d6486"
fetch(apiURL)
    .then((response) => response.json())
    .then((currentWeather) => {
        // Debug:
        console.log(currentWeather);
        document.querySelector('#current-temp').textContent = currentWeather.main.temp;

        const currentImage = 'https://openweathermap.org/img/w/' + currentWeather.weather[0].icon + '.png';
        // Insert the full path of the icon
        document.querySelector('#imagesrc').textContent = currentImage;
        // Insert the icon picture
        document.querySelector('#weather-icon').setAttribute('src', currentImage);
    });
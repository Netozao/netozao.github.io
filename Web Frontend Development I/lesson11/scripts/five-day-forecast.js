const apiforecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=${unit}&appid=${apiKey}`;
fetch(apiforecastURL)
    .then((response) => response.json())
    .then((forecasts) => {
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 1);
        let hourString = '18:00:00';
        let counter = 1;
        //Loop through results
        forecasts.list.forEach(
            (forecast) => {
                if (forecast.dt_txt.includes(hourString)) {

                    // Insert Day
                    let nextDate = new Date(forecast.dt_txt);
                    const DayElement = document.getElementById(`day${counter}`);
                    DayElement.innerHTML = days2[nextDate.getDay()];

                    // Insert Temp
                    const element = document.getElementById(`temp${counter}`);
                    element.innerHTML = Math.ceil(forecast.main.temp_max) + '&deg;F';

                    // Insert the Icon
                    const currentImage = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
                    document.querySelector(`#forecastIcon${counter}`).setAttribute("src", currentImage);
                    document.querySelector(`#forecastIcon${counter}`).setAttribute("alt", forecast.weather[0].description);

                    // Increment Variables
                    counter += 1;
                    nextDate.setDate(nextDate.getDate() + 1);
                }
            }
        );
    });
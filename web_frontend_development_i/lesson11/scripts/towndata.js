const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const towns = response.towns;
                    towns.forEach(
                        (towns) => {
                            if (towns.name.toLowerCase() === 'fish haven') {
                                // Fish Haven
                                document.querySelector('#fishFounded')
                                    .textContent = towns.yearFounded;
                                document.querySelector('#fishMotto')
                                    .textContent = towns.motto;
                                document.querySelector('#fishPopulation')
                                    .textContent = towns.currentPopulation;
                                document.querySelector('#fishAnnualRain')
                                    .textContent = towns.averageRainfall;
                            } else if (towns.name.toLowerCase() === 'preston') {
                                // Preston
                                document.querySelector('#prestonFounded')
                                    .textContent = towns.yearFounded;
                                document.querySelector('#prestonMotto')
                                    .textContent = towns.motto;
                                document.querySelector('#prestonPopulation')
                                    .textContent = towns.currentPopulation;
                                document.querySelector('#prestonAnnualRain')
                                    .textContent = towns.averageRainfall;
                            } else if (towns.name.toLowerCase() === 'soda springs') {
                                // Soda Springs
                                document.querySelector('#sodaFounded')
                                    .textContent = towns.yearFounded;
                                document.querySelector('#sodaMotto')
                                    .textContent = towns.motto;
                                document.querySelector('#sodaPopulation')
                                    .textContent = towns.currentPopulation;
                                document.querySelector('#sodaAnnualRain')
                                    .textContent = towns.averageRainfall;
                            }
                        }
                    )
                }
            )
    })
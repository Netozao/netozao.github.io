const requestURL = "json/templeData.json";

fetch(requestURL).then(response => {
    response.json().then(response => {
        const temples = response.temples;
        temples.forEach(
            (temples) => {
                // Add Name of the temple
                let article = document.createElement('article');
                let h1 = document.createElement('h1');
                h1.textContent = temples.NameOfTemple;
                article.appendChild(h1);
                // Add Image of temple
                let imageDiv = document.createElement('div');
                let image = document.createElement('img');
                image.setAttribute('class', 'imageTemple');
                image.setAttribute('src', temples.Images);
                image.setAttribute('alt', 'Picture of the ' + temples.NameOfTemple);
                imageDiv.appendChild(image);
                article.appendChild(imageDiv);
                // Add Temperature
                let h2 = document.createElement('h2');
                let cityID = temples.templeID;
                let apiweatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=${unit}&appid=${apiKey}`;
                fetch(apiweatherURL)
                    .then((response) => response.json())
                    .then((currentWeather) => {
                        h2.textContent = 'Current Temperature: ' + Math.round(currentWeather.main.temp) + 'ºF';
                    });
                article.appendChild(h2);
                // Add Address
                let h3 = document.createElement('h3');
                h3.textContent = 'Address: ' +
                    temples.Address.Street +
                    ', ' + temples.Address.city +
                    ' (' + temples.Address.state +
                    '), ZIP: ' + temples.Address.zipcode;
                article.appendChild(h3);
                // Add email of the temple
                let h3_0 = document.createElement('h3');
                h3_0.textContent = 'E-mail: ' + temples.email;
                article.appendChild(h3_0);
                // Add Phone number of the temple
                let h3_1 = document.createElement('h3');
                h3_1.textContent = 'Phone Number: ' + temples.telephone.phone;
                article.appendChild(h3_1);
                // Add Sections of the temple
                let divGrid = document.createElement('div');
                divGrid.setAttribute('class', 'divGrid');




                article.appendChild(divGrid);
                let h3_2 = document.createElement('h3');
                h3_2.textContent = 'Sessions:';
                h3_2.setAttribute('class', 'h3Section');
                divGrid.appendChild(h3_2);

                let lista = document.createElement('ul');
                lista.setAttribute('class', 'ulSection');
                for (let i = 0; i < temples.session.length; i++) {
                    let sessions = document.createElement('li');
                    sessions.setAttribute('class', 'liSection');
                    sessions.textContent = temples.session[i];
                    lista.appendChild(sessions);
                    divGrid.appendChild(lista);
                }
                // Add temple closures
                let h3_3 = document.createElement('h3');
                h3_3.textContent = 'Temple Closures:';
                h3_3.setAttribute('class', 'h3Closure');
                divGrid.appendChild(h3_3);

                let lista2 = document.createElement('ul');
                lista2.setAttribute('class', 'ulClosure');
                for (let i = 0; i < temples.closure.length; i++) {
                    let closure = document.createElement('li');
                    closure.setAttribute('class', 'liClosure');
                    closure.textContent = temples.closure[i];
                    lista2.appendChild(closure);
                    divGrid.appendChild(lista2);
                }
                article.appendChild(divGrid);
                // Add article to the DOM
                document.querySelector('section.temples').appendChild(article);
            });
    });
});
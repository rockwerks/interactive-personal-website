

function searchEventHandler() {
 
    const weatherUpdate = document.getElementById('weatherUpdate').value;

    fetch(`http://api.weatherapi.com/v1/current.json?key=b45d2cedb8514a6392a200742250604&q=${weatherUpdate}`)
        .then(response => response.json())
        .then(data => {
            const searchResults = document.getElementById('searchResults');
            searchResults.innerHTML = `
            <h5>${data.location.name}, ${data.location.country}</h5>
            <p>Temperature: ${data.current.temp_c}°C / ${data.current.temp_f}°F</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="Weather icon">
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind: ${data.current.wind_kph} km/h</p>
        `;
        })
}


document.getElementById('searchBtn').addEventListener("click", searchEventHandler)
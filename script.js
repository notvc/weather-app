const api_key = "weather api key to use"
const useLocationId = document.getElementById('location-id');

useLocationId.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);
            fetchData(latitude, longitude);
        },
        (error) => {
            console.error("Location denied:", error.message);
        }
    );
});

async function fetchData(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m&temperature_unit=celsius`;

    const res = await fetch(url);
    const data = await res.json();

    const { temperature_2m, windspeed_10m, relative_humidity_2m } = data.current;

    console.log(`Temp: ${temperature_2m}°C`);
    console.log(`Wind: ${windspeed_10m} km/h`);
    console.log(`Humidity: ${relative_humidity_2m}%`);
}


document.getElementById("search-btn").addEventListener('click', () => {
    const city = document.getElementById("city-input").ariaValueMax.trim();

    if (!city) return;

    fetch('link to weather api website')
    .then((res) => res.json)
    .then((data) => {
        console.log(data);
        //data.nam
    })
})

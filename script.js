const useLocationId = document.getElementById("location-id");
const weathericon = document.getElementById('weather-icon')
const searchBtn = document.getElementById("search-btn")

let lon = ""
let lat = ""

useLocationId.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const {latitude, longitude} = position.coords;
            lon = longitude
            lat = latitude
            console.log(latitude,longitude),
            weathericon.innerHTML = ""
            fetchData(longitude, longitude);
        },
        (error) => {
            console.error("Location denied", error);
        }
);
})

document.body.addEventListener('dblclick', () => {
    document.documentElement.classList.toggle("dark")
})

const cityinput = document.getElementById("city-input")
let inputValue = ""
let timeout;
cityinput.addEventListener("input",
    (e) => {
        clearTimeout(timeout)
        timeout = setTimeout(
            async () => {
                inputValue = e.target.value.trim()

                console.log(inputValue)

                await getlonlan();
        }, 1000)
    }
)

async function getlonlan() {
    const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(inputValue)}`
    );

    const data = await res.json();

    if (data.length > 0) {
        lat = data[0].lat
        lon = data[0].lon
        console.log(lat, lon);
        await fetchData(lat, lon);
    }
}

searchBtn.addEventListener("click",
    async () =>{
        if (!inputValue) return;

        await getlonlan();
    }
)

function getDayorNight(){
        const hours = new Date().getHours()
        if (hours >= 6) {
            return 'day'
        }
        else if (hours >= 19) {
            return 'night'
        }
}

function getWeatherDescription(code){
    const t = getDayorNight()
    const base = "./animated/fill"
    const codes = {
        0:  { label: 'Clear Sky',                 img: `${base}/clear-${t}.svg` },
        1:  { label: 'Mainly Clear',              img: `${base}/mostly-clear-${t}.svg` },
        2:  { label: 'Partly Cloudy',             img: `${base}/partly-cloudy-${t}.svg` },
        3:  { label: 'Overcast',                  img: `${base}/overcast.svg` },
        45: { label: 'Foggy',                     img: `${base}/fog-${t}.svg` },
        48: { label: 'Icy Fog',                   img: `${base}/fog.svg` },
        51: { label: 'Light Drizzle',             img: `${base}/partly-cloudy-${t}-drizzle.svg` },
        53: { label: 'Drizzle',                   img: `${base}/drizzle.svg` },
        55: { label: 'Heavy Drizzle',             img: `${base}/drizzle.svg` },
        61: { label: 'Light Rain',                img: `${base}/partly-cloudy-${t}-rain.svg` },
        63: { label: 'Rain',                      img: `${base}/rain.svg` },
        65: { label: 'Heavy Rain',                img: `${base}/overcast-rain.svg` },
        71: { label: 'Light Snow',                img: `${base}/partly-cloudy-${t}-snow.svg` },
        73: { label: 'Snow',                      img: `${base}/snow.svg` },
        75: { label: 'Heavy Snow',                img: `${base}/overcast-snow.svg` },
        80: { label: 'Light Showers',             img: `${base}/partly-cloudy-${t}-rain.svg` },
        81: { label: 'Showers',                   img: `${base}/rain.svg` },
        82: { label: 'Heavy Showers',             img: `${base}/overcast-rain.svg` },
        95: { label: 'Thunderstorm',              img: `${base}/thunderstorms.svg` },
        96: { label: 'Thunderstorm + Hail',       img: `${base}/thunderstorms-rain.svg` },
        99: { label: 'Thunderstorm + Heavy Hail', img: `${base}/thunderstorms-rain.svg` },
    };
    return codes[code] || {label: 'unknown', img:`${base}/not-available.svg`}
}

async function fetchData() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m&temperature_unit=celsius`;

    const res = await fetch(url);
    const data = await res.json()

    const {temperature_2m,weathercode,windspeed_10m,relative_humidity_2m} = data.current;

    const {label, img} = getWeatherDescription(weathercode);
    const temperature = document.getElementById('temperature')
    const humidity = document.getElementById('humidity')
    const windspeed = document.getElementById('wind-speed')
    const cityname = document.getElementById('city-name')
    await getCity(lat, lon)

    async function getCity() {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

        console.log(url)
        const res = await fetch(url);
        const data = await res.json();

        console.log(data)
        const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.district ||
            data.address.county ||
            data.address.state;

        console.log(city);
        cityname.textContent = `${city}`
    }

    temperature.textContent = `${temperature_2m}°C`
    humidity.textContent = `${relative_humidity_2m}%`
    windspeed.textContent = `${windspeed_10m} km/h`
    console.log(temperature_2m,weathercode,windspeed_10m,relative_humidity_2m)
    weathericon.innerHTML = `<img src="${img}" alt="${label}" height="100" width="100">`
    const p = document.createElement("p")
    p.textContent = label
    weathericon.appendChild(p)
}
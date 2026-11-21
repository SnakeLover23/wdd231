const url = "https://api.openweathermap.org/data/2.5/forecast?lat=40.17&lon=-111.61&appid=023fd76723807734cccea00c3b1b9a5b&units=imperial&cnt=4";



async function apiFetch(api) {
    try{
        const response = await fetch(api);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(await response.text());
        };
    } catch (error) {
        console.error(error);
    };
};

const card = document.querySelector("#weather");

export default async function popWeather() {
    card.innerHTML = "";
    let data = await apiFetch(url);
    const title = document.createElement("h2");
    const currentTemp = document.createElement("p");
    const description = document.createElement("p");
    const forcast = document.createElement("section");
    const forcastTitle = document.createElement("h3");
    const temp1 = document.createElement("p");
    const temp2 = document.createElement("p");
    const temp3 = document.createElement("p");

    title.textContent = "Weather";

    currentTemp.textContent = `${data.list[0].main.temp}°F`;

    description.textContent = data.list[0].weather[0].description;

    forcast.setAttribute("class", "forcast");

    forcastTitle.textContent = "Three day forcast";

    temp1.textContent = `${data.list[1].main.temp}°F`;
    temp2.textContent = `${data.list[2].main.temp}°F`;
    temp3.textContent = `${data.list[3].main.temp}°F`;

    forcast.appendChild(forcastTitle);
    forcast.appendChild(temp1);
    forcast.appendChild(temp2);
    forcast.appendChild(temp3);

    card.appendChild(title);
    card.appendChild(currentTemp);
    card.appendChild(description);
    card.appendChild(forcast);
};
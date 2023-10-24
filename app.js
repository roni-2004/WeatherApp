function updateDOM(data) {
    const weatherData = data;
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    console.log(temp);
    console.log(description);
    const tempbox = document.getElementById("tempbox");
    tempbox.innerText = temp;
    const desbox = document.getElementById("desbox");
    desbox.innerText = description;
} 


const button = document.getElementById("checkbutton");
button.addEventListener("click", fetchDetails);
function fetchDetails(){
    const query = document.getElementById("cityInput").value;
    const apiKey = "bfe673a5c6691084d62c93655402e327";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q=" + query + "&units=metric";
    
    fetch(url)
    .then(response => response.json())
    .then(data => updateDOM(data));
} 
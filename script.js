//SELECTORS

let city = document.querySelector(".city")
let Temperature = document.querySelector(".show-temp")
let temperatureDescription = document.querySelector(".description")
let tempHumidity = document.querySelector(".humidity")
let wind  = document.querySelector(".wind")
let input = document.getElementById("search")
let submitBtn = document.querySelector("#btn")
let weatherIcon = document.querySelector(".icon")
let degreeCelcius = true


//EVENT LISTENERS
submitBtn.addEventListener('click',getWeather)

    


//FUNCTIONS
function getWeather(){
    
    
    
    if (input.value!=="")
    { const api = `http://api.weatherapi.com/v1/forecast.json?key=%20fa3cb25e33144eef96595904220802&q=${input.value}&days=1&aqi=no&alerts=no`
    fetch(api)
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        const {temp_c , temp_f , wind_kph ,humidity , condition ,icon } = data.current
        const {name} = data.location
        //console.log(condition.icon);
        city.textContent ="Weather in " + name
        Temperature.textContent = temp_c + "°C"

        temperatureDescription.textContent = condition.text
        weatherIcon.src = condition.icon
        tempHumidity.textContent = "Humidity : " + humidity + "%"
        wind.textContent = "Wind Speed :" +  wind_kph + "km/h"
        document.querySelector(".weather").classList.remove(".loading")

        Temperature.addEventListener('click',() =>{
            if(degreeCelcius === true){
                Temperature.textContent = temp_f + "°F"
                degreeCelcius = false
                
            }
            else{
                Temperature.textContent = temp_c + "°C"
                degreeCelcius = true
            }
    })
    })
    
    }else{
       alert("Enter a City Name first ")
    }


    
}


    

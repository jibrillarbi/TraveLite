import { supabase } from './supabase-client.js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
function CodeToWeather(code){
    if ([1000].includes(code)) {
       return "Sunny";
    } 
    else if ([1003, 1006, 1009].includes(code)) {
       return "Cloudy";
    } 
    else if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(code)) {
       return "Rain";
    } 
    else if ([1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(code)) {
       return "Snow";
    } 
    else if ([1087, 1273, 1276, 1279, 1282].includes(code)) {
       return "Thunderstorm";
    } 
    else if ([1069, 1072, 1147, 1168, 1171, 1198, 1201, 1204, 1207, 1237, 1249, 1252, 1261, 1264].includes(code)) {
       return "Icy";
    } 
    else if ([1030, 1135, 1147].includes(code)) {
       return "Fog";
    } 
    else {
       return "Unknown";
    }    
}


async function fetchWeatherDataFuture(city,date) {
    //get weather data  |||| date in yyyy-mm-dd format
    //dt parameter should be in yyyy-MM-dd format and between 14 days 
    // and 300 days from today in the future.
    let data = await fetch(`http://api.weatherapi.com/v1/future.json?key=${process.env.WEATHER_API}&q=${city}&dt=${date}`)
    .then(response => response.json())
    let weather_data = data['forecast']['forecastday'][0]['day'];
    let weather= CodeToWeather(weather_data['condition']['code']);
    let temp= weather_data['avgtemp_c'].toFixed(0); 
    addWeatherData(city,date, temp, weather,1);
    console.log(city,date, temp,weather,1);
    return;
    }

async function fetchWeatherData(city,date)
{
    let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API}&q=${city}&dt=${date}`)
    .then(response => response.json())
    
    console.log('\n\n\n');
    data=data['forecast']['forecastday'][0]['day'];
    let temp= data['avgtemp_c'].toFixed(0);
    let weather= CodeToWeather(data['condition']['code']);
    addWeatherData(city,date, temp,weather,0);
    console.log(city,date, temp,weather,0);
    return{
        temp: temp,
        weather: weather,
        date: date,
        city: city
    };
}

async function addWeatherData(city, date, temp, weather,type) {
    const error = await supabase.from("weather_city").insert(
        [{
        city_name: city,
        weather_date : date, 
        temp:temp,
        weather_cond : weather,
        isFuture: type
    }]);
    if (error) {
        console.error("Error adding weather data:", error);
        return;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//fetchWeatherDataFuture('London','2025-09-01'); 
//fetchWeatherData('London','2025-08-19');
export {fetchWeatherDataFuture,fetchWeatherData};

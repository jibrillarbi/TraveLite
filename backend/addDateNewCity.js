import { fetchWeatherData, fetchWeatherDataFuture } from './updateWeather.js';
import { supabase } from "./supabase-client.js";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//function that adds weather data for the next 300 days for a given city 
async function addFutureWeatherDate(city) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const formattedDate = date.toISOString().split('T')[0];
    console.log("Formatted date:", formattedDate);

    //adds for 14 days 
    for (let i = 0; i < 14; i++) {
        const futureDate = new Date(date);
        futureDate.setDate(futureDate.getDate() + i);
        const futureFormattedDate = futureDate.toISOString().split('T')[0];
        console.log("Future date:", futureFormattedDate);

        try {
            await fetchWeatherData(city, futureFormattedDate);
            console.log(`Weather data for ${city} on ${futureFormattedDate} added successfully.`);
        } catch (error) {
            console.error(`Error adding weather data for ${city} on ${futureFormattedDate}:`, error);
        }
        
        await sleep(2000); 
    }
    //adds for 300 days
    for (let i = 15; i < 300; i++) {
        const futureDate = new Date(date);
        futureDate.setDate(futureDate.getDate() + i);
        const futureFormattedDate = futureDate.toISOString().split('T')[0];
        console.log("Future date:", futureFormattedDate);
        
        try {
            await fetchWeatherDataFuture(city, futureFormattedDate);
            console.log(`Future weather data for ${city} on ${futureFormattedDate} added successfully.`);
        } catch (error) {
            console.error(`Error adding future weather data for ${city} on ${futureFormattedDate}:`, error);
        }
        
        await sleep(2000); 
    }
    
    return true;
}

//a function that adds weather data for all the supabase cities for the next 300 days
async function addWeatherDataAllCities() {
    const {data, error}= await supabase.from('cities')
        .select('city_name');
    
    data.map(async (city) => {
        const cityName = city.city_name;
        try
        {
            await addFutureWeatherDate(cityName);
        } catch (error) {
            console.error(`Error adding weather data for ${cityName}:`, error);
        }
        await sleep(1000);
    });
    console.log(data);
    return ;
}
addWeatherDataAllCities();
export default addFutureWeatherDate;



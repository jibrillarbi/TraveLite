import { fetchWeatherData, fetchWeatherDataFuture } from './updateWeather.js';
import { supabase } from "./supabase-client.js";

//function that updates all cities weather data with day +14 and day +300
async function updateDateCity() {
    const {data, error}= await supabase.from('cities')
        .select('city_name');
    console.log ("Cities:", data);
    
    const today = new Date();
    const weeks = new Date();
    const year = new Date();
    weeks.setDate(today.getDate()+14);
    year.setDate(today.getDate()+300);

    const Form_weeks = weeks.toISOString().split('T')[0];
    const Form_year = year.toISOString().split('T')[0];  
    data.map(async (city) => {
        const cityName = city.city_name;
        try
        {
            await fetchWeatherData(cityName, Form_weeks);
            await fetchWeatherDataFuture(cityName, Form_year);
        } catch (error) {
            console.error(`Error updating weather data for ${cityName}:`, error);
        }
        
    });

    return ;
}
updateDateCity();
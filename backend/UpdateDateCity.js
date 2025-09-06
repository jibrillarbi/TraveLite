import { fetchWeatherData, fetchWeatherDataFuture } from './updateWeather.js';
import { supabase } from "./supabase-client.js";
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
    console.log("Today:", today);
    console.log("Weeks:", Form_weeks);
    console.log("Year:", Form_year);
    data.map(async (city) => {
        const cityName = city.city_name;
        fetchWeatherData(cityName, Form_weeks);
        fetchWeatherDataFuture(cityName, Form_year);
        
    });

    return ;
}
updateDateCity();
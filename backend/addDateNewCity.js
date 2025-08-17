import { fetchWeatherData, fetchWeatherDataFuture } from './updateWeather.js';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addFutureWeatherDate(city) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const formattedDate = date.toISOString().split('T')[0];
    console.log("Formatted date:", formattedDate);

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

addFutureWeatherDate("London");



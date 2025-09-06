import { supabase } from './supabase-client.js';
import dotenv from 'dotenv';
dotenv.config();

async function updatePosition(city) {
  let lon;
  let lat;
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.OPEN_WEATHER_API}`);
  const json = await response.json();
  lat = json[0]["lat"];
  lon = json[0]["lon"];

  const { error } = await supabase.from('cities')
  .update({ lon: lon , lat: lat })
  .eq('city_name', city)
  if (error) {
    console.error("Error updating position:", error);
    return;
  }
}
export default updatePosition;
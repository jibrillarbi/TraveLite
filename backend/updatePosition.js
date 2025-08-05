import { supabase } from './supabase-client.js';
async function updatePosition(city) {
  let lon;
  let lat;
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=b47f4b528fb134aba9834730f88dd890`);
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
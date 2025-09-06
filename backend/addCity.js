import {supabase} from "./supabase-client.js";
import updatePosition from "./updatePosition.js";

async function addCity(city) {
    const {error} = await supabase.from("cities").insert([{city_name: city}]).single();
    if (error) {
        console.error("Error adding city:", error);
        return;
    }
    updatePosition(city);

    
}
export default addCity;
import {supabase} from "./supabase-client.js";

async function getCitybyName(city)
{
    const {data, error}=await supabase.from("weather_city")
    .select("weather_cond")
    .eq("city_name", city)
    console.log("getcitybyname",data);
    return data;

}


async function getCitybyWeather(weather)
{
    const {data, error}=await supabase.from("weather_city")
        .select("city_name")
        .eq("weather_cond", weather)
        .eq("");
    console.log("city",data);
    return data;
}

/* SQL query 
CREATE OR REPLACE FUNCTION get_city(tempe int, weather text, datee date)
RETURNS SETOF weather_city
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT DISTINCT ON (city_name) * FROM weather_city
    WHERE 
        (tempe IS NULL OR temp = tempe)
    AND (weather IS NULL OR weather_cond = weather)
    AND (datee IS NULL OR weather_date = datee);
END;
$$;

*/
async function getCitybyAll(temp=null, weather=null, date=null)
{
    const { data, error } = await supabase.rpc('get_city', 
        { tempe: temp,
          weather: weather,
          datee: date
        })
    return data;
}

export default getCitybyAll;
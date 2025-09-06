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
CREATE OR REPLACE FUNCTION get_city(
    tempe   int,
    weather text,
    ddate   date,
    rdate   date
)
RETURNS TABLE(
    id          bigint,
    city_name   text,
    avg_temp    numeric,
    weather_cond text
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        MIN(wc.id)               AS id,
        wc.city_name,
        ROUND(AVG(wc.temp),0)             AS avg_temp,
        MIN(wc.weather_cond)     AS weather_cond
    FROM public.weather_city wc
    WHERE (tempe IS NULL   OR (wc.temp >tempe-5 and wc.temp<tempe+5))
      AND (weather IS NULL OR wc.weather_cond = weather)
      AND (
            (ddate IS NOT NULL AND rdate IS NULL
               AND wc.weather_date::date = ddate)
         OR (ddate IS NOT NULL AND rdate IS NOT NULL
               AND wc.weather_date::date BETWEEN ddate AND rdate)
         OR (ddate IS NULL  AND rdate IS NULL)
          )

    GROUP BY wc.city_name
    ORDER BY 
        CASE 
            WHEN tempe IS NULL THEN 0 
            ELSE ABS(AVG(wc.temp) - tempe) 

        END
        ASC,
        wc.city_name;
        
END;
$$;

*/
async function getCitybyAll(temp=null, weather=null, date=null, rdate=null)
{
    const { data, error } = await supabase.rpc('get_city', 
        { tempe: temp,
          weather: weather,
          ddate: date,
          rdate: rdate
        })
    return data;
}

export default getCitybyAll;
import React, { useState } from 'react'
import getCitybyAll from '../../backend/getCitybyAll';

const FormPage = () => {
  const [inputs, setInputs] = useState({
    temp: null,
    weather: null,
    date: null,
    cont: null 
  });
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({
      ...values, 
      [name]: value === '' ? null : value //null for empty strings, for backend compatibility (see getcitybyAll.js)
    }));
  }

  const handleSubmit = async (e) => {  
    e.preventDefault();
    try {
      const response = await getCitybyAll(inputs.temp, inputs.weather, inputs.date);
      console.log("API Response:", response);
      setResults(response || []);
    } catch(error) {
      console.error("Error:", error);
      setResults([]);
    }
  }

  return (
    <div>
      <h1>FormPage</h1>
      <form onSubmit={handleSubmit}>
          <label>
              Temperature:
              <input type="number" name="temp" value={inputs.temp} onChange={handleChange} />
          </label>
          <label>
              Weather:
              <input type="text" name="weather" value={inputs.weather} onChange={handleChange} />
          </label>
          <label>
              Date:
              <input type="date" name="date" value={inputs.date} onChange={handleChange} />
          </label>
          <label>
              Continent:
              <input type="text" name="cont" value={inputs.cont} onChange={handleChange} />
          </label>

          <button type="submit">Submit</button>
      </form>
      <div>
        {results && results.length > 0 ? (
          results.map(city => (
            <div key={city.id}>
              {city.city_name}: {city.temp}°C, {city.weather_cond}
            </div>
          ))
        ) : (
          <p>No cities found</p>
        )}
      </div>
    </div>
  )
}

export default FormPage
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormCard = () => {
  const navigate = useNavigate(); 
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomostr = tomorrow.toISOString().split('T')[0];

  const apiUrl = process.env.NODE_ENV === 'production' 
    ? '/api/search-cities' 
    : 'http://localhost:3002/api/search-cities'; 

  const [inputs, setInputs] = useState({
    temp: null,
    weather: null,
    date: today,
    cont: null,
    rdate: null
  });
  const [results, setResults] = useState([]);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({
      ...values, 
      [name]: value === '' ? null : value
    }));
    console.log(name,value);
  }

  const handleSubmit = async (e) => {  
    e.preventDefault();
    
    // Custom validation before submitting
    if (!inputs.date) {
      alert('Please select a departure date');
      return;
    }
    
    if (inputs.rdate && inputs.date && new Date(inputs.rdate) <= new Date(inputs.date)) {
      alert('Return date must be after departure date');
      return;
    }
    
    if (inputs.temp && (inputs.temp < -10 || inputs.temp > 40)) {
      alert('Temperature must be between -10 and 40');
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          temp: inputs.temp,
          weather: inputs.weather,
          date: inputs.date,
          returnDate: inputs.rdate,
          continent: inputs.cont
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const results = await response.json();
      console.log("Results from API:", results);
      navigate('/results', { state: { results } });
    } catch(error) {
      console.error("Error:", error);
      alert('Failed to fetch results. Please try again.');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>  {/* Remove noValidate */}
        <div className='grid grid-cols-2 md:grid-cols-6 text-black gap-1 p-6 rounded-lg'>

          <div className='grow col-span-2 rounded-t-2xl md:col-span-1 md:rounded-l-2xl md:rounded-none bg-white p-2'>
            <p>Temperature:</p>
            <input
              type="number"
              name="temp"
              value={inputs.temp || ''}
              placeholder="19"
              min="-10"
              max="40"
              title="Must be between -10 to 40"
              className='input validator bg-white w-full'
              onChange={handleChange}
              onInvalid={(e) => e.preventDefault()}  // Prevents popup message
            />

          </div>
          
            <label className='col-span-2 md:col-span-1 bg-white p-2'>
                  Weather:
                  <select 
                      name="weather" 
                      value={inputs.weather || ''} 
                      onChange={handleChange}
                      className='bg-white w-full'
                  >
                      <option value="">Any</option>
                      <option value="Sunny">Sunny</option>
                      <option value="Cloudy">Cloudy</option>
                      <option value="Rain">Rain</option>
                      <option value="Snow">Snow</option>
                  </select>
              </label>

             <div className='bg-white p-2'>
                  <p>Depart Date</p>
                  <input
                    type="date"
                    name="date"
                    value={inputs.date || ''}
                    title="Must be in the future"
                    className='input validator bg-white w-full'
                    onChange={handleChange}
                    required
                    min={today}
                    onInvalid={(e) => e.preventDefault()}  // Prevents popup message
                  />
              </div>

             <div className='bg-white p-2'>
                  <p>Return Date</p>
                  <input
                    type="date"
                    name="rdate"
                    value={inputs.rdate || ''}
                    title="optional"
                    className='input validator bg-white w-full'
                    onChange={handleChange}
                    min={inputs.date || tomostr}
                    onInvalid={(e) => e.preventDefault()}  // Prevents popup message
                  />
              </div>

              <label className='col-span-2 rounded-b-2xl md:col-span-1 md:rounded-r-2xl md:rounded-none bg-white p-2'>
                  Continent:
                  <select 
                      name="cont" 
                      value={inputs.cont || ''} 
                      onChange={handleChange}
                      className='bg-white w-full'
                  >
                      <option value="">All</option>
                      <option value="Europe">Europe</option>
                      <option value="Asia">Asia</option>
                      <option value="North America">North America</option>
                      <option value="South America">South America</option>
                      <option value="Africa">Africa</option>
                  </select>
              </label>

              <button className='col-span-2 mt-2 py-4 p-2  shrink bg-blue-700 text-white font-bold rounded-lg  md:col-span-1 md:m-0 md:ml-2 lg:w-40' type="submit">Submit</button>
          </div>
            
        </form>
      </div>
  )
}

export default FormCard
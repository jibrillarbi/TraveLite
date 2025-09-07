import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormCard = () => {
  const navigate = useNavigate(); 
  const [inputs, setInputs] = useState({
    temp: null,
    weather: null,
    date: null,
    cont: null ,
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
    try {
      const response = await fetch('http://localhost:3002/api/search-cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          temp: inputs.temp,
          weather: inputs.weather,
          date: inputs.date,
          returnDate: inputs.rdate
        })
      });
      
      const results = await response.json();
      console.log("Results from API:", results);
      navigate('/results', { state: { results } });
    } catch(error) {
      console.error("Error:", error);
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 md:grid-cols-6 text-black gap-1 p-6  rounded-lg'>

        <div className='grow col-span-2 rounded-t-2xl md:col-span-1 md:rounded-l-2xl md:rounded-none  bg-white p-2'>
            <p> Temperature: </p>
            <input
                type="number"
                name="temp"
                value={inputs.temp || ''}
                placeholder="19"
                min="1"
                max="40"
                title="Must be between be 1 to 10"
                className='input validator bg-white w-full'
                onChange={handleChange}
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
                <p> Depart Date</p>
                <input
                    type="date"
                    name="date"
                    placeholder="19"
                    title="Must be between be 1 to 10"
                    className='input validator bg-white w-full'
                    onChange={handleChange}
                />
            </div>

           <div className='bg-white p-2'>
                <p>Return Date</p>
                <input
                    type="date"
                    name="rdate"
                    placeholder="19"
                    title="Must be between be 1 to 10"
                    className='input validator bg-white w-full'
                    onChange={handleChange}
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
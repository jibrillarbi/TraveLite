const WeatherCard = ({cities}) => {
  const getWeatherIcon = (weather) => {
    const icons = {
      'Sunny': '☀️',
      'Cloudy': '☁️',
      'Rain': '🌧️',
      'Snow': '❄️',
      'Thunderstorm': '⛈️',
      'Fog': '🌫️',
      'Icy': '🧊'
    }
    return icons[weather] || '🌤️'
  }

  return (
    <div className='flex flex-col gap-6 p-6'>
      {cities.map((city) => (
        <div key={city.id} className="rounded-2xl shadow-lg bg-white text-black hover:scale-105 transition-transform duration-300 w-full">
          


          {/*actual card */}
          <div className="flex flex-col p-4 gap-4 md:flex-row md:gap-4 md:py-10 md:justify-between">
            <div className='text-center pt-2 text-3xl font-bold md:p-0'>
              {city.city_name} 
            </div>

          <div className ='text-center text-3xl flex flex-row justify-center gap-4 font-semibold'> 
            <p> {getWeatherIcon(city.weather_cond)} </p>
            <p> {city.avg_temp}°C </p>
          </div> 

          <div className='flex flex-row justify-center text-right gap-4 pb-4 '>
            <button className='p-2 rounded-lg bg-blue-400 text-white text-medium'> Find Flights</button>
            <button className='p-2 rounded-lg bg-blue-700 text-white text-medium'> Book Stay</button>
          </div> 
        


          {/*
            <div className="items-center">
              <span className="text-4xl mr-4">{getWeatherIcon(city.weather_cond)}</span>
              <div>
                <h2 className="text-2xl font-bold mb-1">{city.city_name}</h2>
              </div>
            </div>



            <div className="text-center">
              <p className="text-3xl font-bold">{city.avg_temp}°C</p>
              <p className="text-sm opacity-90">{city.weather_cond}</p>
            </div>

            <div className="flex col-span-2 gap-2">
              <button className="outline outline-1 rounded-lg">
                Find Flights
              </button>
              <button className="outline outline-1 rounded-lg">
                Book Stay
              </button>
            </div>
          </div>*/}


          </div>
        </div>
      ))}
    </div>
  )
}

export default WeatherCard
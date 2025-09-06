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
          
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-4xl mr-4">{getWeatherIcon(city.weather_cond)}</span>
              <div>
                <h2 className="text-2xl font-bold mb-1">{city.city_name}</h2>
                <p className="text-sm opacity-80">Date: {city.date}</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold">{city.temp}°C</p>
              <p className="text-sm opacity-90">{city.weather_cond}</p>
            </div>

            <div className="flex gap-2">
              <button className="outline outline-1 rounded-lg">
                Find Flights
              </button>
              <button className="outline outline-1 rounded-lg">
                Book Stay
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WeatherCard
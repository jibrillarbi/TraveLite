import {useLocation } from 'react-router-dom'
import WeatherCard from '../components/WeatherCard';
import Wrapper from '../components/Wrapper';

const ResultsPage = () => {
  const location = useLocation();
  const { results } = location.state || {};

  return (
    <Wrapper>
      <div>
        {results && results.length > 0 ? (
          <div>
            <WeatherCard cities={results} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-64 text-center bg-white p-8 rounded-lg shadow-md m-4">
            <div className="text-6xl mb-4">🌍</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">No Results Found</h2>
            <p className="text-gray-500 mb-4">
              No cities found that match your criterias. Try adjusting your search parameters.
            </p>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default ResultsPage
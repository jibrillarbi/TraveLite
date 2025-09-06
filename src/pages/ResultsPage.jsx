import {useLocation } from 'react-router-dom'
import WeatherCard from '../components/WeatherCard';
import Wrapper from '../components/Wrapper';
import { CalendarDays } from 'lucide-react';
import { MapPin } from 'lucide-react';

const ResultsPage = () => {
  const location = useLocation();
  const { results, searchParams } = location.state || {};

  const firstResult = results && results.length > 0 ? results[0] : null;
  const searchDate = firstResult ? firstResult.p_ddate : null;
  const returnDate = firstResult ? firstResult.p_rdate : null;
    console.log("Search Date:", searchDate);
    console.log("Return Date:", returnDate);
  return (
    <Wrapper>
      <div >
        <div className="w-full max-w-2xl mx-auto px-4 py-2">
          <div className="bg-white rounded-xl shadow-lg border p-5 ">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
                    <CalendarDays />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Trip Dates</p>
                  <p className="text-base sm:text-lg font-semibold text-black">
                    {searchDate ? new Date(searchDate).toLocaleDateString() : 'Any date'}
                    {returnDate && (
                      <span className="font-normal text-black font-semibold"> — {new Date(returnDate).toLocaleDateString()}</span>
                    )}
                  </p>
                </div>
              </div>
              
              <div className="hidden sm:block h-12 w-px bg-gray-200"></div>
              <div className="block sm:hidden w-full h-px bg-gray-200"></div>

              <div className="flex items-center gap-4 justify-between">
                <div className="flex-shrink-0 bg-green-100 text-green-600 p-3 rounded-full">
                    <MapPin />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Results</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    {results?.length || 0} <span className="font-normal text-gray-600">locations found</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
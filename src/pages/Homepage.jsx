import React from 'react'
import Wrapper from '../components/Wrapper'
import { MapPin, Calendar, Thermometer, Cloud, Users, Star } from 'lucide-react'

const Homepage = () => {
  return (
    <Wrapper>
      <div className='bg-white/90 py-8 mx-4 md:mx-10 rounded-xl mb-8 shadow-lg'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          <div className='p-4'>
            <div className='text-3xl font-bold text-blue-600'>150+</div>
            <div className='text-sm text-gray-600'>Cities Available</div>
          </div>
          <div className='p-4'>
            <div className='text-3xl font-bold text-orange-600'>365</div>
            <div className='text-sm text-gray-600'>Days Coverage</div>
          </div>
        </div>
      </div>

      <div className='bg-white/90 backdrop-blur-sm py-8 mx-4 md:mx-10 rounded-xl mb-8 shadow-lg'>
        <h3 className='text-2xl font-bold text-center text-gray-800 mb-8'>How It Works</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6'>
          <div className='text-center p-4'>
            <div className='bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Thermometer className='w-8 h-8' />
            </div>
            <h4 className='font-semibold text-gray-800 mb-2'>1. Set Your Preferences</h4>
            <p className='text-sm text-gray-600'>Choose your ideal temperature, weather conditions, and travel dates</p>
          </div>
          
          <div className='text-center p-4'>
            <div className='bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MapPin className='w-8 h-8' />
            </div>
            <h4 className='font-semibold text-gray-800 mb-2'>2. Discover Destinations</h4>
            <p className='text-sm text-gray-600'>We find cities that match your perfect weather conditions</p>
          </div>
          
          <div className='text-center p-4'>
            <div className='bg-purple-100 text-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Calendar className='w-8 h-8' />
            </div>
            <h4 className='font-semibold text-gray-800 mb-2'>3. Plan Your Trip</h4>
            <p className='text-sm text-gray-600'>Book your perfect weather getaway with confidence</p>
          </div>
        </div>
      </div>

      <div className='bg-white/90 backdrop-blur-sm py-8 mx-4 md:mx-10 rounded-xl mb-8 shadow-lg'>
        <h3 className='text-2xl font-bold text-center text-gray-800 mb-8'>Popular Destinations This Week</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-6'>
          <div className='bg-gradient-to-r from-orange-400 to-pink-400 p-6 rounded-lg text-white'>
            <div className='flex justify-between items-center mb-2'>
              <h4 className='font-bold text-lg'>Barcelona</h4>
              <span className='text-2xl'>☀️</span>
            </div>
            <p className='text-sm opacity-90'>24 °C</p>
          </div>
          
          <div className='bg-gradient-to-r from-blue-400 to-cyan-400 p-6 rounded-lg text-white'>
            <div className='flex justify-between items-center mb-2'>
              <h4 className='font-bold text-lg'>Nice</h4>
              <span className='text-2xl'>🌤️</span>
            </div>
            <p className='text-sm opacity-90'>21 °C</p>
          </div>
          
          <div className='bg-gradient-to-r from-green-400 to-emerald-400 p-6 rounded-lg text-white'>
            <div className='flex justify-between items-center mb-2'>
              <h4 className='font-bold text-lg'>London</h4>
              <span className='text-2xl'>☁️</span>
            </div>
            <p className='text-sm opacity-90'>16 °C</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Homepage
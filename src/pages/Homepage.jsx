import React from 'react'
import Wrapper from '../components/Wrapper'
import { Plane } from "lucide-react"
import CityCard from '../components/CityCard'
const Homepage = () => {
  return (
    <Wrapper>
        <div className="flex flex-col gap-8 min-h-screen font-inter">
            
            <div className="page-container flex flex-col p-4 box-border min-h-screen">
                <header className="flex flex-col sm:flex-row justify-between items-center p-4">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <h1 className="text-3xl font-bold text-white flex items-center justify-center sm:justify-start">
                            Weather Wander
                            <br />
                            <Plane />
                        </h1>
                        <p className="text-sm text-gray-600 mt-1">Your perfect weather, your perfect trip.</p>
                    </div>
                </header>
                <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
                        Where will the weather take you?
                    </h2>
                    <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
                        <div className="w-full mb-6">
                            <input type="text" placeholder="Search for a destination or weather preference..."
                                   className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-2 text-black focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out" />
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="flex flex-col items-start w-full">
                                <label htmlFor="min-temp" className="text-gray-700 text-sm mb-1">Min Temp (°C):</label>
                                <input type="number" id="min-temp" placeholder="15"
                                       className="w-full p-3 border border-gray-300 rounded-lg text-black" />
                            </div>
                            <div className="flex flex-col items-start w-full">
                                <label htmlFor="max-temp" className="text-gray-700 text-sm mb-1">Max Temp (°C):</label>
                                <input type="number" id="max-temp" placeholder="25"
                                       className="w-full p-3 border border-gray-300 rounded-lg text-black " />
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap justify-center gap-3 mb-8">
                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 text-sm hover:bg-blue-50 transition duration-200">
                                <span className="mr-1">☀️</span> Sunny
                            </button>
                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 text-sm hover:bg-blue-50 transition duration-200">
                                <span className="mr-1">☁️</span> Clear Skies
                            </button>
                            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 text-sm hover:bg-blue-50 transition duration-200">
                                <span className="mr-1">💧</span> Low Humidity
                            </button>
                        </div>
                        <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition duration-300 ease-in-out">
                            Find My Getaway
                        </button>
                    </div>
                </main>
                <section className="w-full py-8 px-4 bg-white bg-opacity-80 rounded-t-3xl shadow-inner mt-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Feeling Adventurous?</h3>
                    <CityCard name="London" image="src/assets/London.jpeg">Sunny, 25°C</CityCard>
                </section>
            </div>
        </div>

    </Wrapper>
  )
}

export default Homepage
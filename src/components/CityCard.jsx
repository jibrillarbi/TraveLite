import React from 'react'

const CityCard = ({name,image,children}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover: shadow-lg">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h4 className="font-bold text-xl text-gray-800 mb-2">{name}</h4>
                <p className="text-gray-600 text-sm mb-3 flex items-center">
                    <span className="mr-2 text-xl">☀️{children}</span> 
                </p>
                <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200 transition duration-200 text-sm font-medium">Explore</button>
            </div>;
        </div>
    </div>
  )
}

export default CityCard
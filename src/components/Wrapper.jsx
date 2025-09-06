import { Plane } from "lucide-react"

function Wrapper({ children }) {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-white">
      <div className="flex flex-col gap-8 min-h-screen font-inter">

            <div className="page-container flex flex-col p-4 box-border min-h-screen">
                <header className="flex flex-col sm:flex-row justify-between items-center p-4">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <h1 className="text-3xl font-bold text-white flex items-center justify-center sm:justify-start">
                            WeatherScanner
                            <br />
                            <Plane />
                        </h1>
                        <p className="text-sm text-gray-600 mt-1">Your perfect weather, your perfect trip.</p>
                    </div>
                </header>
                
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 leading-tight px-2">
                    Where will the weather take you?
                </h2>
                {children}
      </div>
      </div>
      
    </div>
  );
}
export default Wrapper; 

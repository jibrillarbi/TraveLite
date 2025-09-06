import { Plane } from "lucide-react"
import FormCard from "./FormCard";
import { useNavigate } from "react-router-dom"

function Wrapper({ children }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };
  return (
    
    <div className="min-h-screen ">
      <div className="flex flex-col gap-8 bg-sky-400 min-h-screen font-inter">

            <div className="page-container flex flex-col p-4 box-border ">
                <header className="flex flex-col sm:flex-row justify-between items-center p-4">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <h1 className="text-3xl font-bold text-white flex items-center justify-center sm:justify-start" onClick={handleHomeClick}>
                            WeatherScanner
                            <br />
                            <Plane />
                        </h1>
                        <p className="text-sm text-gray-600 mt-1">Your perfect weather, your perfect trip.</p>
                    </div>
                </header>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 leading-tight px-2">
                    Where will the weather take you?
                </h2>
                <FormCard />
            </div>

            <div className="bg-gradient-to-b from-sky-400 to-white w-full min-h-screen">{children}</div>
      </div>
      
    </div>
  );
}
export default Wrapper; 

// src/components/Wrapper.tsx
import { ReactNode } from "react";


function Wrapper({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-white">
      {children}
    </div>
  );
}
export default Wrapper; 

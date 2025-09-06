import Homepage from "./pages/Homepage"
import ResultsPage from "./pages/ResultsPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  )
}

export default App

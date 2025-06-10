import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/main/MainPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<MainPage />} />
      <Route path="/anime" element={<MainPage />} />
      <Route path="/contact" element={<MainPage />} />
    </Routes>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/main/MainPage"
import Layout from './ui/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/anime" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
      </Routes>
    </Layout>
  )
}

export default App

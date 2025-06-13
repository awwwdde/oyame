import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/main/MainPage"
import Layout from './ui/Layout'
import AboutPage from './pages/about/AboutPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/anime" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
      </Routes>
    </Layout>
  )
}

export default App

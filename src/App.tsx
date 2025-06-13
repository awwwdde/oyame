import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/main/MainPage"
import Layout from './ui/Layout'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import AnimePage from './pages/anime/AnimePage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Main from "./pages/main/MainPage"
import Layout from './ui/Layout'
import About from './pages/about/AboutPage'
import Contact from './pages/contact/ContactPage'
import Collection from './pages/collection/CollectionPage'
import ErrorPage from './pages/error/ErrorPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  )
}

export default App

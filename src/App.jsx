import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Certificates from './pages/Certificates'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/certificates' element={<Certificates />} />

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

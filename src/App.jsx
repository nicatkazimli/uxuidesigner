import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Header from './Layout/Header/Header'
import HomePage from './Menu/HomePage/HomePage'
import AboutPage from './Menu/AboutPage/AboutPage'
import PortfolioPage from './Menu/PortfolioPage/PortfolioPage'
import ContactPage from './Menu/ContactPage/ContactPage'

const App = () => {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />}   />
      <Route path='/portfolio' element={<PortfolioPage />}  />
      <Route path='/contact' element={<ContactPage />}   />
    </Routes>
    </Router>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CoverPage from './components/CoverPage'
import Chapter1 from './components/Chapter1'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage/>}/>
        <Route path="/chapter1" element={<Chapter1 />}/>
      </Routes>
    </Router>
  )
}

export default App

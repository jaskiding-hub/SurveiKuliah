import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Isisurvei from './components/Isisurvei'
import HasilSurvei from './components/Hasilsurvei'

function App() {
  return (
    <div className='scroll-smooth'>
      <Navbar />
      <Home />
      <Isisurvei />
      <HasilSurvei />
    </div>
    
  )
}

export default App
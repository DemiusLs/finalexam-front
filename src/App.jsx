import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GuestLayout from './layout/GuestLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Plants from './pages/PlantsPage'


function App() {
  

  return ( 
     
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/plants" element={<Plants />} />
          </Route>
        </Routes>
       
      
    
    
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GuestLayout from './layout/GuestLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Plants from './pages/PlantsPage'
import SinglePlantPage from './pages/SinglePlantPage'
import BenefitsPage from './pages/BenefitsPage'
import SingleBenefitPage from './pages/SingleBenefitPage'
import ControindicationsPage from './pages/ControindicationsPage'
import SingleControindicationPage from './pages/SingleControindicationPage'
import FamiliesPage from './pages/FamiliesPage'
import SingleFamilyPage from './pages/SingleFamilyPage'



function App() {
  

  return ( 
     
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/plants/:id" element={<SinglePlantPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/benefits/:id" element={<SingleBenefitPage />} />
            <Route path="/controindications" element={<ControindicationsPage />} />
            <Route path="/controindications/:id" element={<SingleControindicationPage />} />
            <Route path="/families" element={<FamiliesPage />} />
            <Route path="/families/:id" element={<SingleFamilyPage />} />
          </Route>
        </Routes>
       
      
    
    
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Projects from "./Components/Projects"
import Services from './Components/Services'
import Contact from './Components/Contact'
import Architecture from './Components/Architecture'
import Interiors from './Components/Interiors'
import LandScape from './Components/LandScape'
import Urban from './Components/Urban'
import ProductDesign from './Components/ProductDesign'
import Facade from './Components/Facade'
import Visualization from './Components/Visualization'
import Hospitality from './Components/Hospitality'
import Workplace from "./Components/Workplace"
import Residential from './Components/Residential'
import Construction from './Components/Construction'
import "../src/styles/index.css"
import "../src/styles/projects.css"
import "../src/styles/modal.css"
import "../src/styles/menu.css"
import "../src/styles/contact.css"
import "../src/styles/about.css"
import "../src/styles/architecture.css"
import "../src/styles/interior.css"
import "../src/styles/landscape.css"
import "../src/styles/urban.css"
import "../src/styles/productDesign.css"
import "../src/styles/facade.css"
import "../src/styles/visualization.css"
import "../src/styles/hospitality.css"
import "../src/styles/workplace.css"
import "../src/styles/residential.css"
import "../src/styles/construction.css"
import "../src/styles/services.css"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services/architecture' element={<Architecture />} />
        <Route path='services/interiors' element={<Interiors />} />
        <Route path='services/landscape' element={<LandScape />} />
        <Route path='services/urban' element={<Urban />} />
        <Route path='services/commercial' element={<ProductDesign />} />
        <Route path='services/facade-design' element={<Facade />} />
        <Route path='services/visualization' element={<Visualization />} />
        <Route path='services/hospitality' element={<Hospitality />} />
        <Route path='services/workplace' element={<Workplace />} />
        <Route path='services/res' element={<Residential />} />
        <Route path='services/construction' element={<Construction />} />
      </Routes>
    </BrowserRouter>
  )
}



import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Projects from "./pages/Projects"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  
  return (
    <BrowserRouter>
     <div className="container">
      <Navbar />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
     </div>
    </BrowserRouter>
  )
}

export default App
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Infrastructure from "./pages/Infrastructure"
import Achievement from "./pages/Achievement"
import Admission from "./pages/Admission"
import Mandatory from "./pages/Mandatory"
import Academic from "./pages/Academic"
import Header from "./components/Header"
import Footer from "./components/Footer"



function App() {


  return (
    <>
    {/* Header */}
     <Header />
      {/* body */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admission" element={<Admission />} />
        <Route path="mandatory-public-disclosure" element={<Mandatory />} />
        <Route path="academic" element={<Academic />} />
        <Route path="achievement" element={<Achievement />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact-us" element={<Contact />} />

      </Routes>
      {/* Footer */}
      <div>
        <hr className=" border-1 border-gray-300 mt-5" />
      </div>
      <div className=" mt-5">
     <Footer />
      </div>
    </>
  )
}

export default App

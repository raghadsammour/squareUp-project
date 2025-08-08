import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Work from "./Pages/Work/Work.jsx";
import Process from "./Pages/Process/Process.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Clients from "./Pages/Clients/Clients.jsx";
import HeroHome from './components/HeroHome/HeroHome'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/process' element={<Process />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/clients' element={<Clients />} />
      </Routes>

      <Footer />

    </>

  )
}
export default App;

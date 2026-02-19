import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalyst from './pages/Catalyst';
import { AppContext } from './ContextApi/AppContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from './pages/Photos';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Director from './pages/Director';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Terms from './pages/Terms/Index';
import Disclaimer from './pages/Disclaimer';
import Privacy from './pages/Privacy';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pointernational.in/api/contact");
        if (response) {
          setData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const sharedData = {
    data,
    setData,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={3000} />  {/* ✅ Placed outside <Routes> */}
        <AppContext.Provider value={sharedData}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/catalyst" element={<Catalyst />} />
            <Route exact path="/photos" element={<Photos />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/director" element={<Director />} />
            <Route exact path="/Terms" element={<Terms />} />
            <Route exact path="/Disclaimer" element={<Disclaimer />} />
            <Route exact path="/Privacy" element={<Privacy />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import AboutMe from './pages/AboutMe.jsx';
// import Portfolio from './pages/Portfolio.jsx';
// import Contact from './pages/Contact.jsx';
// import Resume from './pages/Resume.jsx';
// import ErrorPage from './pages/ErrorPage.jsx';
import './App.css'
import background from "../public/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";
// create App component
function App() {
  return (
   
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Nav />
      <main>
       <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default App

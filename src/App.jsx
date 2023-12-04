import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import './App.css'
// create App component
function App() {
  return (
   
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

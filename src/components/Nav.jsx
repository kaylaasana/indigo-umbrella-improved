import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Nav() {
  const [active, setLink] = useState("about-me")

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <ul className="navbar-nav nav nav-tabs me-auto mb-2 mb-lg-0 ">
        <li className="nav-item" onClick={() => {setLink("about-me")}}>
          <Link to="/" className={`${active === 'about-me' ? 'active' : ''} nav-link`} aria-current="page">About Me</Link>
        </li>
        <li className="nav-item" onClick={() => {setLink("projects")}}>
          <Link to="/project" className={`${active === 'projects' ? 'active' : ''} nav-link`} aria-current="page">Projects</Link>
        </li>
        <li className="nav-item" onClick={() => {setLink("contact-me")}}>
          <Link to="/contact" className={`${active === 'contact-me' ? 'active' : ''} nav-link`} aria-current="page">Contact Me</Link>
        </li>
        <li className="nav-item" onClick={() => {setLink("resume")}}>
          <Link to="/resume" className={`${active === 'resume' ? 'active' : ''} nav-link`} aria-current="page">Resume</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

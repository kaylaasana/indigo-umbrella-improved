import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className='nav-link active' aria-current="page">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/project" className='nav-link active' aria-current="page">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className='nav-link active' aria-current="page">Contact Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className='nav-link active' aria-current="page">Resume</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

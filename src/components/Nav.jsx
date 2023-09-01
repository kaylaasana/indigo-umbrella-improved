import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" >About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/project" >Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" >Contact Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" >Resume</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

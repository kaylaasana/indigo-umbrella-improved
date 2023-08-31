import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" >About Me</Link>
        </li>
        <li>
          <Link to="/project" >Projects</Link>
        </li>
        <li>
          <Link to="/contact" >Contact Me</Link>
        </li>
        <li>
          <Link to="/resume" >Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

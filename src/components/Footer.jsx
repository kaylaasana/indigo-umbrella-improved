import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import stackoverflow from "../public/stackoverflow.png";

export default function footer() {
    return (
      <footer>
        <a href="https://github.com/kaylaasana"><img src={github} className="img-fluid" width={35}></img></a>
        <a href="https://www.linkedin.com/in/kayladatte/"><img src={linkedin} className="img-fluid" width={35}></img></a>
        <a href="https://stackoverflow.com/users/21856336/kaylaasana"><img src={stackoverflow} className="img-fluid" width={35}></img></a>
      </footer>
    );
  }
  
import github from "../../public/GitHub.png";
import linkedin from "../../public/linkedin.png";
import stackoverflow from "../../public/stackoverflow.png";

export default function footer() {
    return (
      <footer className="d-flex justify-content-center">
        <a className="p-1" href="https://github.com/kaylaasana"><img src={github} className="img-fluid" width={35}></img></a>
        <a className="p-1" href="https://www.linkedin.com/in/kayladatte/"><img src={linkedin} className="img-fluid" width={35}></img></a>
        <a className="p-1" href="https://stackoverflow.com/users/21856336/kaylaasana"><img src={stackoverflow} className="img-fluid" width={35}></img></a>
      </footer>
    );
  }
  
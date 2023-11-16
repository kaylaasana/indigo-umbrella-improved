import CatFish from "../../public/CatFish.png";
import SillyCodeValley from "../../public/SillyCodeValley.png";
import BlueFin from "../../public/BlueFin.png";
import WeatherForecast from "../../public/WeatherForecast.jpg";
import PasswordGen from "../../public/PasswordGen.png";
import PreWork from "../../public/PreWork.png";

// exporting project elements
export default function Projects() {
  return (
    <div id="project-component">
      <h2 className="d-flex justify-content-center p-2">Projects</h2>
      <ul className="">
        <div className="row">
          <li className="col p-2 m-5">
            <div className="d-flex justify-content-center">
              <button className="m-3">
                <a href="https://kaylaasana.github.io/CatFish/">CatFish</a>
              </button>
              <br></br>
              <button className="m-3">
                <a href="https://github.com/kaylaasana/CatFish">GitHub</a>
              </button>
            </div>
            <img src={CatFish} className="img-fluid" width={300}></img>
          </li>
          <li className="col p-2 m-5">
            <div className="d-flex justify-content-center">
              <button className="m-3">
                <a href="https://github.com/Chapjae/sillyCode_valley">
                  SillyCode Valley
                </a>
              </button>
              <br></br>
              <button className="m-3">
                <a href="https://github.com/Chapjae/sillyCode_valley">GitHub</a>
              </button>
            </div>
            <img src={SillyCodeValley} className="img-fluid" width={300}></img>
          </li>
          <li className="col p-2 m-5">
            <div className="d-flex justify-content-center">
              <button className="m-3">
                <a href="https://murmuring-thicket-14542-74d2838aa204.herokuapp.com/">
                  BlueFin
                </a>
              </button>
              <br></br>
              <button className="m-3">
                <a href="https://github.com/kaylaasana/BlueFin">
                  GitHub
                </a>
              </button>
            </div>
            <img src={BlueFin} className="img-fluid" width={300}></img>
          </li>
        </div>
        <div className="row">
          <li className="col p-2 m-5">
            <div className="d-flex justify-content-center">
              <button className="m-3">
                <a href="https://kaylaasana.github.io/weather-forecast/">
                  Weather Forecast
                </a>
              </button>
              <br></br>
              <button className="m-3">
                <a href="https://github.com/kaylaasana/weather-forecast">
                  GitHub
                </a>
              </button>
            </div>
            <img src={WeatherForecast} className="img-fluid" width={300}></img>
          </li>
          <li className="col p-2 m-5">
            <div className="d-flex justify-content-center">
              <button className="m-3">
                <a href="https://kaylaasana.github.io/custom-password-generator/">
                  Password Generator
                </a>
              </button>
              <br></br>
              <button className="m-3">
                <a href="https://github.com/kaylaasana/custom-password-generator">
                  GitHub
                </a>
              </button>
            </div>
            <img src={PasswordGen} className="img-fluid" width={300}></img>
          </li>
          <li className="col p-2 m-5">
            <div className="d-flex justify-content-center">
              <button className="m-3">
                <a href="https://kaylaasana.github.io/prework-study-guide/">
                  Study Guide
                </a>
              </button>
              <br></br>
              <button className="m-3">
                <a href="https://github.com/kaylaasana/prework-study-guide">
                  GitHub
                </a>
              </button>
            </div>
            <img src={PreWork} className="img-fluid" width={300}></img>
          </li>
        </div>
      </ul>
    </div>
  );
}

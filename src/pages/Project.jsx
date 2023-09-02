import CatFish from "../public/CatFish.png";
import SillyCodeValley from "../public/SillyCodeValley.png";
import WorkdayScheduler from "../public/WorkdayScheduler.png";
import WeatherForecast from "../public/WeatherForecast.jpg";
import PasswordGen from "../public/PasswordGen.png";
import PreWork from "../public/PreWork.png";

export default function projects() {
  return (
    <div>
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
                <a href="https://kaylaasana.github.io/work-day-scheduler/">
                  Workday Scheduler
                </a>
              </button>
              <br></br>
              <button className="m-3">
                <a href="https://github.com/kaylaasana/work-day-scheduler">
                  GitHub
                </a>
              </button>
            </div>
            <img src={WorkdayScheduler} className="img-fluid" width={300}></img>
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

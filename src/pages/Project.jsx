import CatFish from "../public/CatFish.png";
import SillyCodeValley from "../public/SillyCodeValley.png";
import WorkdayScheduler from "../public/WorkdayScheduler.png";
import WeatherForecast from "../public/WeatherForecast.jpg";
import PasswordGen from "../public/PasswordGen.png";
import PreWork from "../public/PreWork.png";

export default function projects() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://kaylaasana.github.io/CatFish/">CatFish</a>
          <br></br>
          <a href="https://github.com/kaylaasana/CatFish">GitHub</a>
          <img src={CatFish} className="img-fluid" width={300}></img>
        </li>
        <li>
          <a href="https://github.com/Chapjae/sillyCode_valley">
            SillyCode Valley
          </a>
          <br></br>
          <a href="https://github.com/Chapjae/sillyCode_valley">GitHub</a>
          <img src={SillyCodeValley} className="img-fluid" width={300}></img>
        </li>
        <li>
          <a href="https://kaylaasana.github.io/work-day-scheduler/">
            Workday Scheduler
          </a>
          <br></br>
          <a href="https://github.com/kaylaasana/work-day-scheduler">GitHub</a>
          <img src={WorkdayScheduler} className="img-fluid" width={300}></img>
        </li>
        <li>
          <a href="https://kaylaasana.github.io/weather-forecast/">Weather Forecast</a>
          <br></br>
          <a href="https://github.com/kaylaasana/weather-forecast">GitHub</a>
          <img src={WeatherForecast} className="img-fluid" width={300}></img>
        </li>
        <li>
          <a href="https://kaylaasana.github.io/custom-password-generator/">Password Generator</a>
          <br></br>
          <a href="https://github.com/kaylaasana/custom-password-generator">GitHub</a>
          <img src={PasswordGen} className="img-fluid" width={300}></img>
        </li>
        <li>
          <a href="https://kaylaasana.github.io/prework-study-guide/">Study Guide</a>
          <br></br>
          <a href="https://github.com/kaylaasana/prework-study-guide">GitHub</a>
          <img src={PreWork} className="img-fluid" width={300}></img>
        </li>
      </ul>
    </div>
  );
}
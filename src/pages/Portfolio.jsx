import Projects from "../components/Projects"

export default function Portfolio(){
    class Project {
        constructor(name, imgPath, github, url){
            this.name = name
            this.imgPath = imgPath
            this.github = github
            this.url = url
        }
    }
    
    const projects = [
        new Project('CatFish', 'CatFish.png', 'https://github.com/kaylaasana/CatFish', 'https://kaylaasana.github.io/CatFish/'),
        new Project("SillyCode Valley", 'SillyCodeValley.png', 'https://github.com/Chapjae/sillyCode_valley', 'https://intense-sands-40473-ea199ebca0d8.herokuapp.com/'),
        new Project("BlueFin", 'BlueFin.png', 'https://github.com/kaylaasana/BlueFin','https://murmuring-thicket-14542-74d2838aa204.herokuapp.com/' ),
        new Project("Weather Forecast", "WeatherForecast.jpg", "https://github.com/kaylaasana/weather-forecast", "https://kaylaasana.github.io/weather-forecast/"),
        new Project("Work Day Scheduler", "WorkdayScheduler.png", "https://github.com/kaylaasana/work-day-scheduler", "https://kaylaasana.github.io/work-day-scheduler/"),
    ]


    return(
        <div className='project-container'>
            <Projects projects={projects} />
        </div>
    )
}

// // exporting project elements
// export default function Projects() {
//   return (
//     <div id="project-component">
//       <h2 className="d-flex justify-content-center p-2">Projects</h2>
//       <ul className="">
//         <div className="row">
//           <li className="col p-2 m-5">
//             <div className="d-flex justify-content-center">
//               <button className="m-3">
//                 <a href="https://kaylaasana.github.io/CatFish/">CatFish</a>
//               </button>
//               <br></br>
//               <button className="m-3">
//                 <a href="https://github.com/kaylaasana/CatFish">GitHub</a>
//               </button>
//             </div>
             
//             <img src={CatFish} className="img-fluid" width={300}></img>
//           </li>
//           <li className="col p-2 m-5">
//             <div className="d-flex justify-content-center">
//               <button className="m-3">
//                 <a href="https://github.com/Chapjae/sillyCode_valley">
//                   SillyCode Valley
//                 </a>
//               </button>
//               <br></br>
//               <button className="m-3">
//                 <a href="https://github.com/Chapjae/sillyCode_valley">GitHub</a>
//               </button>
//             </div>
//             <img src={SillyCodeValley} className="img-fluid" width={300}></img>
//           </li>
//           <li className="col p-2 m-5">
//             <div className="d-flex justify-content-center">
//               <button className="m-3">
//                 <a href="https://murmuring-thicket-14542-74d2838aa204.herokuapp.com/">
//                   BlueFin
//                 </a>
//               </button>
//               <br></br>
//               <button className="m-3">
//                 <a href="https://github.com/kaylaasana/BlueFin">
//                   GitHub
//                 </a>
//               </button>
//             </div>
//             <img src={BlueFin} className="img-fluid" width={300}></img>
//           </li>
//         </div>
//         <div className="row">
//           <li className="col p-2 m-5">
//             <div className="d-flex justify-content-center">
//               <button className="m-3">
//                 <a href="https://kaylaasana.github.io/weather-forecast/">
//                   Weather Forecast
//                 </a>
//               </button>
//               <br></br>
//               <button className="m-3">
//                 <a href="https://github.com/kaylaasana/weather-forecast">
//                   GitHub
//                 </a>
//               </button>
//             </div>
//             <img src={WeatherForecast} className="img-fluid" width={300}></img>
//           </li>
//           <li className="col p-2 m-5">
//             <div className="d-flex justify-content-center">
//               <button className="m-3">
//                 <a href="https://kaylaasana.github.io/custom-password-generator/">
//                   Password Generator
//                 </a>
//               </button>
//               <br></br>
//               <button className="m-3">
//                 <a href="https://github.com/kaylaasana/custom-password-generator">
//                   GitHub
//                 </a>
//               </button>
//             </div>
//             <img src={PasswordGen} className="img-fluid" width={300}></img>
//           </li>
//           <li className="col p-2 m-5">
//             <div className="d-flex justify-content-center">
//               <button className="m-3">
//                 <a href="https://kaylaasana.github.io/prework-study-guide/">
//                   Study Guide
//                 </a>
//               </button>
//               <br></br>
//               <button className="m-3">
//                 <a href="https://github.com/kaylaasana/prework-study-guide">
//                   GitHub
//                 </a>
//               </button>
//             </div>
//             <img src={PreWork} className="img-fluid" width={300}></img>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// }

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
        <div id='project-container'>
            <Projects projects={projects} />
        </div>
    )
}
// ### Projects

// For each project that is featured in your portfolio, include the following:

// * An image of the deployed application (either a short animated GIF or screenshot)

// * The title of the project

// * A link to the deployed application

// * A link to the corresponding GitHub repository

// import CatFish from "../public/CatFish.png";
// import  from "";
// import  from "";
// import  from "";
// import  from "";
// import  from "";

export default function footer() {
    return (
      <div>
        <a href="https://github.com/kaylaasana"><img src={CatFish}></img></a>
        <a href="https://www.linkedin.com/in/kayladatte/"><img src={linkedin}></img></a>
        <a href="https://stackoverflow.com/users/21856336/kaylaasana"><img src={stackoverflow}></img></a>
      </div>
    );
  }
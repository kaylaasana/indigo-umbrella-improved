import me from "../../public/me.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
// exporting AboutMe component
export default function AboutMe() {
  // returning elements that display about me content
  return (
    <div id="about-me-component" className="d-flex flex-column">
      <h2 className="d-flex justify-content-center p-2">About Me</h2>
      <div id="about-container" className="d-flex">
        <LazyLoadImage
          id="me"
          className="img-fluid "
          alt="photo of Kayla sitting on a couch surrounded by a wall of books."
          src={me}
          effect="blur"
        />
        <p id="about-me" className="p-5 m-5 border ">
          Hello, my name is Kayla Datte and I'm a certified Full-Stack Web Developer. To quickly summarize my background, I graduated from Arizona State University with a Bachelor of Science in Sociology. I spent the first seven years of my post graduate career in administration for a small software company in the mortgage industry. After a rough year for the mortgage industry, I was part of a round of lay-offs. I chose to seize that opportunity to pursue a seven year long curiosity in coding. For three months I fully emersed myself in a web development coding bootcamp through the University of California, Berkeley. I graduated with a solid A grade in September of 2023 and have spent the time since improving and expanding my projects, sharpening my algorithmic skills, seeking to understand new languages and pursuing a career in this industry, of which I am now enamored. I encourage you to check out my portfolio; if you like what you see and are interested in working with me, you can find my contact information on my resume under the resume tab.
        </p>
      </div>
    </div>
  );
}

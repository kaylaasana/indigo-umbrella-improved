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
          width={300}
          src={me}
          effect="blur"
        />
        <p id="about-me" className="p-5 m-5 border ">
          Here is where my bio goes. Filler words are going to be this repeating
          over and over for a few lines so that I can see what it will look like
          when I actually take the time to write somthing meaningful about
          myself. Filler words are going to be this repeating over and over for
          a few lines so that I can see what it will look like when I actually
          take the time to write somthing meaningful about myself. Filler words
          are going to be this repeating over and over for a few lines so that I
          can see what it will look like when I actually take the time to write
          somthing meaningful about myself.
        </p>
      </div>
    </div>
  );
}

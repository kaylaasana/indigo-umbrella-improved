import me from "../../public/me.jpg";
// exporting AboutMe component
export default function AboutMe() {
  // returning elements that display about me content
  return (
    <div id="about-me-section" className="d-flex flex-column">
      <h2 className="d-flex justify-content-center p-2 border-bottom">About Me</h2>
      <div id="about-container" className="d-flex">
        <img
          id="me"
          className="img-fluid "
          width={300}
          src={me}
          alt="photo of Kayla sitting on a couch surrounded by a wall of books."
        ></img>
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

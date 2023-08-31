import me from "../../public/me.jpg"

export default function aboutMe() {
    return (
        <div>
        <h3>About Me</h3>
        <img src={me} alt="photo of Kayla sitting on a couch surrounded by a wall of books."></img>
        <p class="bio">Here is where my bio goes. Filler words are going to be this repeating over and over for a few lines so that I can see what it will look like when I actually take the time to write somthing meaningful about myself. Filler words are going to be this repeating over and over for a few lines so that I can see what it will look like when I actually take the time to write somthing meaningful about myself. Filler words are going to be this repeating over and over for a few lines so that I can see what it will look like when I actually take the time to write somthing meaningful about myself.</p>
        </div>
    );
  }
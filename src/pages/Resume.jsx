// exporting Resume page elements
export default function ResumePage() {
  return (
    <div id="resume-component" className="d-flex flex-column">
      <div>
      <h2 className="d-flex justify-content-center p-2">My Proficiencies</h2>
      </div>
      <div className="d-flex justify-content-center">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>JavaScript</li>
          <li>Web APIs</li>
          <li>Node.js</li>
          <li>OOP</li>
          <li>Express</li>
          <li>mySQL</li>
          <li>ORM</li>
          <li>MVC</li>
          <li>Mongo DB </li>
          <li>Mongoose</li>
          <li>React</li>
          <li>MERN</li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        {/* create link to download resume */}
        <a
          href="Kayla_Datte_Resume.pdf"
          download="Kayla_Datte_Resume.pdf"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}

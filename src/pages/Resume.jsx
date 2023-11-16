// exporting Resume page elements
export default function ResumePage() {
  return (
    <div id="resume-component" className="d-flex flex-column">
      <div>
      <p className="d-flex justify-content-center">My Proficiencies</p>
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
          href="KaylaDatteResume.pdf"
          download="KaylaDatteResume.pdf"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}

// import '../public/KaylaDatteResume.pdf';

export default function resumePage() {
  return (
    <div className="d-flex flex-column">
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
        <a
          href="src\public\KaylaDatteResume.pdf"
          download="/KaylaDatteResume.pdf"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}

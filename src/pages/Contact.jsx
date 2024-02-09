import { validateEmail } from "../utils/helpers";
import { useState } from "react";

// export contact page
export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  // function that handles the input of the form
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setConfirmMessage("");
    // check input type
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
// function that handles form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      setConfirmMessage("form submitted");
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage("");
      return;
    }
    if (email && !validateEmail(email)) {
      setErrorMessage("email is invalid");
      return;
    }
  };
//  function that alerts if there is no input
  const noInput = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage("all fields required");
      return;
    }
  };
// returning contact form elements to the page
  return (
    <div id="contact-component" className="d-flex flex-column align-items-center">
      <h2 className="p-2">Contact Me</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>
          Name
          <br></br>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={noInput}
            type="text"
            placeholder="name"
          />
        </label>
        <br></br>
        <label>
          E-Mail
          <br></br>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={noInput}
            type="email"
            placeholder="email"
          />
        </label>
        <br></br>
        <label>
          Message
          <br></br>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={noInput}
            type="message"
            placeholder="message"
          />
        </label>
        <br></br>
        <button type="submit align-items-center">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {confirmMessage && (
        <div>
          <p className="confirm-text">{confirmMessage}</p>
        </div>
      )}
    </div>
  );
}

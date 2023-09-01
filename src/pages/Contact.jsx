import { validateEmail } from "../utils/helpers";
import { useState } from "react";

export default function contactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setConfirmMessage("");

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

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

  const noInput = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage("must complete all fields");
      return;
    }
  };

  return (
    <div>
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
        <button type="submit">Submit</button>
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

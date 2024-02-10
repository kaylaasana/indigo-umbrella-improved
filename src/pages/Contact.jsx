import { validateEmail } from "../utils/helpers";
import { useState } from "react";
import { send } from 'emailjs-com';

// export contact page
export default function ContactPage() {
  const [toSend, setToSend] = useState({
    name: '',
    message: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  // function that handles the input of the form
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setToSend({ ...toSend, [e.target.name]: e.target.value });

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
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (toSend.name && toSend.email && toSend.message) {
      try {
        await send('<YOUR_SERVICE_ID>', '<YOUR_TEMPLATE_ID>', toSend, '<YOUR_USER_ID>');
        setConfirmMessage("Email sent successfully");
        setToSend({
          name: '',
          message: '',
          email: '',
        });
        setErrorMessage("");
      } catch (error) {
        setErrorMessage("Failed to send email. Please try again later.");
      }
    } else if (toSend.email && !validateEmail(toSend.email)) {
      setErrorMessage("Email is invalid");
    } else {
      setErrorMessage("All fields are required");
    }
    // if (email && !validateEmail(email)) {
    //   setErrorMessage("email is invalid");
    //   return;
    // }
  };

  //  function that alerts if there is no input
  const noInput = (e) => {
    e.preventDefault();
    if (!toSend.name || !toSend.email || !toSend.message) {
      setErrorMessage("all fields required");
      return;
    }
  };

  // returning contact form elements to the page
  return (
    <div
      id="contact-component"
      className="d-flex flex-column align-items-center"
    >
      <h2 className="p-2">Contact Me</h2>
      <form onSubmit={handleFormSubmit}
      >
        <label>
          Name
          <br></br>
          <input
            value={toSend.name}
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
            value={toSend.email}
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
            value={toSend.message}
            name="message"
            onChange={handleInputChange}
            onBlur={noInput}
            type="message"
            placeholder="message"
          />
        </label>
        <br></br>
        <button type="submit" value={"Submit"}>Send</button>
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

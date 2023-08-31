import { validateEmail } from "../utils/helpers";

export default function contactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "address") {
      setAddress(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    setName("");
    setAddress("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onBlur={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onBlur={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={address}
          name="address"
          onBlur={handleInputChange}
          type="address"
          placeholder="address"
        />
        <input
          value={message}
          name="message"
          onBlur={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

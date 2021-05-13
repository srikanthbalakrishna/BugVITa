import { useDispatch } from "react-redux";
import { useState } from "react";
import { showProductsList } from "../redux/ducks/showComponentDuck";
import axios from "axios";
import { setUserEmail } from "../redux/ducks/userDuck";

const Login = () => {
  const dispatch = useDispatch();
  /* Local states which do not need redux as they are used only in this component*/
  const [showLoading, setShowLoading] = useState(false);
  const [showValidityMessage, setShowValidityMessage] = useState(false);
  const [validityMessage, setValidityMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email_ID = event.target[0].value.trim();
    const password_entered = event.target[1].value.trim();

    if (email_ID === "" || password_entered === "") {
      setValidityMessage("Invalid! Please don't leave fields empty");
      setShowValidityMessage(true);
      setTimeout(() => setShowValidityMessage(false), 2500);
    } else if (email_ID.includes("-")) {
      setValidityMessage("Email cannot have hyphens");
      setShowValidityMessage(true);
      setTimeout(() => setShowValidityMessage(false), 2500);
    } else {
      setShowLoading(true);
      axios
        .get(`/api/users/login/${email_ID}-${password_entered}`)
        .then((res) => {
          setShowLoading(false);
          setUserEmail(email_ID);
          if (res.data.loggedin) {
            dispatch(showProductsList());
          } else {
            setValidityMessage("User not found");
            setShowValidityMessage(true);
            setTimeout(() => setShowValidityMessage(false), 2500);
          }
        });
    } //else ends
  }; //handleSubmit() ends

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {showValidityMessage && (
          <div className="invalid-message">{validityMessage}</div>
        )}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          id="password"
          className="form-field"
          type="text"
          placeholder="Password"
          name="password"
        />

        {showLoading ? (
          <h2>LOADING....</h2>
        ) : (
          <button className="form-field" type="submit">
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;

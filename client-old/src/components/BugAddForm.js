import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AddBug } from "../redux/ducks/bugsAddDuck";

//import "../styles/BugAddForm.css";

import {
  showBugsList,
  showBugAddedScreen,
} from "../redux/ducks/showComponentDuck";

const BugAddForm = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();

  /* A local state which does not need redux as it is used only in this component*/
  const [validityMessage, setValidityMessage] = useState(false);

  const bugSubmitHandler = (event) => {
    event.preventDefault();
    const bugName = event.target[0].value.trim();
    const bugDescription = event.target[1].value.trim();

    //Check if any of the fields are empty
    if (bugName === "" || bugDescription === "") {
      setValidityMessage(true);
      setTimeout(() => setValidityMessage(false), 2500);
    } else {
      const bugObject = {
        name: bugName,
        author: "TO_BE_SET_AUTOMATICALLY",
        product: selectedProduct,
        description: bugDescription,
      };
      dispatch(AddBug(bugObject));
      dispatch(showBugAddedScreen());
      setTimeout(() => dispatch(showBugsList()), 3000);
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={bugSubmitHandler}>
        {validityMessage && (
          <div className="invalid-message">
            Invalid! Please don't leave fields empty.
          </div>
        )}
        <textarea
          onChange={() => setValidityMessage(false)}
          id="name"
          className="form-field"
          type="text"
          placeholder="Name"
          name="name"
        />
        <textarea
          id="description"
          className="form-field"
          type="text"
          placeholder="Description"
          name="description"
        />
        <button className="form-field" type="submit">
          Add Bug
        </button>
      </form>
    </div>
  );
};

export default BugAddForm;

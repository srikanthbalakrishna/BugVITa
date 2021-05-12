import { useDispatch } from "react-redux";
import { showProductsList } from "../redux/ducks/showComponentDuck";
const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    console.log("form submitted!");
    dispatch(showProductsList());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          email:
          <input type="text" placeholder="Email ID" name="email" />
        </label>
        <label>
          password:
          <input type="text" placeholder="Password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;

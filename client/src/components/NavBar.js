import "../styles/NavBar.css";
import showBugsList from "../redux/actions/showBugsList";
import showProducts from "../redux/actions/showProducts";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h1>BugVITa</h1>
      <button onClick={() => dispatch(showProducts())}>Products</button>
      <button onClick={() => dispatch(showBugsList())}>Bugs</button>
    </div>
  );
};

export default NavBar;

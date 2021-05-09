import "../styles/NavBar.css";
import { useDispatch } from "react-redux";
//actions
import showBugsList from "../redux/actions/showBugsList";
import showProductsList from "../redux/actions/showProductsList";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h1>BugVITa</h1>
      <button onClick={() => dispatch(showProductsList())}>Products</button>
      <button onClick={() => dispatch(showBugsList())}>Bugs</button>
    </div>
  );
};

export default NavBar;

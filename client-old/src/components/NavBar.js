import "../styles/NavBar.css";
import { useDispatch } from "react-redux";
//actions
import { showLogin, showProductsList } from "../redux/ducks/showComponentDuck";
import { useSelector } from "react-redux";
import { setUserEmail } from "../redux/ducks/userDuck";
import { setSelectedProduct } from "../redux/ducks/selectedProductDuck";
import { setSelectedBug } from "../redux/ducks/selectedBugDuck";

const NavBar = () => {
  const dispatch = useDispatch();
  const showComponent = useSelector((state) => state.showComponent);
  const logOutHandler = () => {
    dispatch(setUserEmail(""));
    dispatch(setSelectedProduct("sampleBugs"));
    dispatch(setSelectedBug(""));
    dispatch(showLogin());
  };
  return (
    <div className="navbar">
      <h1>BugVITa</h1>
      {showComponent !== "SHOW_PRODUCTSLIST" && showComponent !== "SHOW_LOGIN" && (
        <button
          className="ProductsButton"
          onClick={() => dispatch(showProductsList())}
        >
          Back to Products
        </button>
      )}
      {showComponent !== "SHOW_LOGIN" && (
        <button onClick={logOutHandler}>Logout</button>
      )}
    </div>
  );
};

export default NavBar;

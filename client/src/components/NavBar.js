import "../styles/NavBar.css";
import { useDispatch } from "react-redux";
//actions
import { showProductsList } from "../redux/ducks/showComponentDuck";
import { useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const showComponent = useSelector((state) => state.showComponent);

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
    </div>
  );
};

export default NavBar;

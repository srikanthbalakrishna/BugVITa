import "./styles/App.css";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import BugsList from "./components/BugsList";
import { useSelector } from "react-redux";
import Login from "./components/Login";

function App() {
  //A component wil render(or not) based on the state 'showComponent'
  const showComponent = useSelector((state) => state.showComponent);

  return (
    <div className="App">
      <NavBar />
      {showComponent === "SHOW_LOGIN" && <Login />}
      {showComponent === "SHOW_PRODUCTSLIST" && <ProductsList />}
      {showComponent === "SHOW_BUGSLIST" && <BugsList />}
    </div>
  );
}

export default App;

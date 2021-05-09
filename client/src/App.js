import "./styles/App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import BugsList from "./components/BugsList";
import { useSelector } from "react-redux";

function App() {
  //A component wil render(or not) based on the state 'showComponent'
  const showComponent = useSelector((state) => state.showComponent);
  return (
    <div className="App">
      <NavBar />
      {showComponent === "SHOW_PRODUCTSLIST" && <Products />}
      {showComponent === "SHOW_BUGSLIST" && <BugsList />}
    </div>
  );
}

export default App;

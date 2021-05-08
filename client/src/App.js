import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import BugsList from "./components/BugsList";
import { useSelector } from "react-redux";

function App() {
  const showComponent = useSelector((state) => state.showComponent);
  return (
    <div className="App">
      <NavBar />
      {showComponent === "SHOW_PRODUCTS" && <Products />}
      {showComponent === "SHOW_BUGSLIST" && <BugsList />}
    </div>
  );
}

export default App;

import "./styles/App.css";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import BugsList from "./components/BugsList";
import BugAddForm from "./components/BugAddForm";
import BugAddedNotification from "./components/BugAddedNotification";
import { useSelector } from "react-redux";
import Login from "./components/Login";

function App() {
  //A component wil render(or not) based on the state 'showComponent'
  const showComponent = useSelector((state) => state.showComponent);
  return (
    <div className="App">
      <NavBar />

      <div className="AppFunctions">
        {showComponent === "SHOW_LOGIN" && <Login />}
        {showComponent === "SHOW_PRODUCTSLIST" && <ProductsList />}
        {showComponent === "SHOW_BUGSLIST" && <BugsList />}
        {showComponent === "SHOW_BUGADD" && <BugAddForm />}
        {showComponent === "SHOW_Bug_Added_Screen" && <BugAddedNotification />}
      </div>
    </div>
  );
}

export default App;

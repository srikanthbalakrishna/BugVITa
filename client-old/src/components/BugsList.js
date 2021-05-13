import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBugs } from "../redux/ducks/bugsDuck";
import { setSelectedBug } from "../redux/ducks/selectedBugDuck";
import { showBugAdd, showBugReport } from "../redux/ducks/showComponentDuck";
import "../styles/BugsList.css";

const BugsList = () => {
  //Whichever product is the one currently selected
  const selectedProduct = useSelector((state) => state.selectedProduct);

  const dispatch = useDispatch();

  //
  const AddBugClickHandler = () => {
    dispatch(showBugAdd());
  };

  useEffect(() => {
    dispatch(fetchBugs(selectedProduct));

    // eslint-disable-next-line
  }, []);
  const bugsOfAProductState = useSelector((state) => state.bugsByProduct);
  const newBugBeingPosted = useSelector((state) => state.bugAdd.loading);

  const showReport = (bugID) => {
    dispatch(setSelectedBug(bugID));
    dispatch(showBugReport());
  };

  //
  return (
    <div>
      <div className="BugsList">
        {(bugsOfAProductState.loading === true ||
          newBugBeingPosted === true) && <h2>LOADING BUGS......</h2>}

        {bugsOfAProductState.loading === false && (
          <>
            <h2>{`${selectedProduct} Bugs:`}</h2>
            {bugsOfAProductState.bugs.map((bug) => (
              <button
                className="IndividualBug"
                key={bug._id}
                onClick={() => showReport(bug._id)}
              >
                {`${bug.name}`}
              </button>
            ))}
          </>
        )}
      </div>
      <div className="AddButtonDiv">
        <button className="AddButton" onClick={AddBugClickHandler}>
          Add a bug
        </button>
      </div>
    </div>
  );
};

export default BugsList;

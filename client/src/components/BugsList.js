import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBugs } from "../redux/ducks/bugsDuck";
const BugsList = () => {
  //Whichever product is the one currently selected
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBugs(selectedProduct));
    // eslint-disable-next-line
  }, []);
  const bugsOfAProductState = useSelector((state) => state.bugsByProduct);
  //
  return (
    <div>
      {bugsOfAProductState.loading === true && <h2>LOADING BUGS......</h2>}

      {bugsOfAProductState.loading === false && (
        <>
          <h2>{`${selectedProduct} Bugs:`}</h2>
          {bugsOfAProductState.bugs.map((bug) => (
            <p key={bug._id}>{`${bug.name} -- ${bug.author} `}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default BugsList;

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setSelectedBug } from "../redux/ducks/selectedBugDuck";
import { useEffect, useState } from "react";
import { showBugsList } from "../redux/ducks/showComponentDuck";

const BugReport = () => {
  const selectedBug = useSelector((state) => state.selectedBug);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [bug, setBug] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    axios
      .get(`api/bugs/${selectedBug}`)
      .then((res) => {
        setBug(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  const deleteBugHandler = () => {
    setIsDeleting(true);
    axios
      .delete(`/api/bugs/${bug._id}`)
      .then((res) => {
        if (res.data.success) dispatch(showBugsList());
        else console.log("Bug was not deleted...");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <h1>Name:</h1>
          <h3>{bug.name}</h3>
          <h1>Date:</h1>
          <h3>{bug.date}</h3>
          <h1>Author:</h1>
          <h3>{bug.author}</h3>
          <h1>Description:</h1>
          <h3>{bug.description}</h3>
          <h1>Belonging to product:</h1>
          <h3>{bug.product}</h3>

          {isDeleting ? (
            <h2>DELETING....</h2>
          ) : (
            <button onClick={deleteBugHandler}>Delete Bug</button>
          )}
        </>
      )}
    </div>
  );
};

export default BugReport;

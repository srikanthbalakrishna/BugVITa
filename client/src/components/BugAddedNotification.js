import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

const BugAddedComp = () => {
  return (
    <div className="AddBugs">
      <FontAwesomeIcon className="Bug-icon" size="5x" icon={faBug} />
      Bug Added Succesfully!
    </div>
  );
};

export default BugAddedComp;

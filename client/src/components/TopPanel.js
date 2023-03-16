import { useState } from "react";
import { ModalForm } from "./ModalForm";
const TopPanel = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="top-panel">
      <button className="btn btn-panel btn-add" onClick={() => setShow(true)}>
        Add Event
      </button>
      {show ? (
        <ModalForm title={"Edit Event"} onClose={() => setShow(false)} />
      ) : null}
      {/* <ModalForm
        show={show}
        title={"Add Event"}
        onClose={() => setShow(false)}
      /> */}
      <button className="btn btn-panel btn-fav">Filter Favorite</button>
    </div>
  );
};

export { TopPanel };

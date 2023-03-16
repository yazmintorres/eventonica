import { useState } from "react";
import { ModalForm } from "./ModalForm";
import Moment from "react-moment";

const EventRow = (props) => {
  const [show, setShow] = useState(false);
  return (
    <tr>
      <td className="heart">&#10084;</td>
      <td>{props.name}</td>
      <td>
        <Moment format="MMM DD, YYYY">{props.date}</Moment>
      </td>
      <td>{props.category}</td>
      <td>{props.description}</td>
      <td>
        <button className="btn btn-row btn-edit" onClick={() => setShow(true)}>
          Edit
        </button>
        <ModalForm
          show={show}
          title={"Edit Event"}
          onClose={() => setShow(false)}
        />
      </td>
      <td>
        <button className="btn btn-row btn-delete">Delete</button>
      </td>
    </tr>
  );
};

export { EventRow };

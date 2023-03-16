import Moment from "react-moment";

const EventRow = (props) => {
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
        <button className="btn btn-row btn-edit">Edit</button>
      </td>
      <td>
        <button className="btn btn-row btn-delete">Delete</button>
      </td>
    </tr>
  );
};

export { EventRow };

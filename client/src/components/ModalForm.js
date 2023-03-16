const ModalForm = (props) => {
  if (!props.show) {
    return null;
  }

  const closeOnClick = (e) => {
    props.onClose();
    // callback in parent
    // props.updateDescription(e);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">this will the body - a form</div>
        <div className="modal-footer">
          <button onClick={closeOnClick} className=" btn btn-modal-close">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalForm };

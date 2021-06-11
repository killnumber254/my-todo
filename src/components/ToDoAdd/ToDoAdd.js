const ToDoAdd = ({ addItem }) => {
  return (
    <button
      className="btn btn-outline-secondary"
      id="button-addon2"
      onClick={addItem}
    >
      Add
    </button>
  );
};
export default ToDoAdd;

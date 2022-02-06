import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const { name, salary, onToggleProp, increase, like } = props;

  let classNames = "d-flex justify-content-between list-group-item";
  if (increase) {
    classNames += " increase";
  }
  if (like) {
    classNames += " like";
  }
  return (
    <li className={classNames}>
      <span
        onClick={onToggleProp}
        data-toggle="like"
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          onClick={props.deleteItem}
          className="btn-trash btn-sm "
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;

import React, { Component } from "react";
import "./ToDoListItem.css";

class ToDoListItem extends Component {
  render() {
    const { text, onDelete, onToggleImportant, onToggleDone, important, done } =
      this.props;

    let ClassNames = "todo-list-item";

    if (important === true) {
      ClassNames += " important";
    } else if (done === true) {
      ClassNames += " done";
    }

    return (
      <div className={ClassNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {text}
        </span>
        <div>
          <button className="btnImportat" onClick={onToggleImportant}></button>

          <button className="btn-close" onClick={onDelete}></button>
        </div>
      </div>
    );
  }
}
export default ToDoListItem;

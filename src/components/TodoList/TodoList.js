import React from "react";
import ToDoListItem from "../ToDoListItem";
import "./TodoList.css";

const TodoList = ({ list, onDelete, onToggleImportant, onToggleDone }) => {
  console.log(list);
  const element = list.map((item) => {
    const { id, ...itemTodo } = item;
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem
          {...itemTodo}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{element}</ul>;
};

export default TodoList;

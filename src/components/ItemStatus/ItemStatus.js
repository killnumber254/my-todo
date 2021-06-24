import React, { Component } from "react";
import "./ItemStatus.css";

export default class ItemStatus extends Component {
  buttons = [
    {
      name: "all",
      label: "All",
    },
    {
      name: "active",
      label: "Active",
    },
    {
      name: "done",
      label: "Done",
    },
  ];
  render() {
    const { filter, onFilter } = this.props;
    console.log(filter);
    const buttons = this.buttons.map(({ name, label }) => {
      console.log(label);
      const onActive = filter === name;
      console.log(onActive);
      const group = onActive ? "btn-info" : " btn-secondary";
      return (
        <button
          type="button"
          className={`btn ${group}`}
          onClick={() => console.log(onFilter(name))}
          key={name}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}

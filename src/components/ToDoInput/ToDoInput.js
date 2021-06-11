import React, { Component } from "react";
import ToDoAdd from "../ToDoAdd";
import "./ToDoInput.css";

class ToDoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  addItem = () => {
    const { value } = this.state;
    if (value) {
      this.props.addItem(value);
      this.setState({ value: "" });
    }
  };

  handChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          className="form-control"
          aria-label="Введите Задачу"
          aria-describedby="button-addon2"
          onChange={this.handChange}
          value={this.state.value}
          type="text"
          placeholder="Введите Задачу"
        />
        <ToDoAdd addItem={this.addItem} />
      </div>
    );
  }
}

export default ToDoInput;

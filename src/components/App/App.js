import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "../TodoList";
import ToDoHeader from "../ToDoHeader";
import ToDoInput from "../ToDoInput";

class App extends Component {
  maxId = 100;
  state = {
    todoData: [],
  };

  createAddItem = (text) => {
    return {
      text,
      id: this.maxId++,
      important: false,
      done: false,
    };
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createAddItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      // console.log(newArray);
      return {
        todoData: newArray,
      };
    });
  };

  inputItem = (e) => {
    this.setState({ value: e.target.value });
  };

  onToggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty(todoData, id, "done"),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <ToDoHeader />
        <ToDoInput addItem={this.addItem} />
        <div className="cards">
          <div className="card">
            <TodoList
              list={this.state.todoData}
              onDelete={this.deleteItem}
              onToggleImportant={this.onToggleImportant}
              onToggleDone={this.onToggleDone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

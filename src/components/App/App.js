import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "../TodoList";
import ToDoHeader from "../ToDoHeader";
import ToDoInput from "../ToDoInput";
import ItemStatus from "../ItemStatus";

class App extends Component {
  maxId = 1;
  state = {
    todoData: [],
    filter: "all",
  };

  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  onFilter = (filter) => {
    this.setState({ filter });
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
    const { todoData, filter } = this.state;
    console.log(todoData);
    const visitedToDo = this.filter(todoData, filter);
    console.log(visitedToDo);
    return (
      <div className="App">
        <ToDoHeader />
        <ItemStatus filter={this.filter} onFilter={this.onFilter} />
        <ToDoInput
          addItem={this.addItem}
          inputItem={this.inputItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <div className="cards">
          <div className="card">
            <TodoList
              list={visitedToDo}
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

import React, { Component } from "react";
import "./App.css";
const charMax = 50;

export class ToDo extends Component {
  state = {
    todos: undefined
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json =>
        this.setState({
          todos: json
        })
      )
      .catch(error => console.log(error));
  }

  toggleFinished = event => {
    const { todos } = this.state;
    const { clickedId } = event.currentTarget.dataset;
    const clickedIndex = todos.findIndex(
      item => item.id === parseInt(clickedId)
    );
    console.log(clickedId);

    todos[clickedIndex].completed = !todos[clickedIndex].completed;

    this.setState({
      todos: todos
    });
  };

  hideCompleted = () => {
    let { todos } = this.state;
    if (todos) {
      todos = todos.filter(item => !item.completed);
    }

    this.setState({
      todos
    });
  };

  sortCompleted = () => {
    const { todos } = this.state;
    todos.sort((a, b) => a.completed - b.completed);

    this.setState({
      todos
    });
  };

  clearAll = () => {
    this.setState({ todos: [] });
  };

  updateInputTodo = event => {
    let { titleTodo, counter } = this.state;
    titleTodo = event.target.value;
    counter = charMax - event.target.value.length;

    this.setState({
      titleTodo,
      counter
    });
  };

  newTodo = event => {
    const { todos, titleTodo } = this.state;
    let { idNumber, error, counter } = this.state;
    idNumber = Math.floor(Math.random() * 1000) + 200;
    const newTodo = {
      userId: 1,
      id: idNumber,
      title: titleTodo,
      completed: false
    };

    if (!titleTodo) {
      error = "Niste unijeli nista!";
    }

    if (titleTodo && counter < 0) {
      error = "Unijeli ste previse znakova!";
    }

    if (titleTodo && counter > 0) {
      todos.push(newTodo);
      this.mainInput.value = "";
      error = "";
    }

    this.setState({
      todos,
      error
    });
  };

  render() {
    const { todos, counter, error } = this.state;

    return (
      <main className="main wrapper">
        <header className="header">
          <h1>My To-Do List</h1>
          <button onClick={this.clearAll} className="btn">
            Clear all
          </button>
        </header>
        <div>
          Input character left {counter} / {charMax}{" "}
        </div>
        <div className="new">
          <input
            ref={ref => (this.mainInput = ref)}
            onChange={this.updateInputTodo}
            className="input"
            type="text"
          />
          <button onClick={this.newTodo} className="add btn">
            Add
          </button>
        </div>
        <div className="error">{error}</div>
        <nav>
          <ul className="filter-list">
            <li>
              <button onClick={this.hideCompleted}>Clear completed</button>
            </li>
            <li>
              <button onClick={this.sortCompleted}>Sort completed</button>
            </li>
          </ul>
        </nav>
        <div className="list">
          {todos
            ? todos.map(item => (
                <div
                  onClick={this.toggleFinished}
                  data-clicked-id={item.id}
                  key={item.id}
                  className={`${
                    item.completed ? "item item-finished" : "item"
                  } `}
                >
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-date">{item.id}</p>
                </div>
              ))
            : "No todos right now, check back later."}
        </div>
      </main>
    );
  }
}

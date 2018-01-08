import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './ToDoList';

class App extends Component {
  add () {
    return (1 + 2)
  }

  render () {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;

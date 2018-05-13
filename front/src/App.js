import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos:[]
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/todos")
    console.log(res.data)
    this.setState({todos: res.data || []})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>IoT Practice</h2>
        </div>
	<div
	</div>
	<ul>
	{this.state.todos.map((todo, index) => (
	  <li key={index}>{todo.title}</li>
	))}
	</ul>
      </div>
    );
  }
}

export default App;

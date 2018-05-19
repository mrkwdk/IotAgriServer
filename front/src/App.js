import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  constructor() {
    super();
    this.state = {
      datas:[]
    };
    this.update = this.update.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("/api/sensor")
    this.setState({datas: res.data || []})
  }

  update() {
    axios
    .get("/api/sensor")
    .then((res) => {
      this.setState({datas: res.data || []})
    });
  }  

  render() {
    return (
     <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>IoT Practice</h2>
        </div>
        <RaisedButton
          label="Update"
          onTouchTap={this.update}
        />
        <ul>
	{this.state.datas.map((data, index) => (
	  <li key={index}>{data.date} data={data.value}</li>
	))}
	</ul>
      </div>
     </MuiThemeProvider>
    );
  }
}

export default App;

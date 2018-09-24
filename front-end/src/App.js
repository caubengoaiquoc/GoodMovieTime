import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './containers/Home.js';
import axios from './axios';
import Login from './containers/Login.js';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:6969/api/auth').then(
      data => {        
        if(data.data) {
          this.setState({ username: data.data })}
        }
    ).catch(err => console.log(err))
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' render={(props) => {
            return <Home {...props} username={this.state.username} />
          }} />
          <Route path='/login' render={(props) => {
            return <Login {...props} />
          }} /></div>
      </BrowserRouter>
    );
  }
}

export default App;

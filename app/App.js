import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropdown from './components/Dropdown'
import './css/app.css';

const states = require('../db.json');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      states: null,
      isLoading: false
    } 
  }
  componentWillMount(){
    //getStates().then((data)=>{
      this.setState({
        states:states
      });
    //});

  }

  render() {
    return <Dropdown states={this.state.states}/>
  }
}

render(<App/>, document.getElementById('app'))
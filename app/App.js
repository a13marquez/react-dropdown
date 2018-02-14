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
    this.setState({isLoading:true});
    getStates().then((data)=>{
      this.setState({
        states:data,
        isLoading:false
      });
    });

  }

  render() {
    if (!isLoading){
      return <Dropdown states={this.state.states}/>
    }
    return;
  }
}

render(<App/>, document.getElementById('app'))
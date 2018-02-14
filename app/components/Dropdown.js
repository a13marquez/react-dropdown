import React, { Component } from 'react';

export default class Dropdown extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    var index = e.target.selectedIndex;
    this.props.handleSelect(e.target[index].text);
  }
  render(){
<<<<<<< HEAD
=======
    let keys = Object.keys(this.props.states);
>>>>>>> 8f25c4a15ed3bacef8672519eddb012d57f0f1fa
    let drawOptions = (states) => {
      let optionArray = [];
      for (let state in states) {
        optionArray = [...optionArray, 
          <option key={state} value={state}>{states[state]}</option>]
      }
      return optionArray
    }
    return (
      <select onChange={this.handleChange}>
       {drawOptions(this.props.states)}
      </select>
    )
  }
}
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
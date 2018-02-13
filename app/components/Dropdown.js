import React, { Component } from 'react';

export default class Dropdown extends Component{
  constructor(props){
    super(props)
  }
  render(){
    debugger;
    let keys = Object.keys(this.props.states);
    let drawOptions = (states) => {
      debugger;
      let optionArray = [];
      for (let state in states) {
        optionArray = [...optionArray, 
          <option key={state} value={state}>{states[state]}</option>]
      }
      return optionArray
    }
    return (
      <select>
       {drawOptions(this.props.states)}
      </select>
    )
  }
}
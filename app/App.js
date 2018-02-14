import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropdown from './components/Dropdown';
import { getStates } from './API/states';
import './css/app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      states: null,
      isLoading: false,
      stateName:''
    }
    this.handleSelect = this.handleSelect.bind(this); 
  }
  componentWillMount(){
    this.setState({isLoading:true});
    getStates().then((data)=>{
      this.setState({
        states:data,
        isLoading: false
      });
    });
  }

  handleSelect(stateName) {
    this.setState({stateName:stateName});
  }


  render() {
    let { isLoading, stateName } = this.state;  

    if(!isLoading){
      return(
      <div>
        <Dropdown
          handleSelect = {this.handleSelect} 
          states={this.state.states}/>
        <span>{stateName ? `Selected state is: ${stateName}` : ''}</span>
          
      </div>)
    }
    return null;
  }
}

render(<App/>, document.getElementById('app'))
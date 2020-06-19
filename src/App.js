import React, { Component } from 'react';
import './App.css';
import Button from './components/button'
import Input from './components/input'
import ClearButton from './components/clear'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };  
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val});
  }

  add  = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "add";
  }

  subtract  = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  }

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  }

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  }

  calculate = () => {
    this.state.currentNumber = this.state.input;

    if(this.state.operator == 'add'){
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    }
    else if(this.state.operator == 'subtract'){
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    }
    else if(this.state.operator == 'multiply'){
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    }
    else if(this.state.operator == 'divide'){
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    }
  }


  clearInput = () => {
    this.setState({ input: ""});
  }


  render() {
    return (
      <div className="App">

        <header className="App-header"> Calculator </header>

        <div  className="App-calculator">
          <div  className="calculator">
            <div className="row">
            <Input>{this.state.input}</Input>
            </div>
            <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
            </div>
            <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
            </div>
            <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.subtract}>-</Button>
            </div>
            <div className="row">
            <ClearButton  handleClear={this.clearInput}>clr</ClearButton>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.calculate}>=</Button>
            <Button handleClick={this.add}>+</Button>
            </div>
          </div>
        </div>

        <footer className="App-footer">
          Author: Shaurya Singh
        </footer>

      </div>
    );
  }
}

export default App;

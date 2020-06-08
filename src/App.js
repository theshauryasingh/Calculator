import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header"> Calculator </header>

        <div  className="App-calculator">
          <div  className="calculator">
            <div className="row">
              <span className="App-calculator-display">0</span>
            </div>
            <div className="row">
            <button className="App-calculator-button">7</button>
            <button className="App-calculator-button">8</button>
            <button className="App-calculator-button">9</button>
            <button className="App-calculator-button">/</button>
            </div>
            <div className="row">
            <button className="App-calculator-button">4</button>
            <button className="App-calculator-button">5</button>
            <button className="App-calculator-button">6</button>
            <button className="App-calculator-button">*</button>
            </div>
            <div className="row">
            <button className="App-calculator-button">1</button>
            <button className="App-calculator-button">2</button>
            <button className="App-calculator-button">3</button>
            <button className="App-calculator-button">-</button>
            </div>
            <div className="row">
            <button className="App-calculator-button">clr</button>
            <button className="App-calculator-button">0</button>
            <button className="App-calculator-button">=</button>
            <button className="App-calculator-button">+</button>
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

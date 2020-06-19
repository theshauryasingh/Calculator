import React, { Component } from 'react';
import './button.css'

class Button extends Component {
    render() {
        return (
            <button 
                className="App-calculator-button"
                onClick={() => this.props.handleClick
                (this.props.children)}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
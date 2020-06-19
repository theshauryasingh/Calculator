import React, { Component } from "react";
import "./button.css";

class ClearButton extends Component {

  render() {
    return( 
      <button 
        className="clear-btn"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </button>
    )
  }
}

export default ClearButton;
import { useState } from "react";
import React from "react";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.setInput(e.target.value);
    console.log(this.props.input);
  }

  render() {
    return (
      <div>
        <textarea id="editor" onChange={this.handleInput}></textarea>
      </div>
    );
  }
}

export default Editor;

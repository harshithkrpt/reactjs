import React, { Component, createRef } from "react";

class InputRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  componentDidMount() {
    // DO NOT SET STATE HERE UNCONDITIONALLY THAT WILL RESULT IN RE-RENDERING AND EVETUALLY INFINITE LOOP
  }

  focus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <label htmlFor="Ref">Ref</label>
        <input onFocus={this.focus} type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default InputRef;

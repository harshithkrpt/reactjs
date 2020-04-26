import React, { Component, createRef } from "react";

export default class OuterClickExample extends Component {
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      isOpen: false,
    };
    // REFERENCE
    this.divRef = createRef();
  }

  componentDidMount() {
    window.addEventListener("click", this.onOutsideClickHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onOutsideClickHandler);
  }

  onOutsideClickHandler = (e) => {
    if (this.state.isOpen && !this.divRef.current.contains(e.target))
      this.setState({ isOpen: false });
  };

  handleClick = (e) => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div ref={this.divRef}>
        <p>---------------</p>
        <button onClick={this.handleClick}>Click</button>
        <p>---------------</p>
        {this.state.isOpen && (
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ul>
        )}
      </div>
    );
  }
}

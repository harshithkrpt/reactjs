import React from "react";
import { logProps } from "../hoc/logProps";

// const Button = React.createRef((props, ref) => {
//   return <button ref={ref}>{props.children}</button>;
// });

class Button extends React.Component {
  render() {
    return <button {...this.props}>{this.props.children}</button>;
  }
}

export default logProps(Button);

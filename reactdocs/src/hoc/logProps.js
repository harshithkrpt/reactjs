import React from "react";

export function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old Props", prevProps);
      console.log("new Props", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent {...rest} ref={forwardedRef} />;
    }
  }
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

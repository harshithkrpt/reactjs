import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      mm: 25,
      ss: 0,
      isrunning: false,
      timeoutId: null,
      isbreak: false
    };
  }

  handleReset = e => {
    //  TODO   Stop the Counter
    if (this.state.timeoutId) {
      clearInterval(this.state.timeoutId);
    }
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      mm: 25,
      ss: 0,
      isrunning: false,
      timeoutId: null
    });
  };

  breakDecrement = e => {
    if (this.state.breakLength > 1) {
      this.setState(state => {
        return { breakLength: state.breakLength - 1 };
      });
    }
  };

  breakIncrement = e => {
    if (this.state.breakLength < 60) {
      this.setState(state => {
        return { breakLength: state.breakLength + 1 };
      });
    }
  };

  sessionDecrement = e => {
    if (this.state.sessionLength > 1) {
      this.setState(state => {
        return { sessionLength: state.sessionLength - 1 };
      });
    }
  };

  sessionIncrement = e => {
    if (this.state.sessionLength < 60) {
      this.setState(state => {
        return { sessionLength: state.sessionLength + 1 };
      });
    }
  };

  startStopTimer = e => {
    if (this.state.isrunning) {
      //       If Running Stop the Server
      clearInterval(this.state.timeoutId);
      this.setState(state => {
        return {
          isrunning: false,
          timeoutId: null
        };
      });
    } else {
      if (this.state.ss === 0) {
        this.setState(state => {
          return {
            mm: state.sessionLength,
            isrunning: true
          };
        });
      } else {
        this.setState({
          isrunning: true
        });
      }

      const id = setInterval(() => {
        this.setState(state => {
          if (state.mm === state.sessionLength && state.ss === 0) {
            return {
              mm: state.mm - 1,
              ss: 59
            };
          } else if (state.ss === 0 && state.mm > 0) {
            return {
              mm: state.mm - 1,
              ss: 59
            };
          } else if (state.ss > 0) {
            return {
              ss: state.ss - 1
            };
          } else {
            //             stop the timer
            if (state.isbreak) {
              return {
                mm: state.sessionLength,
                isbreak: false
              };
            } else {
              return {
                mm: state.breakLength,
                isbreak: true
              };
            }
          }
        });
      }, 1000);

      this.setState({
        timeoutId: id
      });
      console.log("TimeoutID : ", id);
    }
  };

  render() {
    return (
      <div id="clock">
        <div id="break">
          <h2 id="break-label">Break Length</h2>
          <button id="break-decrement" onClick={this.breakDecrement}>
            break-decrement
          </button>
          <div id="break-length">{this.state.breakLength}</div>
          <button id="break-increment" onClick={this.breakIncrement}>
            break-increment
          </button>
        </div>
        <div id="session">
          <h2 id="session-label">Session Length</h2>
          <button id="session-decrement" onClick={this.sessionDecrement}>
            session-decrement
          </button>
          <div id="session-length">{this.state.sessionLength}</div>
          <button id="session-increment" onClick={this.sessionIncrement}>
            session-increment
          </button>
        </div>

        <div id="timer">
          <h2 id="timer-label">Session</h2>
          <div id="time-left">
            {this.state.mm < 10 ? `0${this.state.mm}` : this.state.mm}:
            {this.state.ss < 10 ? `0${this.state.ss}` : this.state.ss}
          </div>
          <button id="start_stop" onClick={this.startStopTimer}>
            Start|Stop
          </button>
          <button id="reset" onClick={this.handleReset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;

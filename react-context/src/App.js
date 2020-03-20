import React from "react";

const ThemeContext = React.createContext("black");

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="green">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <button style={{ backgroundColor: this.context }}>App</button>;
  }
}

export default App;

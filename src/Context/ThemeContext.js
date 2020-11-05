import React, { Component } from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    isNightModeOn: true,
    lightTheme: { main: "red", bg: "white", secondbg: "white", text: "black" },
    darkTheme: {
      main: "#1E1E1E",
      bg: "#121212",
      secondbg: "#1E1E1E",
      text: "white",
    },
  };

  toggleTheme = () => {
    this.setState({ isNightModeOn: !this.state.isNightModeOn });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

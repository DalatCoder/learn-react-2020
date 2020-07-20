import React from "react";
import ReactDOM from "react-dom";

// Create component
const App = () => {
  return <div>Hello world!</div>;
};

// Innsert component into DOM
ReactDOM.render(<App />, document.querySelector("#root"));

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state object
    this.state = { lat: null, errorMessage: "" };

    // Don't put async operation in render()
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude } = position.coords;
        console.log(latitude);

        this.setState({ lat: latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // Required for every React component (class-base)
  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

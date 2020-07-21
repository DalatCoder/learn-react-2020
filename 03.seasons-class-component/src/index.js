import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state object
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    const onSuccess = position => {
      this.setState({ lat: position.coords.latitude });
    };
    const onFailure = err => {
      this.setState({ errorMessage: err.message });
    };

    window.navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
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

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state object
    this.state = { lat: null, errorMessage: "" };
  }

  // state = { lat: null, errorMessage: '' }

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
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request!" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

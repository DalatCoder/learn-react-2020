import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state object
    this.state = { lat: null };

    // Don't put async operation in render()
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude } = position.coords;
        console.log(latitude);

        this.setState({ lat: latitude });
      },
      err => console.log(err)
    );
  }

  // Required for every React component (class-base)
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

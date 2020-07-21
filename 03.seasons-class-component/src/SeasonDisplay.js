import React from "react";

const SeasonDisplay = props => {
  const { lat } = props;

  return (
    <div>
      <h1>From season display component</h1>
      <p>Latitue: {lat}</p>
    </div>
  );
};

export default SeasonDisplay;

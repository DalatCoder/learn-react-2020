import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const { lat } = props;
  const month = new Date().getMonth();

  const season = getSeason(lat, month);
  const text =
    season === "winter" ? "Burr, it is chilly!" : `Let's hit the beach!`;

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;

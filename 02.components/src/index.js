import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

// Create component
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">Johny Sins</a>
          <div className="metadata">
            <span className="date">Today at 8:00AM</span>
          </div>
          <div className="text">Have a nice day!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">Emily</a>
          <div className="metadata">
            <span className="date">Today at 3:00PM</span>
          </div>
          <div className="text">Great article!</div>
        </div>
      </div>
    </div>
  );
};

// Innsert component into DOM
ReactDOM.render(<App />, document.querySelector("#root"));

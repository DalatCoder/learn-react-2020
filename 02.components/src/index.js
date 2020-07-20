import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

// Create component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 2:00AM"
        text="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 4:00PM"
        text="Have a nice day!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 5:00PM"
        text="Great sharing!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

// Innsert component into DOM
ReactDOM.render(<App />, document.querySelector("#root"));

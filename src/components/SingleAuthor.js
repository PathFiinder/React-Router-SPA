import React from "react";
import "../styles/SingleAuthor.sass";

const SingleAuthor = props => {
  return (
    <article className="single__author author">
      <h2 className="author__name">
        {props.data.firstName} {props.data.lastName}
      </h2>
      <p className="author__age">Age: {props.data.age}</p>
      <p className="author__phone">Phone: {props.data.phone}</p>
      <img
        src={props.data.picture}
        alt="Author img"
        className="author__image"
      />
    </article>
  );
};

export default SingleAuthor;

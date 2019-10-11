import React from "react";
import "../styles/SingleArticle.sass";

const SingleArticle = props => {
  console.log(props.data.author);
  return (
    <div className="page__singleArticle singleArticle">
      <h2 className="singleArticle__title">{props.data.title}</h2>
      <h3 className="singleArticle__author"><span className="singleArticle__author--bold">Author: </span>{props.data.author}</h3>
      <p className="singleArticle__content">{props.data.content}</p>
      <img
        src={props.data.urlToImage}
        alt="Single Article Img"
        className="singleArticle__image"
      />
    </div>
  );
};

export default SingleArticle;

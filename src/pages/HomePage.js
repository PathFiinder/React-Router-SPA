import React, { Component } from "react";
import SingleArticle from "../components/SingleArticle.js";
import "../styles/HomePage.sass"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-11&sortBy=publishedAt&apiKey=e573c6927f3e491daac57557f84289ce"
    )
      .then(resp => resp.json())
      .then(data => {
        const articleList = [];
        data.articles.forEach(single => {
          if (single.author !== "" && single.author !== null) {
            articleList.push(single);
          }
        });
        this.setState({
          articleList: articleList
        });
      });
  }

  render() {
    const article = this.state.articleList.map((item, index) => {
      if (index < 3) {
        return <SingleArticle data={item} key={item.url} />;
      }
      return true;
    });

    return <div className="page__articles">{article}</div>;
  }
}

export default HomePage;

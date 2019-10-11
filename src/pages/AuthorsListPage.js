import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorsListPage.sass";

class AuthorsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorsList: [
        {
          firstName: "Kristin",
          lastName: "Russell",
          age: 25,
          phone: "01-6793-0381",
          picture: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        {
          firstName: "Taylor",
          lastName: "Willis",
          age: 53,
          phone: "03-7398-5639",
          picture: "https://randomuser.me/api/portraits/women/77.jpg"
        },
        {
          firstName: "Mehran",
          lastName: "Keunen",
          age: 23,
          phone: "(673)-686-0436",
          picture: "https://randomuser.me/api/portraits/men/40.jpg"
        },
        {
          firstName: "Nina",
          lastName: "Fernandez",
          age: 45,
          phone: "077 472 64 07",
          picture: "https://randomuser.me/api/portraits/women/87.jpg"
        },
        {
          firstName: "Lubertus",
          lastName: "Westphal",
          age: 33,
          phone: "(421)-211-5916",
          picture: "https://randomuser.me/api/portraits/men/36.jpg"
        }
      ]
    };
  }

  render() {
    const list = this.state.authorsList.map(author => (
      <li className="listItems__item" key={author.firstName}>
        <Link to={{ pathname: `/author/${author.lastName}`, state: author }}>
          {author.firstName} {author.lastName}
        </Link>
      </li>
    ));
    return (
      <div className="page__listItems listItems">
        <h2 className="listItems__title">Authors list: </h2>
        <div className="listItems__listContainer">
          <ul className="listItems__list">{list}</ul>
        </div>
      </div>
    );
  }
}

export default AuthorsListPage;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import '../styles/Header.sass'
const apiKey = "13907675-745d160bf7fa0da5743b52e68";


class Header extends Component {
  constructor(props){
      super(props);
      this.state = {
          imageUrl: []
      }
  }

  componentDidMount() {
    fetch(`https://pixabay.com/api/?key=${apiKey}`)
    .then(resp => resp.json())
    .then(data => {
        this.setState({
            imageUrl: data.hits
        })
    });

  }
  render() {
    const {imageUrl} = this.state
    const homeImage = Math.floor(Math.random() * 5);
    const itemsImage = Math.floor(Math.random() * 10);
    const contactImage = Math.floor(Math.random() * 15);
    return (
      <>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
             <img className="header__image" alt="Header img home" src={imageUrl.length !== 0 ? imageUrl[homeImage].largeImageURL : ""}/>
            )}
          ></Route>
          <Route
            path="/items"
            render={() => (
             <img className="header__image" alt="Header img items" src={imageUrl.length !== 0 ? imageUrl[itemsImage].largeImageURL : ""}/>
            )}
          ></Route>
          <Route
            path="/contact"
            render={() => (
             <img className="header__image" alt="Header img contact" src={imageUrl.length !== 0 ? imageUrl[contactImage].largeImageURL : ""}/>
            )}
          ></Route>
          <Route
            render={() => (
             <img className="header__image" alt="Header img default" src={imageUrl.length !== 0 ? imageUrl[19].largeImageURL : ""}/>
            )}
          ></Route>

        </Switch>
      </>
    );
  }
}

export default Header;

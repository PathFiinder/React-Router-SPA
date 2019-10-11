import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.sass";
import Header from "./Header.js";
import Navigation from "./Navigation.js";
import Page from "./Page.js";
import Footer from "./Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="header">
            <Header />
          </header>
          <main className="main">
            <aside className="main__navigation">
              <Navigation />
            </aside>
            <section className="main__page">
              <Page />
            </section>
          </main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

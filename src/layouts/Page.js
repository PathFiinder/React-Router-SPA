import React from "react";

import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import AuthorsListPage from "../pages/AuthorsListPage.js";
import AuthorPage from "../pages/AuthorPage.js";
import ContactPage from "../pages/ContactPage.js";
import ErrorPage from "../pages/ErrorPage.js";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/authors" component={AuthorsListPage}></Route>
        <Route path="/author/:id" component={AuthorPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;

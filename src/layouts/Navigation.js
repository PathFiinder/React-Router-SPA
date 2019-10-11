import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.sass";

const linkList = [
  { name: "Home", path: "/", exact: true },
  { name: "Items", path: "/items" },
  { name: "contact", path: "/contact" }
];

const Navigation = () => {
  const link = linkList.map(item => (
    <li key={item.name} className="navigation__item">
      <NavLink to={item.path} className="navigation__link" exact={item.exact ? true : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="navigation">
      <ul className="navigation__list">{link}</ul>
    </nav>
  );
};

export default Navigation;

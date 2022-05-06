import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/me">
            Sergio Garcia Campderrich
          </Link>
        </li>
        <li><a href="https://github.com/gio8tisu"><i uk-icon="github" /></a></li>
        <li><a href="https://www.linkedin.com/in/sergio-g-campderrich/"><i uk-icon="linkedin" /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;

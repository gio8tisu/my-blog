import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/writer/sergio-g-campderrich">About Me</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <div className="uk-navbar-item uk-text-bold">
                    BLOG CATEGORIES:
                  </div>
                  <ul className="uk-navbar-nav">
                    {categories.data.filter((category) => category.attributes.articles.data.length > 0).map((category) => {
                      return (
                        <li key={category.attributes.slug}>
                          <Link
                            to={`/category/${category.attributes.slug}`}
                            className="uk-link-reset"
                          >
                            {category.attributes.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;

import React from "react";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import WRITER_QUERY from "../../queries/writer/writer";

const Me = () => {
  return (
    <Query query={WRITER_QUERY} slug="sergio-g-campderrich">
      {({ data: { writers } }) => {
        if (writers.data.length) {
          const { picture } = writers.data[0].attributes;
          const pictureUrl =
            !picture.data ? "" :
            process.env.NODE_ENV !== "development"
              ? picture.data.attributes.url
              : process.env.REACT_APP_BACKEND_URL +
                picture.data.attributes.url;

          return (
            <div>
              <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                uk-parallax="bgy: -200"
                data-src={pictureUrl}
                data-srcset={pictureUrl}
                data-uk-img
              >
              </div>
              <div className="uk-section">
                <div className="uk-container uk-container-small" id="about-me">
                  <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                    {writers.data[0].attributes.about}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Me;

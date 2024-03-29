import React from "react";
import { useQuery } from "@apollo/client";

const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug }
  });

  if (loading) return <div className="uk-margin-small-right" uk-spinner="ratio: 3"></div>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;

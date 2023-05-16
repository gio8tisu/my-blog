import { gql } from "@apollo/client";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      data {
        attributes {
          slug
          name
	  articles {
	    data {
	      id
	    }
	  }
        }
      }
    }
  }
`;

export default CATEGORIES_QUERY;

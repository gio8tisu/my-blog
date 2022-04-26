import { gql } from "@apollo/client";

const WRITER_QUERY = gql`
  query Writer($slug: String!) {
    writers(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          name
          email
          about
          picture {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default WRITER_QUERY;

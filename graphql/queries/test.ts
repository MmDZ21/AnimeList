import { gql } from "@apollo/client";

export const query = gql`
  query {
    me {
      name
    }
  }
`;

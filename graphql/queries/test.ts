import { gql } from "@apollo/client";

export const test = gql`
  query {
    me {
      name
    }
  }
`;

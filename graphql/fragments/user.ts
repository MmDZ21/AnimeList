// graphql/fragments/user.ts
import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    name
    email
    avatar
  }
`;

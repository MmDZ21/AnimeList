// graphql/mutations/login.ts
import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragments/user";

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      access_token
      expires_in
      refresh_token
      token_type
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;

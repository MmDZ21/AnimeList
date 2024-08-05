// graphql/mutations/refreshToken.ts
import { gql } from "@apollo/client";

export const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($input: RefreshTokenInput!) {
    refreshToken(input: $input) {
      access_token
      expires_in
      refresh_token
      token_type
    }
  }
`;

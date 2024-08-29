/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment AnimeFragment on Anime {\n  mal_id\n  dic_body\n  dic_image_url\n  dic_title\n  dic_title_en\n  dic_title_jp\n  dic_title_other\n  title_fa\n  animelistScore {\n    score\n    count_user\n  }\n  vipSubCount\n  exclusiveSubCount\n  userSubCount\n  dic_score\n  post_hit\n  dic_types\n  dic_kayfet\n  dic_episodes\n  dic_duration\n  dic_last_update\n  dic_aired\n  dic_broadcast\n  dic_status\n  movie_desc {\n    body\n  }\n  genre_pivot {\n    id\n    name_fa\n    name_en\n    slug\n    backdrop\n  }\n  anime_links {\n    id\n    anime_id\n    link\n    quality\n    ep\n    size\n    subtitle_link\n    subtitle_name\n    directory_links {\n      directory_id\n      link\n      quality\n      ep\n      size\n      subtitle_link\n      subtitle_name\n      signedLink\n    }\n  }\n  characters {\n    id\n    name\n    image_url\n  }\n  related\n  recommendation\n  trailers {\n    title\n    online_play\n  }\n}": types.AnimeFragmentFragmentDoc,
    "fragment UserFragment on User {\n  id\n  name\n  email\n  avatar\n}": types.UserFragmentFragmentDoc,
    "mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    access_token\n    expires_in\n    refresh_token\n    token_type\n    user {\n      ...UserFragment\n    }\n  }\n}": types.LoginDocument,
    "query GetAnimeById($id: ID!) {\n  anime(id: $id) {\n    ...AnimeFragment\n  }\n}": types.GetAnimeByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AnimeFragment on Anime {\n  mal_id\n  dic_body\n  dic_image_url\n  dic_title\n  dic_title_en\n  dic_title_jp\n  dic_title_other\n  title_fa\n  animelistScore {\n    score\n    count_user\n  }\n  vipSubCount\n  exclusiveSubCount\n  userSubCount\n  dic_score\n  post_hit\n  dic_types\n  dic_kayfet\n  dic_episodes\n  dic_duration\n  dic_last_update\n  dic_aired\n  dic_broadcast\n  dic_status\n  movie_desc {\n    body\n  }\n  genre_pivot {\n    id\n    name_fa\n    name_en\n    slug\n    backdrop\n  }\n  anime_links {\n    id\n    anime_id\n    link\n    quality\n    ep\n    size\n    subtitle_link\n    subtitle_name\n    directory_links {\n      directory_id\n      link\n      quality\n      ep\n      size\n      subtitle_link\n      subtitle_name\n      signedLink\n    }\n  }\n  characters {\n    id\n    name\n    image_url\n  }\n  related\n  recommendation\n  trailers {\n    title\n    online_play\n  }\n}"): (typeof documents)["fragment AnimeFragment on Anime {\n  mal_id\n  dic_body\n  dic_image_url\n  dic_title\n  dic_title_en\n  dic_title_jp\n  dic_title_other\n  title_fa\n  animelistScore {\n    score\n    count_user\n  }\n  vipSubCount\n  exclusiveSubCount\n  userSubCount\n  dic_score\n  post_hit\n  dic_types\n  dic_kayfet\n  dic_episodes\n  dic_duration\n  dic_last_update\n  dic_aired\n  dic_broadcast\n  dic_status\n  movie_desc {\n    body\n  }\n  genre_pivot {\n    id\n    name_fa\n    name_en\n    slug\n    backdrop\n  }\n  anime_links {\n    id\n    anime_id\n    link\n    quality\n    ep\n    size\n    subtitle_link\n    subtitle_name\n    directory_links {\n      directory_id\n      link\n      quality\n      ep\n      size\n      subtitle_link\n      subtitle_name\n      signedLink\n    }\n  }\n  characters {\n    id\n    name\n    image_url\n  }\n  related\n  recommendation\n  trailers {\n    title\n    online_play\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserFragment on User {\n  id\n  name\n  email\n  avatar\n}"): (typeof documents)["fragment UserFragment on User {\n  id\n  name\n  email\n  avatar\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    access_token\n    expires_in\n    refresh_token\n    token_type\n    user {\n      ...UserFragment\n    }\n  }\n}"): (typeof documents)["mutation Login($input: LoginInput!) {\n  login(input: $input) {\n    access_token\n    expires_in\n    refresh_token\n    token_type\n    user {\n      ...UserFragment\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAnimeById($id: ID!) {\n  anime(id: $id) {\n    ...AnimeFragment\n  }\n}"): (typeof documents)["query GetAnimeById($id: ID!) {\n  anime(id: $id) {\n    ...AnimeFragment\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
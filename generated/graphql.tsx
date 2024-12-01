import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type Actor = {
  __typename?: 'Actor';
  name?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
};

export type Anime = {
  __typename?: 'Anime';
  al_score?: Maybe<Scalars['Int']['output']>;
  al_score_count?: Maybe<Scalars['Int']['output']>;
  anilist_image_url?: Maybe<Scalars['String']['output']>;
  anilist_popularity?: Maybe<Scalars['Int']['output']>;
  anilist_score?: Maybe<Scalars['Int']['output']>;
  anime_links: Array<DbAnimeLinks>;
  characters: Array<Character>;
  dic_aired_from?: Maybe<Scalars['String']['output']>;
  dic_aired_to?: Maybe<Scalars['String']['output']>;
  dic_body?: Maybe<Scalars['String']['output']>;
  dic_body_normalized?: Maybe<Scalars['String']['output']>;
  dic_broadcast?: Maybe<Scalars['String']['output']>;
  dic_duration?: Maybe<Scalars['String']['output']>;
  dic_episodes?: Maybe<Scalars['String']['output']>;
  dic_kayfet?: Maybe<Scalars['String']['output']>;
  dic_last_update?: Maybe<Scalars['String']['output']>;
  dic_score?: Maybe<Scalars['String']['output']>;
  dic_status?: Maybe<Scalars['Int']['output']>;
  dic_title?: Maybe<Scalars['String']['output']>;
  dic_title_en?: Maybe<Scalars['String']['output']>;
  dic_title_jp?: Maybe<Scalars['String']['output']>;
  dic_title_other?: Maybe<Scalars['String']['output']>;
  dic_types?: Maybe<Scalars['Int']['output']>;
  genres: Array<Categorie>;
  id: Scalars['ID']['output'];
  mal_id: Scalars['ID']['output'];
  mal_image_url?: Maybe<Scalars['String']['output']>;
  mal_popularity?: Maybe<Scalars['Int']['output']>;
  mal_rank?: Maybe<Scalars['Int']['output']>;
  movie_desc?: Maybe<MovieDesc>;
  post_hit?: Maybe<Scalars['Int']['output']>;
  post_title?: Maybe<Scalars['String']['output']>;
  recommendation?: Maybe<Scalars['String']['output']>;
  related?: Maybe<Scalars['String']['output']>;
  season_year?: Maybe<Scalars['String']['output']>;
  seo_desc?: Maybe<Scalars['String']['output']>;
  title_fa?: Maybe<Scalars['String']['output']>;
  trailers: Array<AnimeTrailer>;
  wide_image?: Maybe<Scalars['String']['output']>;
};


export type AnimeGenresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type AnimeAdvancedSearch = {
  age?: InputMaybe<Scalars['Int']['input']>;
  dic_score?: InputMaybe<Scalars['Int']['input']>;
  dic_status?: InputMaybe<Scalars['Int']['input']>;
  dic_types?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_year?: InputMaybe<Scalars['String']['input']>;
  min_year?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of Anime items. */
export type AnimePaginator = {
  __typename?: 'AnimePaginator';
  /** A list of Anime items. */
  data: Array<Anime>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AnimeSchedule = {
  __typename?: 'AnimeSchedule';
  anime?: Maybe<Anime>;
  date: Scalars['String']['output'];
  episode?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['String']['output'];
  week_day: Scalars['String']['output'];
};

export type AnimeTrailer = {
  __typename?: 'AnimeTrailer';
  online_play?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AnimelistScore = {
  __typename?: 'AnimelistScore';
  count_user?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['String']['output']>;
};

export type ApplicationSlider = {
  __typename?: 'ApplicationSlider';
  body?: Maybe<Scalars['String']['output']>;
  cover_image?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  type_id?: Maybe<Scalars['Int']['output']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_in?: Maybe<Scalars['Int']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Beloved = {
  __typename?: 'Beloved';
  add_to_list?: Maybe<Scalars['Int']['output']>;
  anime: Anime;
  anime_id?: Maybe<Scalars['ID']['output']>;
  array?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notifications?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

/** A paginated list of Beloved items. */
export type BelovedPaginator = {
  __typename?: 'BelovedPaginator';
  /** A list of Beloved items. */
  data: Array<Beloved>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Categorie = {
  __typename?: 'Categorie';
  backdrop?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name_en?: Maybe<Scalars['String']['output']>;
  name_fa?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type Character = {
  __typename?: 'Character';
  id?: Maybe<Scalars['ID']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  replies: Array<Comment>;
  replies_count: Scalars['Int']['output'];
  spoil?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['ID']['output']>;
};

/** A paginated list of Comment items. */
export type CommentPaginator = {
  __typename?: 'CommentPaginator';
  /** A list of Comment items. */
  data: Array<Comment>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CreatePaymentResponse = {
  __typename?: 'CreatePaymentResponse';
  action?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
};

export type DbAnimeDirectoryLinks = {
  __typename?: 'DbAnimeDirectoryLinks';
  directory_id: Scalars['ID']['output'];
  ep?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  quality?: Maybe<Scalars['String']['output']>;
  signedLink?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  subtitle_link?: Maybe<Scalars['String']['output']>;
  subtitle_name?: Maybe<Scalars['String']['output']>;
};

export type DbAnimeLinks = {
  __typename?: 'DbAnimeLinks';
  anime_id: Scalars['ID']['output'];
  directory_links: Array<DbAnimeDirectoryLinks>;
  ep?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  quality?: Maybe<Scalars['String']['output']>;
  signedLink?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  subtitle_link?: Maybe<Scalars['String']['output']>;
  subtitle_name?: Maybe<Scalars['String']['output']>;
};

export type DeviceIdInput = {
  deviceID: Scalars['String']['input'];
};

export type DownloadLink = {
  __typename?: 'DownloadLink';
  directory_links: Array<DbAnimeDirectoryLinks>;
  encode?: Maybe<Scalars['String']['output']>;
  episode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  quality?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  session?: Maybe<Scalars['String']['output']>;
  signedLink?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type GenericResponse = {
  __typename?: 'GenericResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Genre = {
  __typename?: 'Genre';
  backdrop?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name_en?: Maybe<Scalars['String']['output']>;
  name_fa?: Maybe<Scalars['String']['output']>;
};

export type HomePageListItemAnime = {
  __typename?: 'HomePageListItemAnime';
  appBarHeader?: Maybe<Scalars['String']['output']>;
  appBarQuery?: Maybe<Scalars['String']['output']>;
  content: Array<Anime>;
  hasMore: Scalars['Int']['output'];
  headerText: Scalars['String']['output'];
  parameters?: Maybe<Scalars['String']['output']>;
  route?: Maybe<Scalars['String']['output']>;
};

export type HomePageListItemMovie = {
  __typename?: 'HomePageListItemMovie';
  appBarHeader?: Maybe<Scalars['String']['output']>;
  appBarQuery?: Maybe<Scalars['String']['output']>;
  content: Array<Movie>;
  hasMore: Scalars['Int']['output'];
  headerText: Scalars['String']['output'];
  parameters?: Maybe<Scalars['String']['output']>;
  route?: Maybe<Scalars['String']['output']>;
};

export type InsertCommentInput = {
  anime_id: Scalars['ID']['input'];
  body: Scalars['String']['input'];
  parent_id: Scalars['ID']['input'];
  spoil: Scalars['Int']['input'];
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key_1: Scalars['String']['output'];
  key_2: Scalars['String']['output'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Membership = {
  __typename?: 'Membership';
  desc: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  timing: Scalars['Int']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  animelistScore?: Maybe<AnimelistScore>;
  character: Array<Phx_Character>;
  country?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  download_links: Array<DownloadLink>;
  episode?: Maybe<Scalars['String']['output']>;
  genres: Array<Genre>;
  id: Scalars['ID']['output'];
  imdb_id?: Maybe<Scalars['String']['output']>;
  imdb_rating?: Maybe<Scalars['String']['output']>;
  kayfet?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['String']['output']>;
  movie_desc?: Maybe<MovieDesc>;
  movie_status?: Maybe<Scalars['Int']['output']>;
  playback_status?: Maybe<Scalars['Int']['output']>;
  plot?: Maybe<Scalars['String']['output']>;
  post_hit?: Maybe<Scalars['Int']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
  rated?: Maybe<Scalars['String']['output']>;
  released?: Maybe<Scalars['String']['output']>;
  runtime?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};


export type MovieCharacterArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MovieGenresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type MovieAdvancedSearch = {
  actor?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_year?: InputMaybe<Scalars['String']['input']>;
  min_year?: InputMaybe<Scalars['String']['input']>;
  playback_status?: InputMaybe<Scalars['Int']['input']>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type MovieDesc = {
  __typename?: 'MovieDesc';
  body?: Maybe<Scalars['String']['output']>;
};

export type MovieDirectoryLink = {
  __typename?: 'MovieDirectoryLink';
  directory_id: Scalars['ID']['output'];
  ep?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  quality?: Maybe<Scalars['String']['output']>;
  signedLink?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  subtitle_link?: Maybe<Scalars['String']['output']>;
  subtitle_name?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of Movie items. */
export type MoviePaginator = {
  __typename?: 'MoviePaginator';
  /** A list of Movie items. */
  data: Array<Movie>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type MovieUpsertBelovedInput = {
  add_to_list: Scalars['Int']['input'];
  download: Scalars['Int']['input'];
  episodes: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  movie_id: Scalars['ID']['input'];
  notifications: Scalars['Int']['input'];
  score: Scalars['Int']['input'];
  status: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPaymentRequest: CreatePaymentResponse;
  deleteBeloved: Beloved;
  deleteMovieBeloved: PhxBloved;
  forgotPassword: ForgotPasswordResponse;
  login: AuthPayload;
  logout: LogoutResponse;
  refreshToken: RefreshTokenPayload;
  register: RegisterResponse;
  seenAllNotification?: Maybe<Notification>;
  seenNotification?: Maybe<Notification>;
  sendComment: GenericResponse;
  sendDeviceID: GenericResponse;
  socialLogin: AuthPayload;
  updateForgottenPassword: ForgotPasswordResponse;
  updatePassword: UpdatePasswordResponse;
  updateProfile: GenericResponse;
  upsertBeloved: GenericResponse;
  upsertMovieBeloved: GenericResponse;
  verifyDiscountCode: GenericResponse;
  verifyEmail: AuthPayload;
  verifyPaymentRequest: GenericResponse;
};


export type MutationCreatePaymentRequestArgs = {
  input: PaymentRequest;
};


export type MutationDeleteBelovedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMovieBelovedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRefreshTokenArgs = {
  input?: InputMaybe<RefreshTokenInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<RegisterInput>;
};


export type MutationSeenNotificationArgs = {
  id: Scalars['ID']['input'];
  seen?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSendCommentArgs = {
  input: InsertCommentInput;
};


export type MutationSendDeviceIdArgs = {
  input: DeviceIdInput;
};


export type MutationSocialLoginArgs = {
  input: SocialLoginInput;
};


export type MutationUpdateForgottenPasswordArgs = {
  input?: InputMaybe<NewPasswordWithCodeInput>;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePassword;
};


export type MutationUpdateProfileArgs = {
  input: UpdateUserInput;
};


export type MutationUpsertBelovedArgs = {
  input: UpsertBelovedInput;
};


export type MutationUpsertMovieBelovedArgs = {
  input: MovieUpsertBelovedInput;
};


export type MutationVerifyDiscountCodeArgs = {
  input: VerifyDiscodeRequest;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationVerifyPaymentRequestArgs = {
  input: VerifyPaymentRequest;
};

export type NewPasswordWithCodeInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  seen?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type PaymentRequest = {
  discound_code?: InputMaybe<Scalars['String']['input']>;
  membership_id: Scalars['Int']['input'];
};

export type PeopleCharacterSelect = {
  __typename?: 'PeopleCharacterSelect';
  character_id?: Maybe<Scalars['ID']['output']>;
  people_id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['ID']['output']>;
  type_id: Scalars['ID']['output'];
};

export type PhxBloved = {
  __typename?: 'PhxBloved';
  add_to_list?: Maybe<Scalars['Int']['output']>;
  array?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  movie_id?: Maybe<Scalars['ID']['output']>;
  movies: Movie;
  notifications?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

/** A paginated list of PhxBloved items. */
export type PhxBlovedPaginator = {
  __typename?: 'PhxBlovedPaginator';
  /** A list of PhxBloved items. */
  data: Array<PhxBloved>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Phx_Character = {
  __typename?: 'Phx_Character';
  actor?: Maybe<Actor>;
  character?: Maybe<Scalars['String']['output']>;
  tiny_img?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  anime?: Maybe<Anime>;
  animeAdvancedSearch: AnimePaginator;
  animeBySeasonPage: SeasonAnimePageOutput;
  animeComments: CommentPaginator;
  animeGenre: AnimePaginator;
  animeSchedules: Array<AnimeSchedule>;
  animeSearch: AnimePaginator;
  animeYear: AnimePaginator;
  anime_categories: Array<Categorie>;
  animes: AnimePaginator;
  animesEndedPage: AnimePaginator;
  animesMovie: AnimePaginator;
  animesMoviePage: AnimePaginator;
  animesOngoingPage: AnimePaginator;
  animesSeason: AnimePaginator;
  animesSeasonPage: AnimePaginator;
  animesSoftSubPage: AnimePaginator;
  animesTop: AnimePaginator;
  animesUpdate: AnimePaginator;
  animesUpdatePage: AnimePaginator;
  applicationSlider: Array<ApplicationSlider>;
  comments: CommentPaginator;
  commentsOfUser: CommentPaginator;
  directory_links: Array<DbAnimeDirectoryLinks>;
  getAvailableMemberships: Array<Membership>;
  getBelovedData?: Maybe<Beloved>;
  getBelovedMovieData?: Maybe<PhxBloved>;
  getUserFavorites: BelovedPaginator;
  getUserMovieFavorites: PhxBlovedPaginator;
  homePageAnimeContent: Array<HomePageListItemAnime>;
  homePageDramaContent: Array<HomePageListItemMovie>;
  homePageMovieContent: Array<HomePageListItemMovie>;
  homePageSeriesContent: Array<HomePageListItemMovie>;
  me: User;
  movie?: Maybe<Movie>;
  movieAdvancedSearch: MoviePaginator;
  movieCategories: Array<Genre>;
  movieDirectoryLinks: Array<MovieDirectoryLink>;
  movieDrama: MoviePaginator;
  movieDramaPage: MoviePaginator;
  movieGenre: MoviePaginator;
  movieMovie: MoviePaginator;
  movieMoviePage: MoviePaginator;
  movieSearch: MoviePaginator;
  movieSeries: MoviePaginator;
  movieSeriesPage: MoviePaginator;
  movieTop: MoviePaginator;
  movieYear: MoviePaginator;
  movies: MoviePaginator;
  seriesEndedPage: MoviePaginator;
  seriesOngoingPage: MoviePaginator;
  settings_query?: Maybe<SettingsType>;
  subtitleById?: Maybe<Sub>;
  subtitles: SubPaginator;
};


export type QueryAnimeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAnimeAdvancedSearchArgs = {
  first: Scalars['Int']['input'];
  input: AnimeAdvancedSearch;
  orderBy?: InputMaybe<Array<QueryAnimeAdvancedSearchOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimeBySeasonPageArgs = {
  season?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnimeCommentsArgs = {
  first: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  parent_id?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnimeGenreArgs = {
  first: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<QueryAnimeGenreOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimeSearchArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAnimeSearchOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnimeYearArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAnimeYearOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  year: Scalars['String']['input'];
};


export type QueryAnimesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesEndedPageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAnimesEndedPageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesMovieArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesMoviePageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAnimesMoviePageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesOngoingPageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAnimesOngoingPageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesSeasonArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesSeasonPageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAnimesSeasonPageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesSoftSubPageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAnimesSoftSubPageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesTopArgs = {
  first: Scalars['Int']['input'];
  mode: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesUpdateArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAnimesUpdatePageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAnimesUpdatePageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicationSliderArgs = {
  parameters?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommentsArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCommentsOfUserArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDirectory_LinksArgs = {
  directory_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetBelovedDataArgs = {
  anime_id: Scalars['ID']['input'];
};


export type QueryGetBelovedMovieDataArgs = {
  movie_id: Scalars['ID']['input'];
};


export type QueryGetUserFavoritesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  status: Scalars['Int']['input'];
};


export type QueryGetUserMovieFavoritesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  status: Scalars['Int']['input'];
};


export type QueryMovieArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMovieAdvancedSearchArgs = {
  first: Scalars['Int']['input'];
  input: MovieAdvancedSearch;
  orderBy?: InputMaybe<Array<QueryMovieAdvancedSearchOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovieDirectoryLinksArgs = {
  directory_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMovieDramaArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovieDramaPageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryMovieDramaPageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovieGenreArgs = {
  first: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<QueryMovieGenreOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};


export type QueryMovieMovieArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovieMoviePageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryMovieMoviePageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovieSearchArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryMovieSearchOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMovieSeriesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovieSeriesPageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryMovieSeriesPageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovieTopArgs = {
  first: Scalars['Int']['input'];
  mode: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};


export type QueryMovieYearArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryMovieYearOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
  year: Scalars['String']['input'];
};


export type QueryMoviesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeriesEndedPageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QuerySeriesEndedPageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeriesOngoingPageArgs = {
  first: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QuerySeriesOngoingPageOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySubtitleByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySubtitlesArgs = {
  anime_id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['Int']['input'];
};

/** Allowed column names for Query.animeAdvancedSearch.orderBy. */
export enum QueryAnimeAdvancedSearchOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animeAdvancedSearch.orderBy. */
export type QueryAnimeAdvancedSearchOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimeAdvancedSearchOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animeGenre.orderBy. */
export enum QueryAnimeGenreOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animeGenre.orderBy. */
export type QueryAnimeGenreOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimeGenreOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animeSearch.orderBy. */
export enum QueryAnimeSearchOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animeSearch.orderBy. */
export type QueryAnimeSearchOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimeSearchOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animeYear.orderBy. */
export enum QueryAnimeYearOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animeYear.orderBy. */
export type QueryAnimeYearOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimeYearOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animesEndedPage.orderBy. */
export enum QueryAnimesEndedPageOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animesEndedPage.orderBy. */
export type QueryAnimesEndedPageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimesEndedPageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animesMoviePage.orderBy. */
export enum QueryAnimesMoviePageOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animesMoviePage.orderBy. */
export type QueryAnimesMoviePageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimesMoviePageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animesOngoingPage.orderBy. */
export enum QueryAnimesOngoingPageOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animesOngoingPage.orderBy. */
export type QueryAnimesOngoingPageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimesOngoingPageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animesSeasonPage.orderBy. */
export enum QueryAnimesSeasonPageOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animesSeasonPage.orderBy. */
export type QueryAnimesSeasonPageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimesSeasonPageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animesSoftSubPage.orderBy. */
export enum QueryAnimesSoftSubPageOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animesSoftSubPage.orderBy. */
export type QueryAnimesSoftSubPageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimesSoftSubPageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.animesUpdatePage.orderBy. */
export enum QueryAnimesUpdatePageOrderByColumn {
  DicScore = 'DIC_SCORE',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.animesUpdatePage.orderBy. */
export type QueryAnimesUpdatePageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAnimesUpdatePageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.movieAdvancedSearch.orderBy. */
export enum QueryMovieAdvancedSearchOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.movieAdvancedSearch.orderBy. */
export type QueryMovieAdvancedSearchOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMovieAdvancedSearchOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.movieDramaPage.orderBy. */
export enum QueryMovieDramaPageOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.movieDramaPage.orderBy. */
export type QueryMovieDramaPageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMovieDramaPageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.movieGenre.orderBy. */
export enum QueryMovieGenreOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.movieGenre.orderBy. */
export type QueryMovieGenreOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMovieGenreOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.movieMoviePage.orderBy. */
export enum QueryMovieMoviePageOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.movieMoviePage.orderBy. */
export type QueryMovieMoviePageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMovieMoviePageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.movieSearch.orderBy. */
export enum QueryMovieSearchOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.movieSearch.orderBy. */
export type QueryMovieSearchOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMovieSearchOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.movieSeriesPage.orderBy. */
export enum QueryMovieSeriesPageOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.movieSeriesPage.orderBy. */
export type QueryMovieSeriesPageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMovieSeriesPageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.movieYear.orderBy. */
export enum QueryMovieYearOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.movieYear.orderBy. */
export type QueryMovieYearOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMovieYearOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.seriesEndedPage.orderBy. */
export enum QuerySeriesEndedPageOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.seriesEndedPage.orderBy. */
export type QuerySeriesEndedPageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QuerySeriesEndedPageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.seriesOngoingPage.orderBy. */
export enum QuerySeriesOngoingPageOrderByColumn {
  ImdbRating = 'IMDB_RATING',
  PostHit = 'POST_HIT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.seriesOngoingPage.orderBy. */
export type QuerySeriesOngoingPageOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QuerySeriesOngoingPageOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type RefreshTokenInput = {
  refresh_token?: InputMaybe<Scalars['String']['input']>;
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  access_token: Scalars['String']['output'];
  expires_in: Scalars['Int']['output'];
  refresh_token: Scalars['String']['output'];
  token_type: Scalars['String']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  status: RegisterStatuses;
  tokens?: Maybe<AuthPayload>;
};

export enum RegisterStatuses {
  MustVerifyEmail = 'MUST_VERIFY_EMAIL',
  Success = 'SUCCESS'
}

export type SeasonAnimePageOutput = {
  __typename?: 'SeasonAnimePageOutput';
  all_years: Array<KeyValue>;
  animes: Array<Anime>;
  season: Scalars['String']['output'];
  year: Scalars['String']['output'];
};

export type SettingsType = {
  __typename?: 'SettingsType';
  api_domain?: Maybe<Scalars['String']['output']>;
  app_url_arm64?: Maybe<Scalars['String']['output']>;
  app_url_armeabi?: Maybe<Scalars['String']['output']>;
  app_url_x86?: Maybe<Scalars['String']['output']>;
  app_ver?: Maybe<Scalars['String']['output']>;
  current_domain?: Maybe<Scalars['String']['output']>;
  current_season?: Maybe<Scalars['String']['output']>;
  current_year?: Maybe<Scalars['String']['output']>;
  last_critical_ver?: Maybe<Scalars['String']['output']>;
  patch_notes: Array<Scalars['String']['output']>;
};

export type SocialLoginInput = {
  provider: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Sub = {
  __typename?: 'Sub';
  body?: Maybe<Scalars['String']['output']>;
  from_episode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link_file?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  to_episode?: Maybe<Scalars['String']['output']>;
  user_group_buytable: Array<UserGroupBuyTable>;
  user_id: Scalars['ID']['output'];
};

/** A paginated list of Sub items. */
export type SubPaginator = {
  __typename?: 'SubPaginator';
  /** A list of Sub items. */
  data: Array<Sub>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdatePassword = {
  old_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};

export type UpdatePasswordResponse = {
  __typename?: 'UpdatePasswordResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertBelovedInput = {
  add_to_list: Scalars['Int']['input'];
  anime_id: Scalars['ID']['input'];
  download: Scalars['Int']['input'];
  episodes: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  notifications: Scalars['Int']['input'];
  score: Scalars['Int']['input'];
  status: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  comments: Array<Comment>;
  email?: Maybe<Scalars['String']['output']>;
  expire_date?: Maybe<Scalars['String']['output']>;
  favoriteCount: Scalars['Int']['output'];
  favorites: Array<Beloved>;
  id: Scalars['ID']['output'];
  isVIP?: Maybe<Scalars['Boolean']['output']>;
  movieFavorites: Array<PhxBloved>;
  name?: Maybe<Scalars['String']['output']>;
  notifications: Array<Notification>;
  notificationsCount: Scalars['Int']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
};


export type UserFavoritesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type UserMovieFavoritesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type UserGroupBuyTable = {
  __typename?: 'UserGroupBuyTable';
  user?: Maybe<User>;
};

export type VerifyDiscodeRequest = {
  discount: Scalars['String']['input'];
  membership_id: Scalars['Int']['input'];
};

export type VerifyEmailInput = {
  token: Scalars['String']['input'];
};

export type VerifyPaymentRequest = {
  authority: Scalars['String']['input'];
};

export type TrendingAnimeFragmentFragment = { __typename?: 'Anime', id: string, dic_title?: string | null, dic_body?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, wide_image?: string | null, al_score?: number | null, dic_score?: string | null, anilist_score?: number | null, al_score_count?: number | null, dic_episodes?: string | null, season_year?: string | null, mal_popularity?: number | null, anilist_popularity?: number | null, genres: Array<{ __typename?: 'Categorie', name_fa?: string | null, name_en?: string | null, backdrop?: string | null }> };

export type UserFragmentFragment = { __typename?: 'User', id: string, name?: string | null, email?: string | null, avatar?: string | null };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', access_token?: string | null, expires_in?: number | null, refresh_token?: string | null, token_type?: string | null, user?: { __typename?: 'User', id: string, name?: string | null, email?: string | null, avatar?: string | null } | null } };

export type GetSeasonalAnimesQueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;


export type GetSeasonalAnimesQuery = { __typename?: 'Query', animesSeason: { __typename?: 'AnimePaginator', paginatorInfo: { __typename?: 'PaginatorInfo', count: number }, data: Array<{ __typename?: 'Anime', id: string, dic_title?: string | null, dic_body?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, wide_image?: string | null, al_score?: number | null, dic_score?: string | null, anilist_score?: number | null, al_score_count?: number | null, dic_episodes?: string | null, season_year?: string | null, mal_popularity?: number | null, anilist_popularity?: number | null, genres: Array<{ __typename?: 'Categorie', name_fa?: string | null, name_en?: string | null, backdrop?: string | null }> }> } };

export const TrendingAnimeFragmentFragmentDoc = gql`
    fragment TrendingAnimeFragment on Anime {
  id
  dic_title
  dic_body
  anilist_image_url
  mal_image_url
  wide_image
  al_score
  dic_score
  anilist_score
  al_score_count
  dic_episodes
  genres {
    name_fa
    name_en
    backdrop
  }
  season_year
  mal_popularity
  anilist_popularity
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
  avatar
}
    `;
export const LoginDocument = gql`
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
    ${UserFragmentFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetSeasonalAnimesDocument = gql`
    query GetSeasonalAnimes($first: Int!) {
  animesSeason(first: $first) {
    paginatorInfo {
      count
    }
    data {
      ...TrendingAnimeFragment
    }
  }
}
    ${TrendingAnimeFragmentFragmentDoc}`;
export function useGetSeasonalAnimesQuery(baseOptions: Apollo.QueryHookOptions<GetSeasonalAnimesQuery, GetSeasonalAnimesQueryVariables> & ({ variables: GetSeasonalAnimesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSeasonalAnimesQuery, GetSeasonalAnimesQueryVariables>(GetSeasonalAnimesDocument, options);
      }
export function useGetSeasonalAnimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSeasonalAnimesQuery, GetSeasonalAnimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSeasonalAnimesQuery, GetSeasonalAnimesQueryVariables>(GetSeasonalAnimesDocument, options);
        }
export function useGetSeasonalAnimesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSeasonalAnimesQuery, GetSeasonalAnimesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSeasonalAnimesQuery, GetSeasonalAnimesQueryVariables>(GetSeasonalAnimesDocument, options);
        }
export type GetSeasonalAnimesQueryHookResult = ReturnType<typeof useGetSeasonalAnimesQuery>;
export type GetSeasonalAnimesLazyQueryHookResult = ReturnType<typeof useGetSeasonalAnimesLazyQuery>;
export type GetSeasonalAnimesSuspenseQueryHookResult = ReturnType<typeof useGetSeasonalAnimesSuspenseQuery>;
export type GetSeasonalAnimesQueryResult = Apollo.QueryResult<GetSeasonalAnimesQuery, GetSeasonalAnimesQueryVariables>;
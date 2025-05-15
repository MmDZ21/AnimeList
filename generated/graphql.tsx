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
  characters: Array<CharacterDetail>;
  content_body?: Maybe<Scalars['String']['output']>;
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
  genres: Array<AnimeGenre>;
  id: Scalars['ID']['output'];
  mal_id: Scalars['ID']['output'];
  mal_image_url?: Maybe<Scalars['String']['output']>;
  mal_popularity?: Maybe<Scalars['Int']['output']>;
  mal_rank?: Maybe<Scalars['Int']['output']>;
  movie_desc?: Maybe<MovieDesc>;
  post_hit?: Maybe<Scalars['Int']['output']>;
  post_title?: Maybe<Scalars['String']['output']>;
  recommendations: Array<AnimeRecommendation>;
  relations: Array<AnimeRelation>;
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

export type AnimeCharacter = {
  __typename?: 'AnimeCharacter';
  favorites?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AnimeGenre = {
  __typename?: 'AnimeGenre';
  backdrop?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name_en?: Maybe<Scalars['String']['output']>;
  name_fa?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of Anime items. */
export type AnimePaginator = {
  __typename?: 'AnimePaginator';
  /** A list of Anime items. */
  data: Array<Anime>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AnimePerson = {
  __typename?: 'AnimePerson';
  hometown?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AnimeRecommendation = {
  __typename?: 'AnimeRecommendation';
  recommendation: Anime;
  votes?: Maybe<Scalars['Int']['output']>;
};

export type AnimeRelation = {
  __typename?: 'AnimeRelation';
  relation?: Maybe<Scalars['String']['output']>;
  relationship: Anime;
  type?: Maybe<Scalars['String']['output']>;
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

export type ApplicationSliderRequest = {
  genre_id?: InputMaybe<Scalars['ID']['input']>;
  route?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  year_id?: InputMaybe<Scalars['Int']['input']>;
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

export type BuyMembershipRequest = {
  membership_id: Scalars['ID']['input'];
};

export type CharacterDetail = {
  __typename?: 'CharacterDetail';
  character?: Maybe<AnimeCharacter>;
  character_role?: Maybe<Scalars['String']['output']>;
  person?: Maybe<AnimePerson>;
  person_role?: Maybe<Scalars['String']['output']>;
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
  redirect_url: Scalars['String']['output'];
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

export type DownloadLinkInput = {
  anime_id: Scalars['ID']['input'];
  download_link: Scalars['String']['input'];
  episode: Scalars['String']['input'];
  isSoftSub?: InputMaybe<Scalars['Boolean']['input']>;
  quality: Scalars['String']['input'];
  size?: InputMaybe<Scalars['String']['input']>;
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
  desc_en: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  name_en: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  price_usd: Scalars['Int']['output'];
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
  addDownloadLink: GenericResponse;
  buyMembership: GenericResponse;
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


export type MutationAddDownloadLinkArgs = {
  input: DownloadLinkInput;
};


export type MutationBuyMembershipArgs = {
  input: BuyMembershipRequest;
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
  amount: Scalars['Int']['input'];
  callback_url: Scalars['String']['input'];
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
  AnimeGenreInfo?: Maybe<AnimeGenre>;
  anime?: Maybe<Anime>;
  animeAdvancedSearch: AnimePaginator;
  animeBySeasonPage: SeasonAnimePageOutput;
  animeComments: CommentPaginator;
  animeGenre: AnimePaginator;
  animeSchedules: Array<AnimeSchedule>;
  animeSearch: AnimePaginator;
  animeYear: AnimePaginator;
  anime_categories: Array<AnimeGenre>;
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
  downloadLinkById?: Maybe<DbAnimeLinks>;
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


export type QueryAnimeGenreInfoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
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
  request: ApplicationSliderRequest;
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


export type QueryDownloadLinkByIdArgs = {
  id: Scalars['ID']['input'];
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
  MalPopularity = 'MAL_POPULARITY',
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
  MalPopularity = 'MAL_POPULARITY',
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
  MalPopularity = 'MAL_POPULARITY',
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
  MalPopularity = 'MAL_POPULARITY',
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
  MalPopularity = 'MAL_POPULARITY',
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
  MalPopularity = 'MAL_POPULARITY',
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
  MalPopularity = 'MAL_POPULARITY',
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
  MalPopularity = 'MAL_POPULARITY',
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
  MalPopularity = 'MAL_POPULARITY',
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
  temporary_url?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  to_episode?: Maybe<Scalars['String']['output']>;
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
  balance?: Maybe<Scalars['Int']['output']>;
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
  trackId: Scalars['String']['input'];
};

export type AnimeFragmentFragment = { __typename?: 'Anime', id: string, dic_aired_from?: string | null, dic_aired_to?: string | null, dic_episodes?: string | null, dic_body_normalized?: string | null, content_body?: string | null, dic_duration?: string | null, dic_types?: number | null, seo_desc?: string | null, post_title?: string | null, dic_last_update?: string | null, dic_status?: number | null, season_year?: string | null, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, wide_image?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, anime_links: Array<{ __typename?: 'DbAnimeLinks', signedLink?: string | null, quality?: string | null, id: string, size?: string | null, ep?: string | null, subtitle_link?: string | null }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null }>, trailers: Array<{ __typename?: 'AnimeTrailer', title?: string | null, online_play?: string | null }>, recommendations: Array<{ __typename?: 'AnimeRecommendation', recommendation: { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> } }>, relations: Array<{ __typename?: 'AnimeRelation', type?: string | null, relation?: string | null, relationship: { __typename?: 'Anime', id: string } }>, characters: Array<{ __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null }> };

export type AnimeGenreFragmentFragment = { __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null, slug?: string | null, backdrop?: string | null };

export type CharactersFragmentFragment = { __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null };

export type CommentsFragmentFragment = { __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null, replies: Array<{ __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null, replies: Array<{ __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null }> }> };

export type RecommendationsFragmentFragment = { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> };

export type RepliesFragmentFragment = { __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null, replies: Array<{ __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null }> };

export type RepliesSecondFragmentFragment = { __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null };

export type SubtitlesFragmentFragment = { __typename?: 'Sub', id: string, user_id: string, title?: string | null, to_episode?: string | null, from_episode?: string | null, body?: string | null, temporary_url?: string | null };

export type UserBalanceFragmentFragment = { __typename?: 'User', balance?: number | null };

export type UserInfoFragmentFragment = { __typename?: 'User', id: string, name?: string | null, avatar?: string | null, expire_date?: string | null, isVIP?: boolean | null, email?: string | null, balance?: number | null };

export type UserStatusFragmentFragment = { __typename?: 'User', id: string, favoriteCount: number, favorites: Array<{ __typename?: 'Beloved', score?: string | null, anime: { __typename?: 'Anime', dic_duration?: string | null, dic_episodes?: string | null, dic_title?: string | null, dic_types?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null } }> };

export type BuyMembershipMutationVariables = Exact<{
  input: BuyMembershipRequest;
}>;


export type BuyMembershipMutation = { __typename?: 'Mutation', buyMembership: { __typename?: 'GenericResponse', status: string, message?: string | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', access_token?: string | null, expires_in?: number | null, refresh_token?: string | null, token_type?: string | null, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null, expire_date?: string | null, isVIP?: boolean | null, email?: string | null, balance?: number | null } | null } };

export type PayReqMutationVariables = Exact<{
  input: PaymentRequest;
}>;


export type PayReqMutation = { __typename?: 'Mutation', createPaymentRequest: { __typename?: 'CreatePaymentResponse', redirect_url: string } };

export type PayVerMutationVariables = Exact<{
  input: VerifyPaymentRequest;
}>;


export type PayVerMutation = { __typename?: 'Mutation', verifyPaymentRequest: { __typename?: 'GenericResponse', status: string, message?: string | null } };

export type RefreshTokenMutationVariables = Exact<{
  input?: InputMaybe<RefreshTokenInput>;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshTokenPayload', access_token: string, refresh_token: string, expires_in: number } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', status: RegisterStatuses } };

export type SendCommentMutationVariables = Exact<{
  input: InsertCommentInput;
}>;


export type SendCommentMutation = { __typename?: 'Mutation', sendComment: { __typename?: 'GenericResponse', status: string, message?: string | null } };

export type UpdatePasswordMutationVariables = Exact<{
  input: UpdatePassword;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'UpdatePasswordResponse', status: string, message?: string | null } };

export type AnimeByGenreQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<QueryAnimeGenreOrderByOrderByClause> | QueryAnimeGenreOrderByOrderByClause>;
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AnimeByGenreQuery = { __typename?: 'Query', animeGenre: { __typename?: 'AnimePaginator', data: Array<{ __typename?: 'Anime', id: string, dic_aired_from?: string | null, dic_aired_to?: string | null, dic_episodes?: string | null, dic_body_normalized?: string | null, content_body?: string | null, dic_duration?: string | null, dic_types?: number | null, seo_desc?: string | null, post_title?: string | null, dic_last_update?: string | null, dic_status?: number | null, season_year?: string | null, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, wide_image?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, anime_links: Array<{ __typename?: 'DbAnimeLinks', signedLink?: string | null, quality?: string | null, id: string, size?: string | null, ep?: string | null, subtitle_link?: string | null }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null }>, trailers: Array<{ __typename?: 'AnimeTrailer', title?: string | null, online_play?: string | null }>, recommendations: Array<{ __typename?: 'AnimeRecommendation', recommendation: { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> } }>, relations: Array<{ __typename?: 'AnimeRelation', type?: string | null, relation?: string | null, relationship: { __typename?: 'Anime', id: string } }>, characters: Array<{ __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null }> }> } };

export type ApplicationSliderQueryVariables = Exact<{ [key: string]: never; }>;


export type ApplicationSliderQuery = { __typename?: 'Query', applicationSlider: Array<{ __typename?: 'ApplicationSlider', title?: string | null, body?: string | null, score?: string | null, cover_image?: string | null, image?: string | null, type_id?: number | null }> };

export type GetAllAnimeQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllAnimeQuery = { __typename?: 'Query', animes: { __typename?: 'AnimePaginator', paginatorInfo: { __typename?: 'PaginatorInfo', total: number, hasMorePages: boolean }, data: Array<{ __typename?: 'Anime', id: string, dic_title?: string | null }> } };

export type GetAnimeByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAnimeByIdQuery = { __typename?: 'Query', anime?: { __typename?: 'Anime', id: string, dic_aired_from?: string | null, dic_aired_to?: string | null, dic_episodes?: string | null, dic_body_normalized?: string | null, content_body?: string | null, dic_duration?: string | null, dic_types?: number | null, seo_desc?: string | null, post_title?: string | null, dic_last_update?: string | null, dic_status?: number | null, season_year?: string | null, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, wide_image?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, anime_links: Array<{ __typename?: 'DbAnimeLinks', signedLink?: string | null, quality?: string | null, id: string, size?: string | null, ep?: string | null, subtitle_link?: string | null }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null }>, trailers: Array<{ __typename?: 'AnimeTrailer', title?: string | null, online_play?: string | null }>, recommendations: Array<{ __typename?: 'AnimeRecommendation', recommendation: { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> } }>, relations: Array<{ __typename?: 'AnimeRelation', type?: string | null, relation?: string | null, relationship: { __typename?: 'Anime', id: string } }>, characters: Array<{ __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null }> } | null };

export type GetAnimeByYearQueryVariables = Exact<{
  year: Scalars['String']['input'];
  orderBy?: InputMaybe<Array<QueryAnimeYearOrderByOrderByClause> | QueryAnimeYearOrderByOrderByClause>;
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAnimeByYearQuery = { __typename?: 'Query', animeYear: { __typename?: 'AnimePaginator', data: Array<{ __typename?: 'Anime', id: string, dic_aired_from?: string | null, dic_aired_to?: string | null, dic_episodes?: string | null, dic_body_normalized?: string | null, content_body?: string | null, dic_duration?: string | null, dic_types?: number | null, seo_desc?: string | null, post_title?: string | null, dic_last_update?: string | null, dic_status?: number | null, season_year?: string | null, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, wide_image?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, anime_links: Array<{ __typename?: 'DbAnimeLinks', signedLink?: string | null, quality?: string | null, id: string, size?: string | null, ep?: string | null, subtitle_link?: string | null }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null }>, trailers: Array<{ __typename?: 'AnimeTrailer', title?: string | null, online_play?: string | null }>, recommendations: Array<{ __typename?: 'AnimeRecommendation', recommendation: { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> } }>, relations: Array<{ __typename?: 'AnimeRelation', type?: string | null, relation?: string | null, relationship: { __typename?: 'Anime', id: string } }>, characters: Array<{ __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null }> }> } };

export type GetAnimeCommentsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetAnimeCommentsQuery = { __typename?: 'Query', comments: { __typename?: 'CommentPaginator', data: Array<{ __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null, replies: Array<{ __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null, replies: Array<{ __typename?: 'Comment', id: string, body?: string | null, user_id?: string | null, created_at?: string | null, spoil?: number | null, replies_count: number, user?: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null }> }> }> } };

export type GetAnimeGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnimeGenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null, slug?: string | null, backdrop?: string | null }> };

export type GetAnimeMoviesQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<QueryAnimesMoviePageOrderByOrderByClause> | QueryAnimesMoviePageOrderByOrderByClause>;
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAnimeMoviesQuery = { __typename?: 'Query', animesMoviePage: { __typename?: 'AnimePaginator', data: Array<{ __typename?: 'Anime', id: string, dic_aired_from?: string | null, dic_aired_to?: string | null, dic_episodes?: string | null, dic_body_normalized?: string | null, content_body?: string | null, dic_duration?: string | null, dic_types?: number | null, seo_desc?: string | null, post_title?: string | null, dic_last_update?: string | null, dic_status?: number | null, season_year?: string | null, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, wide_image?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, anime_links: Array<{ __typename?: 'DbAnimeLinks', signedLink?: string | null, quality?: string | null, id: string, size?: string | null, ep?: string | null, subtitle_link?: string | null }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null }>, trailers: Array<{ __typename?: 'AnimeTrailer', title?: string | null, online_play?: string | null }>, recommendations: Array<{ __typename?: 'AnimeRecommendation', recommendation: { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> } }>, relations: Array<{ __typename?: 'AnimeRelation', type?: string | null, relation?: string | null, relationship: { __typename?: 'Anime', id: string } }>, characters: Array<{ __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null }> }> } };

export type GetGenreInfoQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetGenreInfoQuery = { __typename?: 'Query', AnimeGenreInfo?: { __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null } | null };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name?: string | null, avatar?: string | null, expire_date?: string | null, isVIP?: boolean | null, email?: string | null, balance?: number | null } };

export type GetUserStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserStatusQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, favoriteCount: number, favorites: Array<{ __typename?: 'Beloved', score?: string | null, anime: { __typename?: 'Anime', dic_duration?: string | null, dic_episodes?: string | null, dic_title?: string | null, dic_types?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null } }> } };

export type GetUserBalanceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserBalanceQuery = { __typename?: 'Query', me: { __typename?: 'User', balance?: number | null } };

export type GetOngoingAnimeQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<QueryAnimesOngoingPageOrderByOrderByClause> | QueryAnimesOngoingPageOrderByOrderByClause>;
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetOngoingAnimeQuery = { __typename?: 'Query', animesOngoingPage: { __typename?: 'AnimePaginator', data: Array<{ __typename?: 'Anime', id: string, dic_aired_from?: string | null, dic_aired_to?: string | null, dic_episodes?: string | null, dic_body_normalized?: string | null, content_body?: string | null, dic_duration?: string | null, dic_types?: number | null, seo_desc?: string | null, post_title?: string | null, dic_last_update?: string | null, dic_status?: number | null, season_year?: string | null, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, wide_image?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, anime_links: Array<{ __typename?: 'DbAnimeLinks', signedLink?: string | null, quality?: string | null, id: string, size?: string | null, ep?: string | null, subtitle_link?: string | null }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null }>, trailers: Array<{ __typename?: 'AnimeTrailer', title?: string | null, online_play?: string | null }>, recommendations: Array<{ __typename?: 'AnimeRecommendation', recommendation: { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> } }>, relations: Array<{ __typename?: 'AnimeRelation', type?: string | null, relation?: string | null, relationship: { __typename?: 'Anime', id: string } }>, characters: Array<{ __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null }> }> } };

export type GetSeasonalAnimesQueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;


export type GetSeasonalAnimesQuery = { __typename?: 'Query', animesSeason: { __typename?: 'AnimePaginator', paginatorInfo: { __typename?: 'PaginatorInfo', count: number }, data: Array<{ __typename?: 'Anime', id: string, dic_aired_from?: string | null, dic_aired_to?: string | null, dic_episodes?: string | null, dic_body_normalized?: string | null, content_body?: string | null, dic_duration?: string | null, dic_types?: number | null, seo_desc?: string | null, post_title?: string | null, dic_last_update?: string | null, dic_status?: number | null, season_year?: string | null, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, wide_image?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, anime_links: Array<{ __typename?: 'DbAnimeLinks', signedLink?: string | null, quality?: string | null, id: string, size?: string | null, ep?: string | null, subtitle_link?: string | null }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null }>, trailers: Array<{ __typename?: 'AnimeTrailer', title?: string | null, online_play?: string | null }>, recommendations: Array<{ __typename?: 'AnimeRecommendation', recommendation: { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> } }>, relations: Array<{ __typename?: 'AnimeRelation', type?: string | null, relation?: string | null, relationship: { __typename?: 'Anime', id: string } }>, characters: Array<{ __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null }> }> } };

export type GetSubtitlesQueryVariables = Exact<{
  anime_id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetSubtitlesQuery = { __typename?: 'Query', subtitles: { __typename?: 'SubPaginator', data: Array<{ __typename?: 'Sub', id: string, user_id: string, title?: string | null, to_episode?: string | null, from_episode?: string | null, body?: string | null, temporary_url?: string | null }> } };

export type HomePageContentQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageContentQuery = { __typename?: 'Query', homePageAnimeContent: Array<{ __typename?: 'HomePageListItemAnime', headerText: string, parameters?: string | null, hasMore: number, route?: string | null, appBarHeader?: string | null, appBarQuery?: string | null, content: Array<{ __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, dic_last_update?: string | null, dic_status?: number | null }> }> };

export type SearchAnimeQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Array<QueryAnimeSearchOrderByOrderByClause> | QueryAnimeSearchOrderByOrderByClause>;
  first: Scalars['Int']['input'];
}>;


export type SearchAnimeQuery = { __typename?: 'Query', animeSearch: { __typename?: 'AnimePaginator', data: Array<{ __typename?: 'Anime', id: string, dic_aired_from?: string | null, dic_aired_to?: string | null, dic_episodes?: string | null, dic_body_normalized?: string | null, content_body?: string | null, dic_duration?: string | null, dic_types?: number | null, seo_desc?: string | null, post_title?: string | null, dic_last_update?: string | null, dic_status?: number | null, season_year?: string | null, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, wide_image?: string | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, anime_links: Array<{ __typename?: 'DbAnimeLinks', signedLink?: string | null, quality?: string | null, id: string, size?: string | null, ep?: string | null, subtitle_link?: string | null }>, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null, name_en?: string | null }>, trailers: Array<{ __typename?: 'AnimeTrailer', title?: string | null, online_play?: string | null }>, recommendations: Array<{ __typename?: 'AnimeRecommendation', recommendation: { __typename?: 'Anime', id: string, dic_body?: string | null, dic_title?: string | null, dic_title_en?: string | null, title_fa?: string | null, dic_last_update?: string | null, dic_status?: number | null, mal_popularity?: number | null, al_score?: number | null, al_score_count?: number | null, anilist_image_url?: string | null, mal_image_url?: string | null, dic_score?: string | null, anilist_score?: number | null, dic_episodes?: string | null, genres: Array<{ __typename?: 'AnimeGenre', id: string, name_fa?: string | null }> } }>, relations: Array<{ __typename?: 'AnimeRelation', type?: string | null, relation?: string | null, relationship: { __typename?: 'Anime', id: string } }>, characters: Array<{ __typename?: 'CharacterDetail', character_role?: string | null, person_role?: string | null, character?: { __typename?: 'AnimeCharacter', id: string, name?: string | null, image_url?: string | null } | null, person?: { __typename?: 'AnimePerson', id: string, name?: string | null, hometown?: string | null, image_url?: string | null } | null }> }> } };

export const RecommendationsFragmentFragmentDoc = gql`
    fragment RecommendationsFragment on Anime {
  id
  dic_body
  dic_title
  dic_title_en
  title_fa
  dic_last_update
  dic_last_update
  dic_status
  mal_popularity
  al_score
  al_score_count
  anilist_image_url
  mal_image_url
  dic_score
  anilist_score
  genres {
    id
    name_fa
  }
  dic_episodes
}
    `;
export const CharactersFragmentFragmentDoc = gql`
    fragment CharactersFragment on CharacterDetail {
  character_role
  person_role
  character {
    id
    name
    image_url
  }
  person {
    id
    name
    hometown
    image_url
  }
}
    `;
export const AnimeFragmentFragmentDoc = gql`
    fragment AnimeFragment on Anime {
  id
  dic_aired_from
  dic_aired_to
  dic_episodes
  dic_body_normalized
  content_body
  dic_duration
  dic_types
  seo_desc
  post_title
  dic_last_update
  dic_status
  season_year
  dic_body
  dic_title
  dic_title_en
  title_fa
  mal_popularity
  al_score
  al_score_count
  wide_image
  anilist_image_url
  mal_image_url
  dic_score
  anilist_score
  anime_links {
    signedLink
    quality
    id
    size
    ep
    subtitle_link
  }
  genres {
    id
    name_fa
    name_en
  }
  trailers {
    title
    online_play
  }
  recommendations {
    recommendation {
      ...RecommendationsFragment
    }
  }
  relations {
    type
    relation
    relationship {
      id
    }
  }
  characters {
    ...CharactersFragment
  }
}
    ${RecommendationsFragmentFragmentDoc}
${CharactersFragmentFragmentDoc}`;
export const AnimeGenreFragmentFragmentDoc = gql`
    fragment AnimeGenreFragment on AnimeGenre {
  id
  name_fa
  name_en
  slug
  backdrop
}
    `;
export const RepliesSecondFragmentFragmentDoc = gql`
    fragment RepliesSecondFragment on Comment {
  id
  body
  user_id
  user {
    id
    name
    avatar
  }
  created_at
  spoil
  replies_count
}
    `;
export const RepliesFragmentFragmentDoc = gql`
    fragment RepliesFragment on Comment {
  id
  body
  user_id
  user {
    id
    name
    avatar
  }
  replies {
    ...RepliesSecondFragment
  }
  created_at
  spoil
  replies_count
}
    ${RepliesSecondFragmentFragmentDoc}`;
export const CommentsFragmentFragmentDoc = gql`
    fragment CommentsFragment on Comment {
  id
  body
  user_id
  user {
    id
    name
    avatar
  }
  replies {
    ...RepliesFragment
  }
  created_at
  spoil
  replies_count
}
    ${RepliesFragmentFragmentDoc}`;
export const SubtitlesFragmentFragmentDoc = gql`
    fragment SubtitlesFragment on Sub {
  id
  user_id
  title
  to_episode
  from_episode
  body
  temporary_url
}
    `;
export const UserBalanceFragmentFragmentDoc = gql`
    fragment UserBalanceFragment on User {
  balance
}
    `;
export const UserInfoFragmentFragmentDoc = gql`
    fragment UserInfoFragment on User {
  id
  name
  avatar
  expire_date
  isVIP
  email
  balance
}
    `;
export const UserStatusFragmentFragmentDoc = gql`
    fragment UserStatusFragment on User {
  id
  favoriteCount
  favorites {
    score
    anime {
      dic_duration
      dic_episodes
      dic_title
      dic_types
      anilist_image_url
      mal_image_url
    }
  }
}
    `;
export const BuyMembershipDocument = gql`
    mutation BuyMembership($input: BuyMembershipRequest!) {
  buyMembership(input: $input) {
    status
    message
  }
}
    `;
export type BuyMembershipMutationFn = Apollo.MutationFunction<BuyMembershipMutation, BuyMembershipMutationVariables>;

/**
 * __useBuyMembershipMutation__
 *
 * To run a mutation, you first call `useBuyMembershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBuyMembershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [buyMembershipMutation, { data, loading, error }] = useBuyMembershipMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBuyMembershipMutation(baseOptions?: Apollo.MutationHookOptions<BuyMembershipMutation, BuyMembershipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BuyMembershipMutation, BuyMembershipMutationVariables>(BuyMembershipDocument, options);
      }
export type BuyMembershipMutationHookResult = ReturnType<typeof useBuyMembershipMutation>;
export type BuyMembershipMutationResult = Apollo.MutationResult<BuyMembershipMutation>;
export type BuyMembershipMutationOptions = Apollo.BaseMutationOptions<BuyMembershipMutation, BuyMembershipMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    access_token
    expires_in
    refresh_token
    token_type
    user {
      ...UserInfoFragment
    }
  }
}
    ${UserInfoFragmentFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const PayReqDocument = gql`
    mutation PayReq($input: PaymentRequest!) {
  createPaymentRequest(input: $input) {
    redirect_url
  }
}
    `;
export type PayReqMutationFn = Apollo.MutationFunction<PayReqMutation, PayReqMutationVariables>;

/**
 * __usePayReqMutation__
 *
 * To run a mutation, you first call `usePayReqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePayReqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [payReqMutation, { data, loading, error }] = usePayReqMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePayReqMutation(baseOptions?: Apollo.MutationHookOptions<PayReqMutation, PayReqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PayReqMutation, PayReqMutationVariables>(PayReqDocument, options);
      }
export type PayReqMutationHookResult = ReturnType<typeof usePayReqMutation>;
export type PayReqMutationResult = Apollo.MutationResult<PayReqMutation>;
export type PayReqMutationOptions = Apollo.BaseMutationOptions<PayReqMutation, PayReqMutationVariables>;
export const PayVerDocument = gql`
    mutation PayVer($input: VerifyPaymentRequest!) {
  verifyPaymentRequest(input: $input) {
    status
    message
  }
}
    `;
export type PayVerMutationFn = Apollo.MutationFunction<PayVerMutation, PayVerMutationVariables>;

/**
 * __usePayVerMutation__
 *
 * To run a mutation, you first call `usePayVerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePayVerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [payVerMutation, { data, loading, error }] = usePayVerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePayVerMutation(baseOptions?: Apollo.MutationHookOptions<PayVerMutation, PayVerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PayVerMutation, PayVerMutationVariables>(PayVerDocument, options);
      }
export type PayVerMutationHookResult = ReturnType<typeof usePayVerMutation>;
export type PayVerMutationResult = Apollo.MutationResult<PayVerMutation>;
export type PayVerMutationOptions = Apollo.BaseMutationOptions<PayVerMutation, PayVerMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($input: RefreshTokenInput) {
  refreshToken(input: $input) {
    access_token
    refresh_token
    expires_in
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    status
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SendCommentDocument = gql`
    mutation SendComment($input: InsertCommentInput!) {
  sendComment(input: $input) {
    status
    message
  }
}
    `;
export type SendCommentMutationFn = Apollo.MutationFunction<SendCommentMutation, SendCommentMutationVariables>;

/**
 * __useSendCommentMutation__
 *
 * To run a mutation, you first call `useSendCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCommentMutation, { data, loading, error }] = useSendCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendCommentMutation(baseOptions?: Apollo.MutationHookOptions<SendCommentMutation, SendCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCommentMutation, SendCommentMutationVariables>(SendCommentDocument, options);
      }
export type SendCommentMutationHookResult = ReturnType<typeof useSendCommentMutation>;
export type SendCommentMutationResult = Apollo.MutationResult<SendCommentMutation>;
export type SendCommentMutationOptions = Apollo.BaseMutationOptions<SendCommentMutation, SendCommentMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($input: UpdatePassword!) {
  updatePassword(input: $input) {
    status
    message
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const AnimeByGenreDocument = gql`
    query AnimeByGenre($id: ID!, $orderBy: [QueryAnimeGenreOrderByOrderByClause!], $first: Int!, $page: Int) {
  animeGenre(id: $id, orderBy: $orderBy, first: $first, page: $page) {
    data {
      ...AnimeFragment
    }
  }
}
    ${AnimeFragmentFragmentDoc}`;

/**
 * __useAnimeByGenreQuery__
 *
 * To run a query within a React component, call `useAnimeByGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeByGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeByGenreQuery({
 *   variables: {
 *      id: // value for 'id'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAnimeByGenreQuery(baseOptions: Apollo.QueryHookOptions<AnimeByGenreQuery, AnimeByGenreQueryVariables> & ({ variables: AnimeByGenreQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnimeByGenreQuery, AnimeByGenreQueryVariables>(AnimeByGenreDocument, options);
      }
export function useAnimeByGenreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnimeByGenreQuery, AnimeByGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnimeByGenreQuery, AnimeByGenreQueryVariables>(AnimeByGenreDocument, options);
        }
export function useAnimeByGenreSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AnimeByGenreQuery, AnimeByGenreQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AnimeByGenreQuery, AnimeByGenreQueryVariables>(AnimeByGenreDocument, options);
        }
export type AnimeByGenreQueryHookResult = ReturnType<typeof useAnimeByGenreQuery>;
export type AnimeByGenreLazyQueryHookResult = ReturnType<typeof useAnimeByGenreLazyQuery>;
export type AnimeByGenreSuspenseQueryHookResult = ReturnType<typeof useAnimeByGenreSuspenseQuery>;
export type AnimeByGenreQueryResult = Apollo.QueryResult<AnimeByGenreQuery, AnimeByGenreQueryVariables>;
export const ApplicationSliderDocument = gql`
    query ApplicationSlider {
  applicationSlider(request: {type: "index"}) {
    title
    body
    score
    cover_image
    image
    type_id
  }
}
    `;

/**
 * __useApplicationSliderQuery__
 *
 * To run a query within a React component, call `useApplicationSliderQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationSliderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationSliderQuery({
 *   variables: {
 *   },
 * });
 */
export function useApplicationSliderQuery(baseOptions?: Apollo.QueryHookOptions<ApplicationSliderQuery, ApplicationSliderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApplicationSliderQuery, ApplicationSliderQueryVariables>(ApplicationSliderDocument, options);
      }
export function useApplicationSliderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApplicationSliderQuery, ApplicationSliderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApplicationSliderQuery, ApplicationSliderQueryVariables>(ApplicationSliderDocument, options);
        }
export function useApplicationSliderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ApplicationSliderQuery, ApplicationSliderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ApplicationSliderQuery, ApplicationSliderQueryVariables>(ApplicationSliderDocument, options);
        }
export type ApplicationSliderQueryHookResult = ReturnType<typeof useApplicationSliderQuery>;
export type ApplicationSliderLazyQueryHookResult = ReturnType<typeof useApplicationSliderLazyQuery>;
export type ApplicationSliderSuspenseQueryHookResult = ReturnType<typeof useApplicationSliderSuspenseQuery>;
export type ApplicationSliderQueryResult = Apollo.QueryResult<ApplicationSliderQuery, ApplicationSliderQueryVariables>;
export const GetAllAnimeDocument = gql`
    query GetAllAnime($first: Int!, $page: Int) {
  animes(first: $first, page: $page) {
    paginatorInfo {
      total
      hasMorePages
    }
    data {
      id
      dic_title
    }
  }
}
    `;

/**
 * __useGetAllAnimeQuery__
 *
 * To run a query within a React component, call `useGetAllAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAnimeQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetAllAnimeQuery(baseOptions: Apollo.QueryHookOptions<GetAllAnimeQuery, GetAllAnimeQueryVariables> & ({ variables: GetAllAnimeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAnimeQuery, GetAllAnimeQueryVariables>(GetAllAnimeDocument, options);
      }
export function useGetAllAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAnimeQuery, GetAllAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAnimeQuery, GetAllAnimeQueryVariables>(GetAllAnimeDocument, options);
        }
export function useGetAllAnimeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllAnimeQuery, GetAllAnimeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllAnimeQuery, GetAllAnimeQueryVariables>(GetAllAnimeDocument, options);
        }
export type GetAllAnimeQueryHookResult = ReturnType<typeof useGetAllAnimeQuery>;
export type GetAllAnimeLazyQueryHookResult = ReturnType<typeof useGetAllAnimeLazyQuery>;
export type GetAllAnimeSuspenseQueryHookResult = ReturnType<typeof useGetAllAnimeSuspenseQuery>;
export type GetAllAnimeQueryResult = Apollo.QueryResult<GetAllAnimeQuery, GetAllAnimeQueryVariables>;
export const GetAnimeByIdDocument = gql`
    query GetAnimeById($id: ID!) {
  anime: anime(id: $id) {
    ...AnimeFragment
  }
}
    ${AnimeFragmentFragmentDoc}`;

/**
 * __useGetAnimeByIdQuery__
 *
 * To run a query within a React component, call `useGetAnimeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAnimeByIdQuery(baseOptions: Apollo.QueryHookOptions<GetAnimeByIdQuery, GetAnimeByIdQueryVariables> & ({ variables: GetAnimeByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeByIdQuery, GetAnimeByIdQueryVariables>(GetAnimeByIdDocument, options);
      }
export function useGetAnimeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeByIdQuery, GetAnimeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeByIdQuery, GetAnimeByIdQueryVariables>(GetAnimeByIdDocument, options);
        }
export function useGetAnimeByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnimeByIdQuery, GetAnimeByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeByIdQuery, GetAnimeByIdQueryVariables>(GetAnimeByIdDocument, options);
        }
export type GetAnimeByIdQueryHookResult = ReturnType<typeof useGetAnimeByIdQuery>;
export type GetAnimeByIdLazyQueryHookResult = ReturnType<typeof useGetAnimeByIdLazyQuery>;
export type GetAnimeByIdSuspenseQueryHookResult = ReturnType<typeof useGetAnimeByIdSuspenseQuery>;
export type GetAnimeByIdQueryResult = Apollo.QueryResult<GetAnimeByIdQuery, GetAnimeByIdQueryVariables>;
export const GetAnimeByYearDocument = gql`
    query GetAnimeByYear($year: String!, $orderBy: [QueryAnimeYearOrderByOrderByClause!], $first: Int!, $page: Int) {
  animeYear(year: $year, orderBy: $orderBy, first: $first, page: $page) {
    data {
      ...AnimeFragment
    }
  }
}
    ${AnimeFragmentFragmentDoc}`;

/**
 * __useGetAnimeByYearQuery__
 *
 * To run a query within a React component, call `useGetAnimeByYearQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeByYearQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeByYearQuery({
 *   variables: {
 *      year: // value for 'year'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetAnimeByYearQuery(baseOptions: Apollo.QueryHookOptions<GetAnimeByYearQuery, GetAnimeByYearQueryVariables> & ({ variables: GetAnimeByYearQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeByYearQuery, GetAnimeByYearQueryVariables>(GetAnimeByYearDocument, options);
      }
export function useGetAnimeByYearLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeByYearQuery, GetAnimeByYearQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeByYearQuery, GetAnimeByYearQueryVariables>(GetAnimeByYearDocument, options);
        }
export function useGetAnimeByYearSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnimeByYearQuery, GetAnimeByYearQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeByYearQuery, GetAnimeByYearQueryVariables>(GetAnimeByYearDocument, options);
        }
export type GetAnimeByYearQueryHookResult = ReturnType<typeof useGetAnimeByYearQuery>;
export type GetAnimeByYearLazyQueryHookResult = ReturnType<typeof useGetAnimeByYearLazyQuery>;
export type GetAnimeByYearSuspenseQueryHookResult = ReturnType<typeof useGetAnimeByYearSuspenseQuery>;
export type GetAnimeByYearQueryResult = Apollo.QueryResult<GetAnimeByYearQuery, GetAnimeByYearQueryVariables>;
export const GetAnimeCommentsDocument = gql`
    query GetAnimeComments($first: Int!, $id: ID) {
  comments: animeComments(first: $first, parent_id: 0, type: "anime", id: $id) {
    data {
      ...CommentsFragment
    }
  }
}
    ${CommentsFragmentFragmentDoc}`;

/**
 * __useGetAnimeCommentsQuery__
 *
 * To run a query within a React component, call `useGetAnimeCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeCommentsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAnimeCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetAnimeCommentsQuery, GetAnimeCommentsQueryVariables> & ({ variables: GetAnimeCommentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeCommentsQuery, GetAnimeCommentsQueryVariables>(GetAnimeCommentsDocument, options);
      }
export function useGetAnimeCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeCommentsQuery, GetAnimeCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeCommentsQuery, GetAnimeCommentsQueryVariables>(GetAnimeCommentsDocument, options);
        }
export function useGetAnimeCommentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnimeCommentsQuery, GetAnimeCommentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeCommentsQuery, GetAnimeCommentsQueryVariables>(GetAnimeCommentsDocument, options);
        }
export type GetAnimeCommentsQueryHookResult = ReturnType<typeof useGetAnimeCommentsQuery>;
export type GetAnimeCommentsLazyQueryHookResult = ReturnType<typeof useGetAnimeCommentsLazyQuery>;
export type GetAnimeCommentsSuspenseQueryHookResult = ReturnType<typeof useGetAnimeCommentsSuspenseQuery>;
export type GetAnimeCommentsQueryResult = Apollo.QueryResult<GetAnimeCommentsQuery, GetAnimeCommentsQueryVariables>;
export const GetAnimeGenresDocument = gql`
    query GetAnimeGenres {
  genres: anime_categories {
    ...AnimeGenreFragment
  }
}
    ${AnimeGenreFragmentFragmentDoc}`;

/**
 * __useGetAnimeGenresQuery__
 *
 * To run a query within a React component, call `useGetAnimeGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAnimeGenresQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimeGenresQuery, GetAnimeGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeGenresQuery, GetAnimeGenresQueryVariables>(GetAnimeGenresDocument, options);
      }
export function useGetAnimeGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeGenresQuery, GetAnimeGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeGenresQuery, GetAnimeGenresQueryVariables>(GetAnimeGenresDocument, options);
        }
export function useGetAnimeGenresSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnimeGenresQuery, GetAnimeGenresQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeGenresQuery, GetAnimeGenresQueryVariables>(GetAnimeGenresDocument, options);
        }
export type GetAnimeGenresQueryHookResult = ReturnType<typeof useGetAnimeGenresQuery>;
export type GetAnimeGenresLazyQueryHookResult = ReturnType<typeof useGetAnimeGenresLazyQuery>;
export type GetAnimeGenresSuspenseQueryHookResult = ReturnType<typeof useGetAnimeGenresSuspenseQuery>;
export type GetAnimeGenresQueryResult = Apollo.QueryResult<GetAnimeGenresQuery, GetAnimeGenresQueryVariables>;
export const GetAnimeMoviesDocument = gql`
    query GetAnimeMovies($orderBy: [QueryAnimesMoviePageOrderByOrderByClause!], $first: Int!, $page: Int) {
  animesMoviePage(orderBy: $orderBy, first: $first, page: $page) {
    data {
      ...AnimeFragment
    }
  }
}
    ${AnimeFragmentFragmentDoc}`;

/**
 * __useGetAnimeMoviesQuery__
 *
 * To run a query within a React component, call `useGetAnimeMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeMoviesQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetAnimeMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetAnimeMoviesQuery, GetAnimeMoviesQueryVariables> & ({ variables: GetAnimeMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeMoviesQuery, GetAnimeMoviesQueryVariables>(GetAnimeMoviesDocument, options);
      }
export function useGetAnimeMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeMoviesQuery, GetAnimeMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeMoviesQuery, GetAnimeMoviesQueryVariables>(GetAnimeMoviesDocument, options);
        }
export function useGetAnimeMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnimeMoviesQuery, GetAnimeMoviesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnimeMoviesQuery, GetAnimeMoviesQueryVariables>(GetAnimeMoviesDocument, options);
        }
export type GetAnimeMoviesQueryHookResult = ReturnType<typeof useGetAnimeMoviesQuery>;
export type GetAnimeMoviesLazyQueryHookResult = ReturnType<typeof useGetAnimeMoviesLazyQuery>;
export type GetAnimeMoviesSuspenseQueryHookResult = ReturnType<typeof useGetAnimeMoviesSuspenseQuery>;
export type GetAnimeMoviesQueryResult = Apollo.QueryResult<GetAnimeMoviesQuery, GetAnimeMoviesQueryVariables>;
export const GetGenreInfoDocument = gql`
    query GetGenreInfo($id: ID!) {
  AnimeGenreInfo(id: $id) {
    id
    name_fa
    name_en
  }
}
    `;

/**
 * __useGetGenreInfoQuery__
 *
 * To run a query within a React component, call `useGetGenreInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGenreInfoQuery(baseOptions: Apollo.QueryHookOptions<GetGenreInfoQuery, GetGenreInfoQueryVariables> & ({ variables: GetGenreInfoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreInfoQuery, GetGenreInfoQueryVariables>(GetGenreInfoDocument, options);
      }
export function useGetGenreInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreInfoQuery, GetGenreInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreInfoQuery, GetGenreInfoQueryVariables>(GetGenreInfoDocument, options);
        }
export function useGetGenreInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGenreInfoQuery, GetGenreInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGenreInfoQuery, GetGenreInfoQueryVariables>(GetGenreInfoDocument, options);
        }
export type GetGenreInfoQueryHookResult = ReturnType<typeof useGetGenreInfoQuery>;
export type GetGenreInfoLazyQueryHookResult = ReturnType<typeof useGetGenreInfoLazyQuery>;
export type GetGenreInfoSuspenseQueryHookResult = ReturnType<typeof useGetGenreInfoSuspenseQuery>;
export type GetGenreInfoQueryResult = Apollo.QueryResult<GetGenreInfoQuery, GetGenreInfoQueryVariables>;
export const GetUserInfoDocument = gql`
    query GetUserInfo {
  me {
    ...UserInfoFragment
  }
}
    ${UserInfoFragmentFragmentDoc}`;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export function useGetUserInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoSuspenseQueryHookResult = ReturnType<typeof useGetUserInfoSuspenseQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetUserStatusDocument = gql`
    query GetUserStatus {
  me {
    ...UserStatusFragment
  }
}
    ${UserStatusFragmentFragmentDoc}`;

/**
 * __useGetUserStatusQuery__
 *
 * To run a query within a React component, call `useGetUserStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetUserStatusQuery, GetUserStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserStatusQuery, GetUserStatusQueryVariables>(GetUserStatusDocument, options);
      }
export function useGetUserStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserStatusQuery, GetUserStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserStatusQuery, GetUserStatusQueryVariables>(GetUserStatusDocument, options);
        }
export function useGetUserStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserStatusQuery, GetUserStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserStatusQuery, GetUserStatusQueryVariables>(GetUserStatusDocument, options);
        }
export type GetUserStatusQueryHookResult = ReturnType<typeof useGetUserStatusQuery>;
export type GetUserStatusLazyQueryHookResult = ReturnType<typeof useGetUserStatusLazyQuery>;
export type GetUserStatusSuspenseQueryHookResult = ReturnType<typeof useGetUserStatusSuspenseQuery>;
export type GetUserStatusQueryResult = Apollo.QueryResult<GetUserStatusQuery, GetUserStatusQueryVariables>;
export const GetUserBalanceDocument = gql`
    query GetUserBalance {
  me {
    ...UserBalanceFragment
  }
}
    ${UserBalanceFragmentFragmentDoc}`;

/**
 * __useGetUserBalanceQuery__
 *
 * To run a query within a React component, call `useGetUserBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBalanceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserBalanceQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBalanceQuery, GetUserBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBalanceQuery, GetUserBalanceQueryVariables>(GetUserBalanceDocument, options);
      }
export function useGetUserBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBalanceQuery, GetUserBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBalanceQuery, GetUserBalanceQueryVariables>(GetUserBalanceDocument, options);
        }
export function useGetUserBalanceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserBalanceQuery, GetUserBalanceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserBalanceQuery, GetUserBalanceQueryVariables>(GetUserBalanceDocument, options);
        }
export type GetUserBalanceQueryHookResult = ReturnType<typeof useGetUserBalanceQuery>;
export type GetUserBalanceLazyQueryHookResult = ReturnType<typeof useGetUserBalanceLazyQuery>;
export type GetUserBalanceSuspenseQueryHookResult = ReturnType<typeof useGetUserBalanceSuspenseQuery>;
export type GetUserBalanceQueryResult = Apollo.QueryResult<GetUserBalanceQuery, GetUserBalanceQueryVariables>;
export const GetOngoingAnimeDocument = gql`
    query GetOngoingAnime($orderBy: [QueryAnimesOngoingPageOrderByOrderByClause!], $first: Int!, $page: Int) {
  animesOngoingPage(orderBy: $orderBy, first: $first, page: $page) {
    data {
      ...AnimeFragment
    }
  }
}
    ${AnimeFragmentFragmentDoc}`;

/**
 * __useGetOngoingAnimeQuery__
 *
 * To run a query within a React component, call `useGetOngoingAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOngoingAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOngoingAnimeQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetOngoingAnimeQuery(baseOptions: Apollo.QueryHookOptions<GetOngoingAnimeQuery, GetOngoingAnimeQueryVariables> & ({ variables: GetOngoingAnimeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOngoingAnimeQuery, GetOngoingAnimeQueryVariables>(GetOngoingAnimeDocument, options);
      }
export function useGetOngoingAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOngoingAnimeQuery, GetOngoingAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOngoingAnimeQuery, GetOngoingAnimeQueryVariables>(GetOngoingAnimeDocument, options);
        }
export function useGetOngoingAnimeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOngoingAnimeQuery, GetOngoingAnimeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOngoingAnimeQuery, GetOngoingAnimeQueryVariables>(GetOngoingAnimeDocument, options);
        }
export type GetOngoingAnimeQueryHookResult = ReturnType<typeof useGetOngoingAnimeQuery>;
export type GetOngoingAnimeLazyQueryHookResult = ReturnType<typeof useGetOngoingAnimeLazyQuery>;
export type GetOngoingAnimeSuspenseQueryHookResult = ReturnType<typeof useGetOngoingAnimeSuspenseQuery>;
export type GetOngoingAnimeQueryResult = Apollo.QueryResult<GetOngoingAnimeQuery, GetOngoingAnimeQueryVariables>;
export const GetSeasonalAnimesDocument = gql`
    query GetSeasonalAnimes($first: Int!) {
  animesSeason(first: $first) {
    paginatorInfo {
      count
    }
    data {
      ...AnimeFragment
    }
  }
}
    ${AnimeFragmentFragmentDoc}`;

/**
 * __useGetSeasonalAnimesQuery__
 *
 * To run a query within a React component, call `useGetSeasonalAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeasonalAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeasonalAnimesQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
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
export const GetSubtitlesDocument = gql`
    query GetSubtitles($anime_id: ID!, $first: Int!) {
  subtitles: subtitles(anime_id: $anime_id, first: $first) {
    data {
      ...SubtitlesFragment
    }
  }
}
    ${SubtitlesFragmentFragmentDoc}`;

/**
 * __useGetSubtitlesQuery__
 *
 * To run a query within a React component, call `useGetSubtitlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubtitlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubtitlesQuery({
 *   variables: {
 *      anime_id: // value for 'anime_id'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetSubtitlesQuery(baseOptions: Apollo.QueryHookOptions<GetSubtitlesQuery, GetSubtitlesQueryVariables> & ({ variables: GetSubtitlesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubtitlesQuery, GetSubtitlesQueryVariables>(GetSubtitlesDocument, options);
      }
export function useGetSubtitlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubtitlesQuery, GetSubtitlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubtitlesQuery, GetSubtitlesQueryVariables>(GetSubtitlesDocument, options);
        }
export function useGetSubtitlesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubtitlesQuery, GetSubtitlesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubtitlesQuery, GetSubtitlesQueryVariables>(GetSubtitlesDocument, options);
        }
export type GetSubtitlesQueryHookResult = ReturnType<typeof useGetSubtitlesQuery>;
export type GetSubtitlesLazyQueryHookResult = ReturnType<typeof useGetSubtitlesLazyQuery>;
export type GetSubtitlesSuspenseQueryHookResult = ReturnType<typeof useGetSubtitlesSuspenseQuery>;
export type GetSubtitlesQueryResult = Apollo.QueryResult<GetSubtitlesQuery, GetSubtitlesQueryVariables>;
export const HomePageContentDocument = gql`
    query HomePageContent {
  homePageAnimeContent {
    headerText
    parameters
    hasMore
    route
    appBarHeader
    appBarQuery
    content {
      id
      dic_body
      dic_title
      al_score
      al_score_count
      anilist_image_url
      mal_image_url
      dic_score
      anilist_score
      dic_episodes
      dic_last_update
      dic_status
    }
  }
}
    `;

/**
 * __useHomePageContentQuery__
 *
 * To run a query within a React component, call `useHomePageContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageContentQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageContentQuery(baseOptions?: Apollo.QueryHookOptions<HomePageContentQuery, HomePageContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageContentQuery, HomePageContentQueryVariables>(HomePageContentDocument, options);
      }
export function useHomePageContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageContentQuery, HomePageContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageContentQuery, HomePageContentQueryVariables>(HomePageContentDocument, options);
        }
export function useHomePageContentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HomePageContentQuery, HomePageContentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomePageContentQuery, HomePageContentQueryVariables>(HomePageContentDocument, options);
        }
export type HomePageContentQueryHookResult = ReturnType<typeof useHomePageContentQuery>;
export type HomePageContentLazyQueryHookResult = ReturnType<typeof useHomePageContentLazyQuery>;
export type HomePageContentSuspenseQueryHookResult = ReturnType<typeof useHomePageContentSuspenseQuery>;
export type HomePageContentQueryResult = Apollo.QueryResult<HomePageContentQuery, HomePageContentQueryVariables>;
export const SearchAnimeDocument = gql`
    query SearchAnime($query: String, $orderBy: [QueryAnimeSearchOrderByOrderByClause!], $first: Int!) {
  animeSearch(query: $query, orderBy: $orderBy, first: $first) {
    data {
      ...AnimeFragment
    }
  }
}
    ${AnimeFragmentFragmentDoc}`;

/**
 * __useSearchAnimeQuery__
 *
 * To run a query within a React component, call `useSearchAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAnimeQuery({
 *   variables: {
 *      query: // value for 'query'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useSearchAnimeQuery(baseOptions: Apollo.QueryHookOptions<SearchAnimeQuery, SearchAnimeQueryVariables> & ({ variables: SearchAnimeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchAnimeQuery, SearchAnimeQueryVariables>(SearchAnimeDocument, options);
      }
export function useSearchAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchAnimeQuery, SearchAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchAnimeQuery, SearchAnimeQueryVariables>(SearchAnimeDocument, options);
        }
export function useSearchAnimeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchAnimeQuery, SearchAnimeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchAnimeQuery, SearchAnimeQueryVariables>(SearchAnimeDocument, options);
        }
export type SearchAnimeQueryHookResult = ReturnType<typeof useSearchAnimeQuery>;
export type SearchAnimeLazyQueryHookResult = ReturnType<typeof useSearchAnimeLazyQuery>;
export type SearchAnimeSuspenseQueryHookResult = ReturnType<typeof useSearchAnimeSuspenseQuery>;
export type SearchAnimeQueryResult = Apollo.QueryResult<SearchAnimeQuery, SearchAnimeQueryVariables>;
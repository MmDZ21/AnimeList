// hooks/useNavMenus.ts

export function useNavMenus(t: (key: string) => string) {
  return {
    main: [
      {
        label: t("home"),
        href: "/",
      },
      {
        label: t("anime"),
        href: "/anime",
        subMenus: [
          { label: t("softsub"), href: "/anime/softsub" },
          { label: t("animeMovie"), href: "/anime/anime-movie" },
          { label: t("genre"), href: "/genres" },
          { label: t("year"), href: "/anime/year" },
          { label: t("completed"), href: "/anime/completed" },
          { label: t("ongoing"), href: "/anime/ongoing" },
        ],
      },
      {
        label: t("movie"),
        href: "/movies",
        subMenus: [
          { label: t("genre"), href: "/genres" },
          { label: t("year"), href: "/movies/year" },
        ],
      },
      {
        label: t("series"),
        href: "/series",
        subMenus: [
          { label: t("ongoing"), href: "/series/ongoing" },
          { label: t("completed"), href: "/series/completed" },
          { label: t("genre"), href: "/genres" },
          { label: t("year"), href: "/series/year" },
        ],
      },
      {
        label: t("top"),
        href: "/top",
        subMenus: [
          { label: t("anime"), href: "/top/anime" },
          { label: t("movie"), href: "/top/movies" },
          { label: t("series"), href: "/top/series" },
        ],
      },
    ],
    addition: [
      {
        label: t("schedule"),
        href: "/schedule",
      },
      {
        label: t("blog"),
        href: "/blog",
      },
      {
        label: t("ads"),
        href: "/ads",
      },
      {
        label: t("apps"),
        href: "/apps",
      },
    ],
  };
}

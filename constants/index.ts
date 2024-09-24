import {
  Anime,
  EpisodeCardType,
  HeroSlide,
  MediaCardType,
  Subtitle,
  User,
  UserNotification,
} from "@/types/types";
export const heroSlides: HeroSlide[] = [
  {
    title: "عنوان انیمه",
    desc: "سرنوشت جهان در تعادل است زیرا «ارن» قدرت نهایی تایتان ها را آزاد می‌کند. او با عزم شدیدی برای از بین بردن همه کسانی که الدیا را تهدید می‌کنند، ارتش غیرقابل توقفی از تایتان های عظیم الجثه را به سمت مارلی هدایت می‌کند. حالا یک خدمه متشکل از دوستان و دشمنان سابقش به تقلا می‌افتند تا مأموریت مرگ‌بار او را متوقف کنند، تنها سؤال این است که آیا می‌توانند او را متوقف کنند؟",
    imageUrl: "/images/Hero.webp",
    justifyFa: "start",
    justifyEn: "start",
    imgMobilePosition: "center",
    actions: [
      {
        type: "button",
        variant: "default",
        label: "شروع تماشای آنلاین",
        icon: "/svg/play.svg",
        href: "/",
      },
      {
        type: "button",
        variant: "outline",
        label: "افزودن به لیست تماشا",
        icon: "/svg/watchlist.svg",
        href: "/",
        mobileIconOnly: true,
      },
    ],
  },
  {
    title: "Pseudo Harem",
    desc: "سرنوشت جهان در تعادل است زیرا «ارن» قدرت نهایی تایتان ها را آزاد می‌کند. او با عزم شدیدی برای از بین بردن همه کسانی که الدیا را تهدید می‌کنند، ارتش غیرقابل توقفی از تایتان های عظیم الجثه را به سمت مارلی هدایت می‌کند. حالا یک خدمه متشکل از دوستان و دشمنان سابقش به تقلا می‌افتند تا مأموریت مرگ‌بار او را متوقف کنند، تنها سؤال این است که آیا می‌توانند او را متوقف کنند؟",
    imageUrl: "/images/gijiharem.webp",
    imgMobilePosition: "right",
    justifyEn: "start",
    justifyFa: "end",
    actions: [
      {
        type: "button",
        variant: "default",
        label: "شروع تماشای آنلاین",
        icon: "/svg/play.svg",
        href: "/",
      },
      {
        type: "button",
        variant: "outline",
        label: "افزودن به لیست تماشا",
        icon: "/svg/watchlist.svg",
        href: "/",
        mobileIconOnly: true,
      },
    ],
  },
  {
    title: "The Apothecary Diaries",
    desc: "سرنوشت جهان در تعادل است زیرا «ارن» قدرت نهایی تایتان ها را آزاد می‌کند. او با عزم شدیدی برای از بین بردن همه کسانی که الدیا را تهدید می‌کنند، ارتش غیرقابل توقفی از تایتان های عظیم الجثه را به سمت مارلی هدایت می‌کند. حالا یک خدمه متشکل از دوستان و دشمنان سابقش به تقلا می‌افتند تا مأموریت مرگ‌بار او را متوقف کنند، تنها سؤال این است که آیا می‌توانند او را متوقف کنند؟",
    imageUrl: "/images/kusuriya.webp",
    justifyFa: "start",
    justifyEn: "start",
    imgMobilePosition: "center",
    actions: [
      {
        type: "button",
        variant: "default",
        label: "شروع تماشای آنلاین",
        icon: "/svg/play.svg",
        href: "/",
      },
      {
        type: "button",
        variant: "outline",
        label: "افزودن به لیست تماشا",
        icon: "/svg/watchlist.svg",
        href: "/",
        mobileIconOnly: true,
      },
    ],
  },
];

export const recommendations: MediaCardType[] = [
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/onepiece.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
];
export const summerAnime: MediaCardType[] = [
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
  {
    imgUrl: "/images/oshinoko.webp",
    name: "One Piece",
    desc: "زیرنویس چسبیده | پخش آنلاین",
    href: "/",
  },
];

export const userEpisodes: EpisodeCardType[] = [
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "userEpisode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
];

export const newEpisodes: EpisodeCardType[] = [
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
  {
    type: "episode",
    name: "One Piece",
    episode: 9,
    imgUrl: "/images/onepiece.webp",
    href: "/",
    tags: ["زیرنویس چسبیده", "1080p"],
    time: "14:30",
    episodes: 14,
    watched: 9,
    malScore: 8.23,
    aniScore: 79,
  },
];

export const banners = [
  {
    title: "Kaiju",
    logo: "/images/kaijuLogo.png",
    image: "/images/Kaiju.webp",
  },
  {
    title: "Shangri La",
    logo: "/images/shangrilaLogo.png",
    image: "/images/ShangriLa.webp",
  },
];

export const trending = [
  {
    title: "Kusuriya No Hitorigoto",
    image: "/images/Hero.webp",
    tags: "زیرنویس چسبیده | پخش آنلاین",
    description:
      "در دنیایی پر از حیوانات انسان‌نما، «بل لبلانک» تنها کسی بود که به شکل یک انسان عادی به‌دنیا آمده است. بدون داشتن دندان‌های تیز، خز و پولک، به اون لقب بی‌هویت را داده بودند و اون زندگی سخت و پر از تنهایی را سپری می‌کرد و کسی قادر به همدردی با او نبود...",
  },
  {
    title: "Psuedo Harem",
    image: "/images/gijiharem.webp",
    tags: "زیرنویس چسبیده | پخش آنلاین",
    description:
      "در دنیایی پر از حیوانات انسان‌نما، «بل لبلانک» تنها کسی بود که به شکل یک انسان عادی به‌دنیا آمده است. بدون داشتن دندان‌های تیز، خز و پولک، به اون لقب بی‌هویت را داده بودند و اون زندگی سخت و پر از تنهایی را سپری می‌کرد و کسی قادر به همدردی با او نبود...",
  },
];

export const frierenAnime: Anime = {
  type: "series",
  source: "manga",
  status: "completed",
  startDate: "۷ مهر، ۱۴۰۲",
  endDate: "اسفند ۱۴۰۲",
  season: "fall",
  year: 2023,
  episodesCount: 28,
  episodeTime: 26,
  genres: ["ماجراجویی", "درام", "فانتزی", "اکشن"],
  themes: [
    "سفر",
    "الف",
    "جادو",
    "اپیزودیک",
    "سیاه چال",
    "ایاشیکی",
    "تراژدی",
    "فلسفه",
    "شخصیت اصلی زن",
    "پروش زمانی",
    "فرزند خواندگی",
    "شیاطین",
    "منحنی",
    "شونن",
    "روستایی",
    "ارواح",
    "کودن",
    "همزاد",
    "هنروسکشوال",
  ],
  producers: [
    "Dentsu",
    "Nippon Television Network",
    "Aniplex",
    "Shogakukan",
    "TOHO",
  ],
  studio: "MADHOUSE",
  language: "japanese",
  title: "Frieren: Beyond the Journey’s End",
  image: "/images/frieren/cover.webp",
  imageLg: "/images/frieren/lgbg.webp",
  trailers: [
    {
      preview: "/images/frieren/t1.webp",
      title: "Frieren: Beyond Journey's End - PV4",
      url: "/",
    },
    {
      preview: "/images/frieren/t2.webp",
      title: "Frieren: Beyond Journey's End - PV3",
      url: "/",
    },
    {
      preview: "/images/frieren/t3.webp",
      title: "Frieren: Beyond Journey's End - PV2",
      url: "/",
    },
    {
      preview: "/images/frieren/t4.webp",
      title: "Frieren: Beyond Journey's End - PV1",
      url: "/",
    },
  ],
  rating: 8.5,
  votesCount: 250,
  malRating: 8.97,
  anilistRating: 86,
  summary:
    "شاه شیطان شکست خورده و گروه قهرمانان پیروز به سرزمین‌شان بازمی‌گردند و پیش از از هم پاشیدن، از مسیر ده‌ساله‌شان یادآوری می‌کنند. چهار نفر: جادوگر فریرن، قهرمان هیمل، کشیش هایتر و جنگجو ایزن در موقعیتی که باید از یکدیگر خداحافظی کنند...",
  episodes: [
    {
      animeTitle: "Frieren: Beyond the Journey’s End",
      episodeTitle: "The Journey's End",
      preview: "/images/frieren/ep1.webp", // Add correct path or URL
      episodeNumber: 1,
      files: [
        { resolution: 480, size: 94.45, url: "/" },
        { resolution: 720, size: 150.24, url: "/" },
        { resolution: 1080, size: 320.35, url: "/" },
      ],
    },
    {
      animeTitle: "Frieren: Beyond the Journey’s End",
      episodeTitle: "It Didn't Have to Be Magic...",
      preview: "/images/frieren/ep2.webp", // Add correct path or URL
      episodeNumber: 2,
      files: [
        { resolution: 480, size: 94.45, url: "/" },
        { resolution: 720, size: 150.24, url: "/" },
        { resolution: 1080, size: 320.35, url: "/" },
      ],
    },
    // Add more episodes as necessary
  ],
  similars: [
    { title: "Violet Evergarden", image: "/images/frieren/violet.webp" }, // Add correct path or URL
    {
      title: "Wandering Witch: The Journey of Elaina",
      image: "/images/frieren/witch.webp",
    },
    {
      title: "Wandering Witch: The Journey of Elaina",
      image: "/images/frieren/witch.webp",
    },
    {
      title: "Wandering Witch: The Journey of Elaina",
      image: "/images/frieren/witch.webp",
    },
    {
      title: "Wandering Witch: The Journey of Elaina",
      image: "/images/frieren/witch.webp",
    },
    {
      title: "Wandering Witch: The Journey of Elaina",
      image: "/images/frieren/witch.webp",
    },
  ],
  staff: {
    characters: [
      {
        character: {
          name: "Frieren",
          role: "main",
          image: "/images/frieren/frieren.webp", // Add correct path or URL
        },
        voice: {
          name: "Atsumi Tanezaki",
          language: "Japanese",
          image: "/images/frieren/tanezaki.webp", // Add correct path or URL
        },
      },
      {
        character: {
          name: "Frieren",
          role: "main",
          image: "/images/frieren/frieren.webp", // Add correct path or URL
        },
        voice: {
          name: "Atsumi Tanezaki",
          language: "Japanese",
          image: "/images/frieren/tanezaki.webp", // Add correct path or URL
        },
      },
      {
        character: {
          name: "Frieren",
          role: "main",
          image: "/images/frieren/frieren.webp", // Add correct path or URL
        },
        voice: {
          name: "Atsumi Tanezaki",
          language: "Japanese",
          image: "/images/frieren/tanezaki.webp", // Add correct path or URL
        },
      },
      // Add more characters and voices as necessary
    ],
    producers: [
      {
        name: "Keiichiro Saito",
        role: "Director",
        image: "/images/frieren/saito.webp",
      },
      {
        name: "Reiko Nagasawa",
        role: "Character Designer",
        image: "/images/frieren/nagasawa.webp",
      },
      // Add more producers as necessary
    ],
  },
  comments: [
    {
      id: 1,
      user: {
        name: "Arlecchino",
        avatar: "/images/frieren/arlecchino.webp", // Add correct path or URL
      },
      comment:
        "انیمه از نظر دنیا سازی و کاراکتر پردازی خیلی خوبه داستانش هم میشه گفت جوریه که آدم دلش میخواد دنبالش کنه",
      time: "11:00 AM",
      date: "1402/08/08",
      spoiler: false,
      replies: [
        {
          id: 2,
          user: {
            name: "Franz",
            avatar: "/images/frieren/franz.webp", // Add correct path or URL
          },
          comment:
            "کاملاً موافقم، طراحی کاراکترها واقعاً جذاب و منحصر به فرده.",
          time: "11:30 AM",
          date: "1402/08/08",
          spoiler: false,
          replies: [
            {
              id: 3,
              user: {
                name: "Sakura",
                avatar: "/images/frieren/sakura.webp", // Add correct path or URL
              },
              comment: "همچنین، جهان‌سازی به طرز شگفت‌آوری پیچیده و کامل است.",
              time: "12:00 PM",
              date: "1402/08/08",
              spoiler: false,
              replies: [
                {
                  id: 4,
                  user: {
                    name: "Yuki",
                    avatar: "/images/frieren/yuki.webp", // Add correct path or URL
                  },
                  comment:
                    "این یکی از دلایل اصلیه که من هر هفته منتظر اپیزود جدید هستم.",
                  time: "12:30 PM",
                  date: "1402/08/08",
                  spoiler: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      user: {
        name: "Ellen Joe",
        avatar: "/images/frieren/joe.webp", // Add correct path or URL
      },
      comment:
        "تا اپیزود 16 خیلی خوب (نمره 8)، از 16 به بعد عالی (نمره 9). امیدوارم سیزن دومش هم تایید بشه.",
      time: "14:00 PM",
      date: "1402/08/08",
      spoiler: false,
      replies: [
        {
          id: 6,
          user: {
            name: "Hikaru",
            avatar: "/images/frieren/hikaru.webp", // Add correct path or URL
          },
          comment:
            "دقیقاً! خیلی امیدوارم که کیفیتش افت نکنه و مدهاوس کارو ادامه بده.",
          time: "14:30 PM",
          date: "1402/08/08",
          spoiler: true,
        },
        {
          id: 7,
          user: {
            name: "Aiko",
            avatar: "/images/frieren/aiko.webp", // Add correct path or URL
          },
          comment:
            "منم نگران همین هستم، مخصوصاً با تجربه‌ای که از فصل‌های بعدی وان پانچ من داریم.",
          time: "15:00 PM",
          date: "1402/08/08",
          spoiler: false,
        },
      ],
    },
    // Add more comments and nested replies as needed
  ],
};

// Kusuriya no Hitorigoto
export const kusuriyaAnime: Anime = {
  type: "series",
  status: "ongoing",
  startDate: "2023-10-01",
  studio: "Doga Kobo",
  genres: ["Mystery", "Historical"],
  themes: ["Intrigue", "Court Drama"],
  producers: ["Sony Music Entertainment"],
  source: "manga",
  season: "fall",
  year: 2023,
  language: "Japanese",
  title: "Kusuriya no Hitorigoto",
  image: "/images/kusuriya/cover.webp",
  imageLg: "/images/kusuriya/cover-lg.jpg",
  rating: 8.1,
  votesCount: 12000,
  malRating: 8.1,
  anilistRating: 8.0,
  summary:
    "داستان خدمتکار باهوشی که وارد دربار امپراتوری چین می‌شود و به حل معماهای خطرناک می‌پردازد.",
  episodesCount: 12,
  episodeTime: 24,
  episodes: [],
  similars: [],
  staff: { characters: [], producers: [] },
  comments: [],
};

// Vinland Saga Season 2
export const vinlandSagaAnime: Anime = {
  type: "series",
  status: "ongoing",
  startDate: "2023-01-09",
  studio: "MAPPA",
  genres: ["Action", "Adventure", "Drama"],
  themes: ["Historical", "Warfare"],
  producers: ["Twin Engine", "Kodansha"],
  source: "manga",
  season: "winter",
  year: 2023,
  language: "Japanese",
  title: "Vinland Saga Season 2",
  image: "/images/vinland/cover.webp",
  imageLg: "/images/vinland/cover-lg.webp",
  rating: 9.0,
  votesCount: 30000,
  malRating: 9.0,
  anilistRating: 9.1,
  summary:
    "ماجراجویی‌های تاریخی وایکینگ‌ها و تلاش ثورفین برای رسیدن به سرزمین ونلاند.",
  episodesCount: 24,
  episodeTime: 24,
  episodes: [],
  similars: [],
  staff: { characters: [], producers: [] },
  comments: [],
};

// 86 EIGHTY-SIX Part 2
export const eightySixAnime: Anime = {
  type: "series",
  status: "completed",
  startDate: "2021-10-02",
  endDate: "2022-03-19",
  studio: "A-1 Pictures",
  genres: ["Action", "Drama", "Sci-Fi"],
  themes: ["Military", "Mecha"],
  producers: ["Aniplex", "Kadokawa"],
  source: "ln",
  season: "fall",
  year: 2021,
  language: "Japanese",
  title: "86 EIGHTY-SIX Part 2",
  image: "/images/86/cover.jpg",
  imageLg: "/images/86/cover-lg.jpg",
  rating: 8.7,
  votesCount: 18000,
  malRating: 8.7,
  anilistRating: 8.8,
  summary: "ادامه نبردهای یگان 86 و تلاش آنها برای نجات از جنگ‌های بی‌پایان.",
  episodesCount: 12,
  episodeTime: 23,
  episodes: [],
  similars: [],
  staff: { characters: [], producers: [] },
  comments: [],
};

export const dashboardRoutes = [
  { value: "dashboard", label: "داشبورد" },
  { value: "list", label: "لیست من" },
  { value: "subtitles", label: "زیرنویس" },
  { value: "notifications", label: "اطلاعیه‌ها" },
  { value: "tickets", label: "تیکت‌ها" },
  { value: "settings", label: "تنظیمات" },
];
export const dawn: User = {
  id: "12345",
  name: "Dawn",
  avatar: "/images/frieren/frieren.webp",
  isVip: true,
  vipExpiresIn: 1380,
  bio: "عاشق انیمه، علاقه‌مند به فیلم‌ها و مترجم نیمه‌وقت.",
  animeCount: 85,
  watchTime: 6000,
  averageRating: 8.5,
  subtitles: [],
  animeShows: [
    {
      ...frierenAnime,
      episodesWatched: 28,
      seasonsWatched: 1,
      userRating: 10,
      userStatus: "completed",
    },
    {
      ...vinlandSagaAnime,
      episodesWatched: 24,
      seasonsWatched: 1,
      userRating: 9,
      userStatus: "completed",
    },
  ],
  movies: [],
  series: [],
  dramas: [],
  favorites: {
    animeShows: [],
    movies: [],
    series: [],
    dramas: [],
  },
  notifications: [],
  tickets: [
    {
      title: "Frieren: Beyond Journey’s End",
      body: "مشکل در استفاده از اکانت VIP دارم.",
      category: "درخواست انیمه",
      createdAt: "۴ تیر ۱۴۰۳ - ۲۱:۳۰",
      number: 853760,
      status: "replied",
    },
    {
      title: "Frieren: Beyond Journey’s End",
      body: "مشکل در استفاده از اکانت VIP دارم.",
      category: "درخواست انیمه",
      createdAt: "۴ تیر ۱۴۰۳ - ۲۱:۳۰",
      number: 853760,
      status: "closed",
    },
    {
      title: "Frieren: Beyond Journey’s End",
      body: "مشکل در استفاده از اکانت VIP دارم.",
      category: "درخواست انیمه",
      createdAt: "۴ تیر ۱۴۰۳ - ۲۱:۳۰",
      number: 853760,
      status: "pending",
    },
  ],
};
// Sample user for ShinseKai Yuri
export const shinsekaiYuri: User = {
  id: "12346",
  name: "ShinseKai Yuri",
  avatar: "/images/avatars/yuri.png",
  isVip: true,
  vipExpiresIn: 920,
  bio: "مترجم و علاقه‌مند به تاریخ و انیمه‌های حماسی.",
  animeCount: 45,
  watchTime: 3200,
  averageRating: 9.0,
  subtitles: [],
  animeShows: [],
  movies: [],
  series: [],
  dramas: [],
  favorites: {
    animeShows: [],
    movies: [],
    series: [],
    dramas: [],
  },
  notifications: [],
  tickets: [],
};

// Sample user for SayaKa
export const sayaka: User = {
  id: "12347",
  name: "SayaKa",
  avatar: "/images/avatars/sayaka.png",
  isVip: false,
  vipExpiresIn: 0,
  bio: "مترجم نیمه‌وقت، دوستدار فانتزی و انیمه‌های جادویی.",
  animeCount: 55,
  watchTime: 4000,
  averageRating: 8.2,
  subtitles: [],
  animeShows: [],
  movies: [],
  series: [],
  dramas: [],
  favorites: {
    animeShows: [],
    movies: [],
    series: [],
    dramas: [],
  },
  notifications: [],
  tickets: [],
};

// Sample user for CWThierry
export const cwThierry: User = {
  id: "12348",
  name: "CWThierry",
  avatar: "/images/avatars/cwthierry.png",
  isVip: true,
  vipExpiresIn: 720,
  bio: "عاشق انیمه و فرهنگ‌های مختلف، مترجم چند زبانه.",
  animeCount: 70,
  watchTime: 5800,
  averageRating: 8.7,
  subtitles: [],
  animeShows: [],
  movies: [],
  series: [],
  dramas: [],
  favorites: {
    animeShows: [],
    movies: [],
    series: [],
    dramas: [],
  },
  notifications: [],
  tickets: [],
};

export const kusuriyaSubtitle: Subtitle = {
  episode: {
    animeTitle: "Kusuriya no Hitorigoto",
    episodeTitle: "Episode 12",
    episodeNumber: 12,
    preview: "/images/kusuriyaSub.webp",
    files: [
      { resolution: 720, size: 500, url: "/subs/kusuriya/ep12-720p.srt" },
      { resolution: 1080, size: 800, url: "/subs/kusuriya/ep12-1080p.srt" },
    ],
  },
  translators: [],
  href: "/subs/kusuriya",
  downloadUrl: "/subs/kusuriya/download",
  anime: kusuriyaAnime,
};

// Subtitle for "Vinland Saga Season 2"
export const vinlandSagaSubtitle: Subtitle = {
  episode: {
    animeTitle: "Vinland Saga Season 2",
    episodeTitle: "Episode 14",
    episodeNumber: 14,
    preview: "/images/vinlandSub.webp",
    files: [
      { resolution: 720, size: 600, url: "/subs/vinland/ep14-720p.srt" },
      { resolution: 1080, size: 900, url: "/subs/vinland/ep14-1080p.srt" },
    ],
  },
  translators: [],
  href: "/subs/vinland",
  downloadUrl: "/subs/vinland/download",
  anime: vinlandSagaAnime,
};

// Subtitle for "86 EIGHTY-SIX Part 2"
export const eightySixSubtitle: Subtitle = {
  episode: {
    animeTitle: "86 EIGHTY-SIX Part 2",
    episodeTitle: "Episode 14",
    episodeNumber: 14,
    preview: "/images/eightysixSub.webp",
    files: [
      { resolution: 720, size: 550, url: "/subs/86/ep14-720p.srt" },
      { resolution: 1080, size: 850, url: "/subs/86/ep14-1080p.srt" },
    ],
  },
  translators: [],
  href: "/subs/86",
  downloadUrl: "/subs/86/download",
  anime: eightySixAnime,
};

kusuriyaSubtitle.translators = [sayaka, cwThierry, dawn];
vinlandSagaSubtitle.translators = [shinsekaiYuri, dawn];
eightySixSubtitle.translators = [dawn];

sayaka.subtitles.push(kusuriyaSubtitle);
cwThierry.subtitles.push(kusuriyaSubtitle);
dawn.subtitles.push(kusuriyaSubtitle, vinlandSagaSubtitle, eightySixSubtitle);
shinsekaiYuri.subtitles.push(vinlandSagaSubtitle);

export const exampleNotif1: UserNotification = {
  createdAt: 5,
  body: "قسمت بیست‌و‌هشتم Frieren: Beyond Journey’s End منتشر شد.",
  image: "/images/frieren/cover.webp",
  seen: false,
};
export const exampleNotif2: UserNotification = {
  createdAt: 5,
  body: "کاربر ArvinA454 فعالیت شما را لایک کرد.",
  image: "/images/frieren/cover.webp",
  seen: false,
};
export const exampleNotif3: UserNotification = {
  createdAt: 5,
  body: "کاربر ThatGuySky فعالیت شما را لایک کرد.",
  image: "/images/frieren/cover.webp",
  seen: false,
};

dawn.notifications.push(exampleNotif1, exampleNotif2, exampleNotif3);

export const blog1: {
  user: User;
  createdAt: string;
  title: string;
  image: string;
} = {
  title: "لیستی از بهترین انیمه‌های فانتزی",
  createdAt: "چهارشنبه، ۱۶ مهر",
  user: dawn,
  image: "/images/blogs/b1.webp",
};
export const blog2: {
  user: User;
  createdAt: string;
  title: string;
  image: string;
} = {
  title: "تاپ ۱۰ لحظات برتر انیمهٔ فریرن",
  createdAt: "چهارشنبه، ۱۶ مهر",
  user: dawn,
  image: "/images/blogs/b2.webp",
};
export const blog3: {
  user: User;
  createdAt: string;
  title: string;
  image: string;
} = {
  title: "نگاهی به آثار استودیو مدهوس",
  createdAt: "چهارشنبه، ۱۶ مهر",
  user: dawn,
  image: "/images/blogs/b3.webp",
};

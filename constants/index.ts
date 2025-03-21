import {
  Anime,
  EpisodeCardType,
  Genre,
  HeroSlide,
  MediaCardType,
  Plan,
  Subtitle,
  User,
  UserNotification,
} from "@/types/types";

import Dashboard from "@/components/dashboard/Dashboard";
import List from "@/components/dashboard/List";
import Subtitles from "@/components/dashboard/Subtitles";
import Notifications from "@/components/dashboard/Notifications";
import Tickets from "@/components/dashboard/Tickets";
import Membership from "@/components/dashboard/Membership";
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
  englishTitle: "Frieren: Beyond the Journey’s End",
  persianTitle: "فریرن: فراتر از پایان سفر",
  title: "Sousou no Frieren",
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
  englishTitle: "The Apothecary Diaries",
  persianTitle: "خاطرات داروساز",
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
  englishTitle: "Vinland Saga Season 2",
  persianTitle: "حماسه وینلند فصل ۲",
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
  title: "86 Part 2",
  englishTitle: "86 EIGHTY-SIX Part 2",
  persianTitle: "هشتاد و شش پارت ۲",
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
  // { value: "dashboard", label: "داشبورد", content: Dashboard },
  // { value: "list", label: "لیست من" , content: List },
  // { value: "subtitles", label: "زیرنویس" , content: Subtitles },
  // { value: "notifications", label: "اطلاعیه‌ها", content: Notifications  },
  // { value: "tickets", label: "تیکت‌ها" , content: Tickets },
  { value: "membership", label: "اشتراک من", content: Membership },
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
    episodeTitle: "Episode 13",
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

export const genres: Genre[] = [
  {
    image: "/images/genres/cover.webp",
    title: "اکشن",
    subtitle: "Action Anime",
    href: "/anime/genre/1/action",
  },
  {
    image: "/images/genres/cover.webp",
    title: "درام",
    subtitle: "Drama Anime",
    href: "/anime/genre/8/drama",
  },
  {
    image: "/images/genres/cover.webp",
    title: "کمدی",
    subtitle: "Comedy Anime",
    href: "/anime/genre/4/comedy",
  },
  {
    image: "/images/genres/cover.webp",
    title: "موسیقی",
    subtitle: "Music Anime",
    href: "/anime/genre/19/music",
  },
  {
    image: "/images/genres/cover.webp",
    title: "ترسناک",
    subtitle: "Horror Anime",
    href: "/anime/genre/14/horror",
  },
  {
    image: "/images/genres/cover.webp",
    title: "عاشقانه",
    subtitle: "Romance Anime",
    href: "/anime/genre/22/romance",
  },
  {
    image: "/images/genres/cover.webp",
    title: "علمی تخیلی",
    subtitle: "Sci-Fi Anime",
    href: "/anime/genre/24/sci-fi",
  },
  {
    image: "/images/genres/cover.webp",
    title: "روان شناختی",
    subtitle: "Psychological Anime",
    href: "/anime/genre/40/psychological",
  },
  {
    image: "/images/genres/cover.webp",
    title: "رازآلود",
    subtitle: "Mystery Anime",
    href: "/anime/genre/7/mystery",
  },
  {
    image: "/images/genres/cover.webp",
    title: "ورزشی",
    subtitle: "Sports Anime",
    href: "/anime/genre/30/sports",
  },
  {
    image: "/images/genres/cover.webp",
    title: "ماوراء طبیعی",
    subtitle: "Supernatural Anime",
    href: "/anime/genre/37/supernatural",
  },
];
export const years = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];
export const menuItems = [
  { label: "انیمه سینمایی", count: 1282 },
  { label: "دونگوها", count: 3456 },
  { label: "انیمه", count: 7536 },
  { label: "سریال", count: 1466 },
  { label: "دراما", count: 2282 },
  { label: "فیلم", count: 15915 },
  { label: "برترین سریال‌ها", count: null },
  { label: "برترین فیلم‌ها", count: null },
  { label: "برترین انیمه‌ها", count: null },
];

export const walletTips = [
  "پس از انتقال به درگاه باید در عرض 15 دقیقه تراکنش انتقال ارز را انجام دهید؛ در غیر اینصورت فاکتور ایجاد شده منقضی خواهد شد.",
  "مبلغ ارسالی باید دقیقاً برابر با مبلغ نمایش داده شده در صفحه درگاه پرداخت باشد. هزینه یا کارمزد انتقال از کیف پول یا صرافی نباید از مبلغ ارسالی کسر شود.",
  "پرداخت شما پس از دریافت تائیدیه از طرف شبکه، به صورت خودکار تائید خواهد شد و ممکن است 15 دقیقه یا بیشتر طول بکشد. در صورتی که پس از 24 ساعت، پرداخت شما تائید نشد برای ما تیکت ارسال کنید.",
  "به ازای هر دلار کیف پول شما ۹۱۰۰۰ تومان شارژ خواهد شد.",
];

export const walletChargeOptions = ["1", "2", "3", "4", "5", "custom"];

export const features = [
  "تماشای آفلاین",
  "امکان استفاده از پخش آنلاین",
  "دانلود با ترافیک مصرفی نیم بها",
  "سرعت بالا و بدون محدودیت در دانلود",
];
export const membershipPlans: Plan[] = [
  {
    days: 30,
    bonusDays: 0,
    mostPopular: false,
    price: 60000,
    value: "1",
    image: "/images/blogs/b2.webp",
  },
  {
    days: 60,
    bonusDays: 6,
    mostPopular: true,
    price: 120000,
    value: "2",
    image: "/images/blogs/b1.webp",
  },
  {
    days: 90,
    bonusDays: 10,
    mostPopular: false,
    price: 180000,
    value: "3",
    image: "/images/blogs/b3.webp",
  },
];

export const yearsList = [
  1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
  1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994,
  1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021, 2022, 2023, 2024, 2025,
];

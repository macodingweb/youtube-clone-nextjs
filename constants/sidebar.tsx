import {
  Downloads,
  Gaming,
  Help,
  History,
  Home,
  LikedVideos,
  Live,
  Music,
  Playlists,
  ReportHistory,
  SendFeedback,
  Settings,
  Shorts,
  Sports,
  Subscriptions,
  Trending,
  WatchLater,
  YourVideos,
  YouTubeKids,
  YouTubeMusic,
  YouTubePremium,
  YouTubeStudio,
} from "@/components/Icons";

export const SideLinks = [
  {
    type: "main",
    links: [
      {
        icon: <Home />,
        active: true,
        text: "Home",
        href: "/",
      },
      {
        icon: <Shorts />,
        text: "Shorts",
        href: "/shorts",
      },
      {
        icon: <Subscriptions />,
        text: "Subscriptions",
        href: "/subscriptions",
      },
    ],
  },
  {
    title: "You",
    type: "feed",
    explore: "/feed/you",
    links: [
      {
        icon: <History />,
        text: "History",
        href: "/feed/history",
      },
      {
        icon: <Playlists />,
        text: "Playlists",
        href: "/feed/playlists",
      },
      {
        icon: <YourVideos />,
        text: "Your videos",
        href: "#",
      },
      {
        icon: <WatchLater />,
        text: "Watch later",
        href: "/feed/watch-later",
      },
      {
        icon: <LikedVideos />,
        text: "Liked videos",
        href: "/feed/liked-videos",
      },
      {
        icon: <Downloads />,
        text: "Downloads",
        href: "/feed/downloads",
      },
    ],
  },
  {
    title: "Subscriptions",
    type: "people",
    links: [
      {
        avatar: "/",
        text: "Elzero Web School",
        href: "/@ElzeroWebSchool",
      },
      {
        avatar: "/",
        text: "في الضلمة - In the dark",
        href: "/@-inthedark",
      },
      {
        avatar: "/",
        text: "Mo style",
        href: "/@Mostyle1",
      },
      {
        avatar: "/",
        text: "Karim Yl3b",
        href: "/@KarimYl3b",
      },
      {
        avatar: "/",
        text: "حكايات مارو - 7ikayat Maro",
        href: "/@7ikayat_Maro",
      },
      {
        avatar: "/",
        text: "Sameh Hussien - سامح حسين",
        href: "/@samehhussien-4963",
      },
    ],
  },
  {
    title: "Explore",
    type: "feed",
    links: [
      {
        icon: <Trending />,
        text: "Trending",
        href: "/feed/",
      },
      {
        icon: <Music />,
        text: "Music",
        href: "/feed/",
      },
      {
        icon: <Live />,
        text: "Live",
        href: "/feed/",
      },
      {
        icon: <Gaming />,
        text: "Gaming",
        href: "/feed/",
      },
      {
        icon: <Sports />,
        text: "Sports",
        href: "/feed/",
      },
    ],
  },
  {
    title: "More from YouTube",
    type: "extra",
    links: [
      {
        icon: <YouTubePremium />,
        text: "YouTube Premium",
        href: "#",
      },
      {
        icon: <YouTubeStudio />,
        text: "YouTube Studio",
        href: "#",
      },
      {
        icon: <YouTubeMusic />,
        text: "YouTube Music",
        href: "#",
      },
      {
        icon: <YouTubeKids />,
        text: "YouTube Kids",
        href: "#",
      },
    ],
  },
  {
    type: "settings",
    links: [
      {
        icon: <Settings />,
        text: "Settings",
        href: "/settings",
      },
      {
        icon: <ReportHistory />,
        text: "Report history",
        href: "/report-history",
      },
      {
        icon: <Help />,
        text: "Help",
        href: "#",
      },
      {
        icon: <SendFeedback />,
        text: "Send feedback",
        href: "#",
      },
    ],
  },
];

export const FastLinks = [
  [
    {
      text: "About",
      href: "#",
    },
    {
      text: "Press",
      href: "#",
    },
    {
      text: "Copyright",
      href: "#",
    },
    {
      text: "Contact us",
      href: "#",
    },
    {
      text: "Creators",
      href: "#",
    },
    {
      text: "Avertise",
      href: "#",
    },
    {
      text: "Developers",
      href: "#",
    },
  ],
  [
    {
      text: "Terms",
      href: "#",
    },
    {
      text: "Privacy",
      href: "#",
    },
    {
      text: "Policy & Safety",
      href: "#",
    },
    {
      text: "How YouTube works",
      href: "#",
    },
    {
      text: "Test new features",
      href: "#",
    },
  ],
];

export interface InterestItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  favorites: string[];
}

export const interests: InterestItem[] = [
  {
    id: "cinema",
    index: "01",
    title: "Anime, Series & Film",
    tagline: "Stories, worldbuilding, and frame composition",
    description:
      "Suka menyelami cerita dengan worldbuilding yang matang, plot twist yang elegan, dan visual sinematografi yang memanjakan mata.",
    image: "/images/cinema.png",
    favorites: [
      "Frieren: Beyond Journey's End",
      "Steins;Gate",
      "Interstellar",
      "Severance",
      "Arcane",
    ],
  },
  {
    id: "music",
    index: "02",
    title: "Music",
    tagline: "Soundtracks for focus and motion",
    description:
      "Teman saat fokus, perjalanan, debugging, atau sekadar ingin membuat suasana terasa sedikit lebih sinematik.",
    image: "/images/music.png",
    favorites: [
      "Indie / Alternative",
      "Lo-Fi Beats",
      "Film Scores",
      "City Pop",
      "J-Rock",
    ],
  },
  {
    id: "books",
    index: "03",
    title: "Books",
    tagline: "A small, growing shelf",
    description:
      "Belum menjadi pembaca paling rajin, tapi selalu terbuka pada buku yang bisa mengubah cara melihat sesuatu.",
    image: "/images/book.png",
    favorites: [
      "Designing Data-Intensive Applications",
      "Atomic Habits",
      "Klara and the Sun",
      "Thinking, Fast and Slow",
    ],
  },
  {
    id: "games",
    index: "04",
    title: "Games",
    tagline: "Play, fail, learn, repeat",
    description:
      "Ruang untuk eksplorasi, strategi, cerita interaktif, dan menikmati sistem yang dirancang dengan baik.",
    image: "/images/game.png",
    favorites: [
      "Hollow Knight",
      "Persona 5 Royal",
      "The Legend of Zelda",
      "Genshin Impact",
    ],
  },
];


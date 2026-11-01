export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "pr-himalkom",
    role: "Public Relations Staff",
    organization: "Himalkom IPB University",
    period: "2024 — Present",
    location: "Bogor, Indonesia",
    description:
      "Mengelola komunikasi eksternal organisasi, kemitraan media, branding publikasi departemen, dan memfasilitasi hubungan antara civitas akademika dengan industri teknologi.",
    highlights: [
      "Mengorkestrasikan kampanye media sosial dan publikasi event teknologi berskala nasional.",
      "Membangun hubungan kemitraan dengan organisasi kemahasiswaan dan partner industri.",
      "Menyusun press release dan konten komunikasi resmi himpunan.",
    ],
  },
  {
    id: "class-rep",
    role: "Class Representative",
    organization: "Software Engineering — IPB University",
    period: "2023 — Present",
    location: "Bogor, Indonesia",
    description:
      "Menjadi jembatan komunikasi utama antara dosen pengampu dan mahasiswa satu angkatan, mengoordinasikan jadwal perkuliahan, praktikum laboratorium, dan diskusi kelompok.",
    highlights: [
      "Mengelola aspirasi dan koordinasi akademik untuk 50+ mahasiswa seangkatan.",
      "Memfasilitasi kelompok belajar untuk mata kuliah algoritma, struktur data, dan rekayasa perangkat lunak.",
    ],
  },
  {
    id: "active-member",
    role: "Active Member & Collaborator",
    organization: "Tech & Data Community IPB",
    period: "2023 — Present",
    location: "Bogor, Indonesia",
    description:
      "Berpartisipasi aktif dalam workshop eksplorasi data science, pengembangan open-source, sesi coding bersama, dan studi kasus machine learning.",
    highlights: [
      "Berkolaborasi dalam mini-hackathons dan eksplorasi data terbuka (open data).",
      "Berbagi wawasan mengenai spatial data processing dan reproducible research.",
    ],
  },
];


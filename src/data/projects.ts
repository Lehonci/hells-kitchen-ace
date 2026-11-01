export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  highlight: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  details?: {
    overview: string;
    challenges: string;
    architecture?: string[];
    metrics?: { label: string; value: string }[];
  };
}

export const projects: Project[] = [
  {
    id: "olist-pipeline",
    index: "01",
    title: "Olist Big Data Pipeline",
    category: "Data Engineering",
    highlight: "Real-time ingestion architecture",
    description:
      "Pipeline transaksi e-commerce bervolume tinggi untuk data cleaning, aggregation, dan customer segmentation berbasis RFM.",
    tags: ["Kafka", "PySpark", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/zafiraryani",
    details: {
      overview:
        "Arsitektur end-to-end data pipeline untuk memproses ratusan ribu transaksi pesanan e-commerce Olist secara berkala dengan fault-tolerant queuing.",
      challenges:
        "Menghandle data skewing pada aggregasi jam sibuk dan memastikan integritas data skema relasional saat transformasi besar.",
      metrics: [
        { label: "Data Processed", value: "100k+ orders" },
        { label: "Latency", value: "< 2.5s" },
        { label: "Storage", value: "PostgreSQL OLAP" },
      ],
    },
  },
  {
    id: "siren",
    index: "02",
    title: "SIREN",
    category: "Spatial Engineering",
    highlight: "PostGIS spatial routing",
    description:
      "Sistem respons emergensi dan navigasi dengan shortest-path routing, spatial query optimization, dan dashboard dispatch ambulans.",
    tags: ["PostGIS", "pgRouting", "GeoJSON", "Leaflet", "Python"],
    repoUrl: "https://github.com/zafiraryani",
    details: {
      overview:
        "Sistem Informasi Geografis (WebGIS) respons cepat untuk mitigasi keterlambatan unit gawat darurat dengan algoritma shortest path jalan raya.",
      challenges:
        "Optimasi query spasial topologi jalan dan live traffic mock data pada radius operasi ambulans perkotaan.",
      metrics: [
        { label: "Routing Latency", value: "< 120ms" },
        { label: "Coverage", value: "Kota Bogor" },
        { label: "Algorithm", value: "Dijkstra / A*" },
      ],
    },
  },
  {
    id: "veriface",
    index: "03",
    title: "Veriface",
    category: "AI / Computer Vision",
    highlight: "Real-time biometrics & anti-spoofing",
    description:
      "Sistem verifikasi presensi dan autentikasi biometrik wajah real-time dengan model anti-spoofing liveness detection.",
    tags: ["PyTorch", "OpenCV", "FaceNet", "FastAPI"],
    repoUrl: "https://github.com/zafiraryani",
    details: {
      overview:
        "Solusi biometrik pengenalan wajah berkecepatan tinggi dengan pertahanan terhadap serangan foto/layar digital (anti-spoofing).",
      challenges:
        "Mengurangi False Acceptance Rate (FAR) dalam kondisi pencahayaan rendah tanpa mengorbankan framerate video stream.",
      metrics: [
        { label: "Accuracy", value: "98.7%" },
        { label: "FPS", value: "28+ fps" },
        { label: "Latency", value: "45ms" },
      ],
    },
  },
  {
    id: "ames-housing",
    index: "04",
    title: "Ames Housing",
    category: "Data Modeling",
    highlight: "Predictive analytics & regression",
    description:
      "Analisis regresi prediktif harga properti dengan feature engineering komprehensif, regularisasi Lasso/Ridge, dan interpretasi model.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
    repoUrl: "https://github.com/zafiraryani",
    details: {
      overview:
        "Proyek pemodelan harga rumah Ames Iowa dengan penanganan 79 variabel heterogen (kategorikal & numerik) serta analisis outlier multivariat.",
      challenges:
        "Multikolinearitas antar fitur spasial dan struktural rumah yang memerlukan seleksi fitur ketat dan transformasi logaritma.",
      metrics: [
        { label: "RMSE", value: "0.114" },
        { label: "R² Score", value: "0.912" },
        { label: "Features", value: "35 engineered" },
      ],
    },
  },
  {
    id: "sleep-quality",
    index: "05",
    title: "Sleep Quality Insights",
    category: "Data Analytics",
    highlight: "Behavioral cluster analysis",
    description:
      "Eksplorasi faktor gaya hidup terhadap kualitas tidur menggunakan clustering dan analisis korelasi multivariat.",
    tags: ["R", "tidyverse", "ggplot2", "Statistical Analysis"],
    repoUrl: "https://github.com/zafiraryani",
    details: {
      overview:
        "Analisis data kesehatan perilaku untuk mengidentifikasi korelasi antara durasi screen time, aktivitas fisik, konsumsi kafein, dan tahapan tidur lelap.",
      challenges:
        "Normalisasi data self-reported dan ekstraksi pola kelompok pengguna menggunakan K-Means dan Hierarchical Clustering.",
      metrics: [
        { label: "Clusters", value: "4 personae" },
        { label: "Significance", value: "p < 0.01" },
        { label: "Sample", value: "1,200+ logs" },
      ],
    },
  },
  {
    id: "bloomy",
    index: "06",
    title: "Charmbuddy · bloo.my",
    category: "Web Platform",
    highlight: "Fullstack e-commerce application",
    description:
      "Platform e-commerce katalog produk kustom dengan dynamic state management dan checkout flow terintegrasi.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    repoUrl: "https://github.com/zafiraryani",
    details: {
      overview:
        "Aplikasi web storefront modern dengan pengalaman belanja seamless, preview custom merchandise secara interaktif, dan integrasi WhatsApp checkout.",
      challenges:
        "Membuat sistem filter multi-kategori instan dan keranjang belanja berbasis local persistence tanpa lag.",
      metrics: [
        { label: "Lighthouse", value: "98/100" },
        { label: "Components", value: "Atomic UI" },
        { label: "Mobile First", value: "100% responsive" },
      ],
    },
  },
  {
    id: "networld-ar",
    index: "07",
    title: "NETWORLD AR",
    category: "Augmented Reality",
    highlight: "Spatial computing visualization",
    description:
      "Pengalaman augmented reality interaktif untuk visualisasi topologi jaringan komputer 3D di ruang fisik.",
    tags: ["Unity", "AR Foundation", "C#", "3D Modeling"],
    repoUrl: "https://github.com/zafiraryani",
    details: {
      overview:
        "Media pembelajaran interaktif berteknologi Augmented Reality untuk melihat alur transmisi paket data antara router, switch, dan client secara spasial.",
      challenges:
        "Tracking permukaan bidang datar yang stabil dan optimasi polygon mesh 3D agar ringan di smartphone Android/iOS.",
      metrics: [
        { label: "Platform", value: "Android / ARCore" },
        { label: "FPS", value: "60 fps" },
        { label: "Interactive Nodes", value: "12 network units" },
      ],
    },
  },
];


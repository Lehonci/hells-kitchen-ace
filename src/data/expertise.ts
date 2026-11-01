export interface ExpertiseDomain {
  id: string;
  index: string;
  title: string;
  description: string;
  skills: string[];
}

export const expertiseDomains: ExpertiseDomain[] = [
  {
    id: "data-analytics",
    index: "01",
    title: "Data Analytics & Modeling",
    description:
      "Transforming raw transactional and behavioral datasets into predictive power, statistical clarity, and actionable business insights.",
    skills: [
      "Python",
      "R",
      "Scikit-Learn",
      "Pandas & NumPy",
      "Statistical Modeling",
      "Hypothesis Testing",
      "Feature Engineering",
      "EDA & Visualization",
      "Regression & Classification",
    ],
  },
  {
    id: "data-engineering",
    index: "02",
    title: "Data Engineering",
    description:
      "Designing fault-tolerant streaming pipelines, distributed batch jobs, and resilient relational database architectures.",
    skills: [
      "Apache Kafka",
      "PySpark",
      "PostgreSQL",
      "Advanced SQL",
      "Docker",
      "ETL / ELT Pipelines",
      "Schema Design",
      "Database Optimization",
    ],
  },
  {
    id: "spatial-engineering",
    index: "03",
    title: "Spatial Engineering & WebGIS",
    description:
      "Leveraging geographic information systems to solve spatial routing, geofencing, urban accessibility, and map-based dispatching.",
    skills: [
      "PostGIS",
      "pgRouting",
      "QGIS",
      "GeoJSON / Shapefile",
      "Leaflet & Mapbox",
      "Spatial SQL",
      "Geospatial Network Analysis",
    ],
  },
  {
    id: "ai-cv",
    index: "04",
    title: "AI, Computer Vision & Automation",
    description:
      "Building practical AI systems, computer vision models with real-time inference, and reliable automation scripts.",
    skills: [
      "PyTorch",
      "OpenCV",
      "Deep Learning",
      "Biometrics / Anti-Spoofing",
      "FastAPI Inference",
      "Data Annotation",
    ],
  },
  {
    id: "software-web-ar",
    index: "05",
    title: "Software, Web & AR Development",
    description:
      "Developing modern, responsive frontend web applications and interactive spatial computing simulations in 3D.",
    skills: [
      "TypeScript",
      "Next.js & React",
      "Tailwind CSS",
      "RESTful APIs",
      "Unity & AR Foundation",
      "Git & GitHub Actions",
    ],
  },
];


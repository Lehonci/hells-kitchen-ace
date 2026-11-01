-- ==============================================================================
-- Supabase Schema for Zafira Ryani Putri's Portfolio
-- ==============================================================================

-- 1. Table: messages (Form "Let's Connect" & Kontak Rekruter)
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    organization TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to insert messages (contact form submission)
CREATE POLICY "Allow public insert messages" 
ON public.messages 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated user (owner) to view and manage messages
CREATE POLICY "Allow owner to view and update messages" 
ON public.messages 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);


-- 2. Table: projects (Opsional: Dynamic Projects Data)
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    index_number TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    category_color TEXT DEFAULT '#A8242F',
    description TEXT NOT NULL,
    highlight TEXT,
    tags TEXT[] NOT NULL DEFAULT '{}',
    repo_url TEXT,
    demo_url TEXT,
    featured BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Allow public read projects" 
ON public.projects 
FOR SELECT 
TO public 
USING (true);

-- Insert initial seed data based on Figma
INSERT INTO public.projects (id, index_number, title, category, description, highlight, tags, repo_url)
VALUES
    ('olist-pipeline', '01', 'Olist Big Data Pipeline', 'Data Engineering', 'Pipeline transaksi e-commerce bervolume tinggi untuk data cleaning, aggregation, dan customer segmentation berbasis RFM.', 'Real-time ingestion architecture', ARRAY['Kafka', 'PySpark', 'PostgreSQL', 'Docker'], 'https://github.com/'),
    ('siren', '02', 'SIREN', 'Spatial Engineering', 'Sistem respons emergensi dan navigasi dengan shortest-path routing, spatial query optimization, dan dashboard dispatch ambulans.', 'PostGIS spatial routing', ARRAY['PostGIS', 'pgRouting', 'GeoJSON', 'Leaflet', 'Python'], 'https://github.com/'),
    ('veriface', '03', 'Veriface', 'AI / Computer Vision', 'Sistem pengenalan wajah real-time dengan anti-spoofing detection dan verifikasi identitas berbasis deep learning.', 'Real-time biometrics', ARRAY['PyTorch', 'OpenCV', 'FaceNet', 'FastAPI'], 'https://github.com/'),
    ('ames-housing', '04', 'Ames Housing', 'Data Modeling', 'Analisis regresi prediktif harga properti dengan feature engineering komprehensif, regularisasi Lasso/Ridge, dan interpretasi model.', 'Predictive analytics & regression', ARRAY['Python', 'Scikit-Learn', 'Pandas', 'Seaborn'], 'https://github.com/'),
    ('sleep-quality', '05', 'Sleep Quality Insights', 'Data Analytics', 'Eksplorasi faktor gaya hidup terhadap kualitas tidur menggunakan clustering dan analisis korelasi multivariat.', 'Behavioral cluster analysis', ARRAY['R', 'tidyverse', 'ggplot2', 'Statistical Analysis'], 'https://github.com/'),
    ('bloomy', '06', 'Charmbuddy · bloo.my', 'Web Platform', 'Platform e-commerce katalog produk kustom dengan dynamic state management dan checkout flow terintegrasi.', 'Fullstack web application', ARRAY['Next.js', 'React', 'Tailwind CSS', 'TypeScript'], 'https://github.com/'),
    ('networld-ar', '07', 'NETWORLD AR', 'Augmented Reality', 'Pengalaman augmented reality interaktif untuk visualisasi topologi jaringan komputer 3D di ruang fisik.', 'Spatial computing visualization', ARRAY['Unity', 'AR Foundation', 'C#', '3D Modeling'], 'https://github.com/')
ON CONFLICT (id) DO NOTHING;


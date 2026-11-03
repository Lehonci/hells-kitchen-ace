import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-serif text-[#F2F0EB] mb-4">404 — Page Not Found</h2>
      <p className="text-sm text-white/60 mb-6 font-mono">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-widest text-[#F2F0EB] border-b border-white/30 pb-0.5 hover:text-[#A8242F] hover:border-[#A8242F] transition-colors"
      >
        ← Back
      </Link>
    </div>
  );
}


import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#000205] text-white pt-24 pb-12 px-6 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        
        <div className="max-w-sm">
          <span className="text-3xl font-bold tracking-tight text-white mb-6 block" style={{ background: "var(--hero-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            AquaNova
          </span>
          <p className="text-white/60 mb-8">
            The next generation of zero-emission exploring. Reimagining the relationship between luxury, technology, and the ocean.
          </p>
          <Link href="/contact" className="inline-block border-b border-[var(--accent)] text-[var(--accent)] hover:text-white hover:border-white transition-colors pb-1">
            Build Your Voyage
          </Link>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white/90">Models</h4>
            <Link href="/#models" className="text-white/50 hover:text-[var(--accent)] transition-colors">Nova 45</Link>
            <Link href="/#models" className="text-white/50 hover:text-[var(--accent)] transition-colors">Nova 60</Link>
            <Link href="/#models" className="text-white/50 hover:text-[var(--accent)] transition-colors">Nova 80</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white/90">Company</h4>
            <Link href="/#about" className="text-white/50 hover:text-[var(--accent)] transition-colors">About</Link>
            <Link href="/#careers" className="text-white/50 hover:text-[var(--accent)] transition-colors">Careers</Link>
            <Link href="/#press" className="text-white/50 hover:text-[var(--accent)] transition-colors">Press</Link>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} AquaNova Yachts. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/#privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/#terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

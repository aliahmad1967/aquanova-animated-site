import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#000205] text-white pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[400px] md:w-[600px] h-[150px] sm:h-[250px] md:h-[400px] bg-cyan-500/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-12 md:gap-16 mb-14 sm:mb-16 md:mb-20 relative z-10">
        
        <div className="max-w-xs sm:max-w-sm">
          <Link href="/" className="inline-block mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white">
              Aqua<span className="text-cyan-400">Nova</span>
            </span>
          </Link>
          <p className="text-white/50 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            The next generation of zero-emission exploring. Reimagining the relationship between luxury, technology, and the ocean.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-cyan-400 hover:text-white transition-colors duration-300 group"
          >
            Build Your Voyage
            <span className="w-6 sm:w-8 h-px bg-cyan-400 group-hover:w-10 sm:group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>

        <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/40 mb-1 sm:mb-2">Models</h4>
            <Link href="/#models" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 text-sm">Nova 45</Link>
            <Link href="/#models" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 text-sm">Nova 60</Link>
            <Link href="/#models" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 text-sm">Nova 80</Link>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/40 mb-1 sm:mb-2">Company</h4>
            <Link href="/#about" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 text-sm">About</Link>
            <Link href="/#careers" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 text-sm">Careers</Link>
            <Link href="/#press" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 text-sm">Press</Link>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/40 mb-1 sm:mb-2">Legal</h4>
            <Link href="/#privacy" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 text-sm">Privacy</Link>
            <Link href="/#terms" className="text-white/50 hover:text-cyan-400 transition-colors duration-300 text-sm">Terms</Link>
          </div>
        </div>

      </div>
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/5 text-[10px] sm:text-xs text-white/30">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} AquaNova Yachts. All rights reserved.</p>
        <div className="flex gap-6 sm:gap-8 mt-3 sm:mt-4 md:mt-0">
          <Link href="/#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link href="/#terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

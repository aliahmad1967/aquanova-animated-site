"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    model: "Nova 60",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="w-full bg-[#000810] text-white min-h-screen pt-24">
      <Navbar />
      
      <section className="relative max-w-7xl mx-auto px-6 lg:px-24 py-24 pb-32">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col items-center max-w-4xl mx-auto relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center mb-24"
          >
            <h1 className="text-5xl md:text-8xl font-wide-heading mb-8">
              Your Voyage<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--hero-gradient)" }}>
                Starts Here.
              </span>
            </h1>
            <p className="text-xl text-white/50 max-w-xl leading-relaxed">
              Connect with our advisory team to discuss customization, delivery timelines, and arranging a private sea trial.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-3xl"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center mb-6">
                  <motion.svg 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                    className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                <p className="text-white/70 max-w-sm">
                  An AquaNova advisor will contact you shortly to arrange your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-12 text-left">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-2 relative group">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent)] transition-colors w-full"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2 relative group">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent)] transition-colors w-full"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="model" className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">Interested Model</label>
                  <select 
                    id="model"
                    className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none w-full"
                    value={formState.model}
                    onChange={e => setFormState({...formState, model: e.target.value})}
                  >
                    <option value="Nova 45" className="bg-[#000810]">Nova 45 (13m)</option>
                    <option value="Nova 60" className="bg-[#000810]">Nova 60 (18m)</option>
                    <option value="Nova 80" className="bg-[#000810]">Nova 80 (24m)</option>
                    <option value="Undecided" className="bg-[#000810]">Undecided</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-white/50">▼</div>
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">Message (Optional)</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none w-full"
                    placeholder="Tell us about your planned voyages..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "mt-8 group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full border-2 border-white/20 bg-transparent text-white px-10 py-5 text-sm font-wide-heading hover:border-white hover:bg-white hover:text-[#000810] transition-all duration-500 w-full md:w-auto self-center",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="w-full bg-[#000810] text-white min-h-screen pt-24">
      <Navbar />
      
      <section className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-24 pb-32">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="flex flex-col items-center max-w-3xl mx-auto relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center mb-20"
          >
            <span className="text-[10px] font-medium tracking-[0.5em] uppercase text-cyan-400/80 mb-6">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Your Voyage<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                Starts Here
              </span>
            </h1>
            <p className="text-lg text-white/50 max-w-lg leading-relaxed">
              Connect with our advisory team to discuss customization, delivery timelines, and arranging a private sea trial.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] bg-white/5 border border-white/10 rounded-3xl p-12">
                <div className="w-20 h-20 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                  <motion.svg 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                    className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Request Received</h3>
                <p className="text-white/50 max-w-sm">
                  An AquaNova advisor will contact you shortly to arrange your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10 text-left">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2 relative group">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 font-medium mb-3">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400 transition-colors w-full text-lg"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2 relative group">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 font-medium mb-3">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400 transition-colors w-full text-lg"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="model" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 font-medium mb-3">Interested Model</label>
                  <select 
                    id="model"
                    className="bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none w-full text-lg"
                    value={formState.model}
                    onChange={e => setFormState({...formState, model: e.target.value})}
                  >
                    <option value="Nova 45" className="bg-[#000810]">Nova 45 (13m)</option>
                    <option value="Nova 60" className="bg-[#000810]">Nova 60 (18m)</option>
                    <option value="Nova 80" className="bg-[#000810]">Nova 80 (24m)</option>
                    <option value="Undecided" className="bg-[#000810]">Undecided</option>
                  </select>
                  <div className="absolute right-0 bottom-5 pointer-events-none text-white/30">▼</div>
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 font-medium mb-3">Message (Optional)</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400 transition-colors resize-none w-full text-lg"
                    placeholder="Tell us about your planned voyages..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "mt-6 group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 text-white px-12 py-5 text-sm font-medium tracking-[0.2em] uppercase hover:border-cyan-400 hover:bg-cyan-500 hover:text-[#000810] transition-all duration-500 w-full md:w-auto self-center",
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

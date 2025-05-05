import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    submitting: false,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        submitted: true,
        submitting: false,
      });
    }, 1500);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  
  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal-element">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-gradient">Get Started</span>?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Join the future of Web3 technology. Our team is here to help you navigate the transition and maximize your potential.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center shrink-0 mr-4">
                    <Send size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-white/70">contact@quantumweb3.example</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-white/70">123 Innovation Way, San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  aria-label="Discord"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
                </a>
              </div>
            </div>
            
            <div className="reveal-element">
              <div className="bg-night-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                
                {formState.submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-teal-600/20 flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-teal-400" />
                    </div>
                    <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                    <p className="text-white/70">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-night-700/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-night-700/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-night-700/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={formState.submitting}
                        className={`w-full py-3 rounded-lg text-white font-medium flex items-center justify-center space-x-2 transition-all ${
                          formState.submitting
                            ? 'bg-indigo-500/50 cursor-not-allowed'
                            : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500'
                        }`}
                      >
                        {formState.submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
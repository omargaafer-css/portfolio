"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertTriangle } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("submitting");

    try {
      // Use Formspree fallback or simulation as requested
      const response = await fetch("https://formspree.io/f/mqerzorz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-[#0E1322]/60 border border-border-custom rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-bold text-white mb-2">Secure Message Dispatch</h3>
      <p className="text-sm text-text-secondary mb-6">Send an inquiries directly to Omar. Form submission uses Formspree encryption pipeline.</p>

      {status === "success" ? (
        <div className="p-6 bg-emerald-950/20 border border-emerald-500/30 rounded-lg flex items-center gap-4 text-emerald-400">
          <CheckCircle2 size={32} className="shrink-0" />
          <div>
            <h4 className="font-bold text-white mb-1">Message Transmitted</h4>
            <p className="text-xs">Your transmission reached destination safely. Omar will respond to your address shortly.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-secondary mb-1.5">
              Sender Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Recruiter Name"
              className="w-full bg-[#05070B] border border-border-custom focus:border-primary-custom rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-secondary mb-1.5">
              Return Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. hiring@company.com"
              className="w-full bg-[#05070B] border border-border-custom focus:border-primary-custom rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-secondary mb-1.5">
              Message Payload
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter details of your project or job opening..."
              className="w-full bg-[#05070B] border border-border-custom focus:border-primary-custom rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors duration-200 resize-y"
            />
          </div>

          {status === "error" && (
            <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-lg flex items-center gap-2 text-xs text-red-400">
              <AlertTriangle size={16} />
              <span>Failed to send payload. Please try again or reach out on LinkedIn.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white bg-primary-custom hover:bg-blue-600 disabled:bg-slate-800 disabled:text-text-secondary transition-all-custom"
          >
            <Send size={16} />
            <span>{status === "submitting" ? "Transmitting..." : "Send Message"}</span>
          </button>
        </form>
      )}
    </div>
  );
}

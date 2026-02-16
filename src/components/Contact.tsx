"use client";

import { useState, type FormEvent } from "react";
import TerminalWindow from "./TerminalWindow";
import { siteConfig } from "@/data/loaders";

const iconMap: Record<string, string> = {
  email: "✉",
  github: "⌘",
  linkedin: "∞",
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder — wire to actual email/API later
    setSent(true);
  }

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <TerminalWindow title="zakaria — contact" command="mail zakaria">
          <div className="space-y-6">
            {/* Quick links */}
            <div className="space-y-2">
              <div className="text-purple font-bold text-xs">
                # Reach me via
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target={social.platform === "email" ? undefined : "_blank"}
                    rel={social.platform === "email" ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-2 border border-border rounded p-3 hover:border-green/50 transition-colors group"
                  >
                    <span className="text-green">{iconMap[social.platform] ?? "→"}</span>
                    <div className="text-xs">
                      <div className="text-text group-hover:text-green transition-colors">
                        {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
                      </div>
                      <div className="text-text-dim">{social.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="text-purple font-bold text-xs mb-3">
                # Or send a message
              </div>
              {sent ? (
                <div className="border border-green/30 rounded p-4 text-center">
                  <div className="text-green text-sm font-bold">
                    Message sent!
                  </div>
                  <div className="text-text-dim text-xs mt-1">
                    <span className="text-green">✓</span> mail: message queued
                    for delivery
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-text-dim text-xs block mb-1">
                      <span className="text-yellow">From:</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-bg border border-border rounded px-3 py-2 text-xs text-text placeholder:text-text-dim/50 focus:outline-none focus:border-green/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-text-dim text-xs block mb-1">
                      <span className="text-yellow">Subject:</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Hello!"
                      className="w-full bg-bg border border-border rounded px-3 py-2 text-xs text-text placeholder:text-text-dim/50 focus:outline-none focus:border-green/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-text-dim text-xs block mb-1">
                      <span className="text-yellow">Body:</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Your message..."
                      className="w-full bg-bg border border-border rounded px-3 py-2 text-xs text-text placeholder:text-text-dim/50 focus:outline-none focus:border-green/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green/10 border border-green/30 text-green text-xs px-4 py-2 rounded hover:bg-green/20 transition-colors cursor-pointer"
                  >
                    <span className="text-green">❯</span> send --message
                  </button>
                </form>
              )}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

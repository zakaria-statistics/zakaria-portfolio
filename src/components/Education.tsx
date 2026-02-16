"use client";

import TerminalWindow from "./TerminalWindow";
import { educationData } from "@/data/loaders";

export default function Education() {
  return (
    <section id="education" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <TerminalWindow
          title="zakaria — education"
          command="cat /etc/education.conf"
        >
          <div className="space-y-6">
            {/* Degrees section */}
            <div>
              <div className="text-purple font-bold mb-3 text-xs">
                [degrees]
              </div>
              <div className="space-y-3 ml-2">
                {educationData.degrees.map((d, i) => (
                  <div key={i} className="flex gap-2 text-xs">
                    <span className="text-green shrink-0">▸</span>
                    <div>
                      <div className="text-text font-bold">{d.title}</div>
                      <div className="text-text-dim">
                        {d.school}{" "}
                        <span className="text-yellow">({d.year})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications section */}
            <div>
              <div className="text-purple font-bold mb-3 text-xs">
                [certifications]
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-2">
                {educationData.certs.map((c, i) => (
                  <div
                    key={i}
                    className="border border-border rounded p-3 bg-surface-light hover:border-green/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs">
                        <div className="text-green font-bold">{c.name}</div>
                        <div className="text-text-dim mt-0.5">{c.issuer}</div>
                      </div>
                      {c.badge && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-bg text-yellow border border-border shrink-0">
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-text-dim text-xs mt-1">
                      issued=<span className="text-orange">{c.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

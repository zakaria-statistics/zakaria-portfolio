"use client";

import TerminalWindow from "./TerminalWindow";
import { jobs } from "@/data/loaders";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <TerminalWindow
          title="zakaria — experience"
          command="cat /var/log/career.log"
        >
          <div className="space-y-1">
            {jobs.map((job, i) => (
              <div key={i} className="relative pl-6 pb-8 last:pb-0 group">
                {/* Timeline line */}
                {i < jobs.length - 1 && (
                  <div className="absolute left-[7px] top-[14px] bottom-0 w-px bg-border group-hover:bg-green/30 transition-colors" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-green bg-bg" />

                {/* Log entry */}
                <div className="space-y-2">
                  <div className="text-text-dim text-xs font-mono">
                    <span className="text-yellow">[{job.date}]</span>{" "}
                    <span className="text-purple">INFO</span>
                  </div>
                  <div>
                    <span className="text-green font-bold text-sm">
                      {job.role}
                    </span>
                    <span className="text-text-dim text-sm"> @ </span>
                    <span className="text-cyan text-sm">{job.company}</span>
                  </div>
                  <div className="space-y-1">
                    {job.description.map((d, j) => (
                      <div key={j} className="flex gap-2 text-xs text-text">
                        <span className="text-text-dim shrink-0">├──</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-surface-light text-cyan border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

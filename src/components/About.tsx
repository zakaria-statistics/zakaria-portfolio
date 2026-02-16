"use client";

import TerminalWindow from "./TerminalWindow";
import { aboutData } from "@/data/loaders";

export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <TerminalWindow title="zakaria — about" command="cat about.md">
          <div className="space-y-4 text-sm">
            <div className="text-purple font-bold text-base"># About Me</div>

            {aboutData.introParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-text leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            <div className="border border-border rounded p-4 bg-surface-light">
              <div className="text-yellow mb-2">## What I Do</div>
              <div className="space-y-2 text-xs">
                {aboutData.whatIDo.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-green shrink-0">▸</span>
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-text-dim text-xs pt-2">
              <span className="text-green">▸</span> {aboutData.footnote}{" "}
              <a
                href={aboutData.footnoteLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-green transition-colors"
              >
                {aboutData.footnoteLink.text}
              </a>
              .
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

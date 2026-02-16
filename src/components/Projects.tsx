"use client";

import { useState } from "react";
import TerminalWindow from "./TerminalWindow";
import { projects } from "@/data/loaders";
import type { Project } from "@/types";

function ProjectItem({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-md p-4 hover:border-green/30 transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-yellow">📦</span>
              <span className="text-green font-bold text-sm">
                {project.name}
              </span>
              <span className="text-text-dim text-xs">
                {expanded ? "[-]" : "[+]"}
              </span>
            </div>
            <p className="text-text-dim text-xs mt-1 ml-7">
              {project.description}
            </p>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="mt-3 ml-7 space-y-3">
          <p className="text-text text-xs leading-relaxed">
            {project.details}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded bg-surface-light text-cyan border border-border"
              >
                {t}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan hover:text-green transition-colors inline-block"
            >
              → {project.link}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <TerminalWindow title="zakaria — projects" command="ls ~/projects/">
          <div className="space-y-3">
            {projects.map((p) => (
              <ProjectItem key={p.name} project={p} />
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

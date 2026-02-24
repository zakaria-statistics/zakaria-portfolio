"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { projects, skillCategories, jobs, navLinks } from "@/data/loaders";

interface SearchResult {
  id: string;
  type: "section" | "project" | "skill" | "experience";
  name: string;
  subtitle: string;
  href: string;
}

const TYPE_COLOR: Record<SearchResult["type"], string> = {
  section: "text-green",
  project: "text-cyan",
  skill: "text-yellow",
  experience: "text-purple",
};

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  navLinks.forEach((l) => {
    results.push({
      id: l.href,
      type: "section",
      name: l.label,
      subtitle: "navigation",
      href: l.href,
    });
  });

  projects.forEach((p) => {
    results.push({
      id: `project-${p.name}`,
      type: "project",
      name: p.name,
      subtitle: p.tech.join(", "),
      href: "#projects",
    });
  });

  skillCategories.forEach((cat) => {
    cat.items.forEach((item) => {
      results.push({
        id: `skill-${cat.name}-${item}`,
        type: "skill",
        name: item,
        subtitle: cat.name,
        href: "#skills",
      });
    });
  });

  jobs.forEach((job, i) => {
    results.push({
      id: `job-${i}`,
      type: "experience",
      name: job.role,
      subtitle: `${job.company} · ${job.date}`,
      href: "#experience",
    });
  });

  return results;
}

const INDEX = buildIndex();

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="bg-green/20 text-green">
        {text.slice(idx, idx + query.length)}
      </span>
      {text.slice(idx + query.length)}
    </>
  );
}

interface SearchModalProps {
  onClose: () => void;
}

export default function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? INDEX.filter((r) => {
        const q = query.toLowerCase();
        return (
          r.name.toLowerCase().includes(q) ||
          r.subtitle.toLowerCase().includes(q) ||
          r.type.includes(q)
        );
      })
    : INDEX.slice(0, 10);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const el = listRef.current?.children[selected] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  const navigate = useCallback(
    (result: SearchResult) => {
      onClose();
      setTimeout(() => {
        document.querySelector(result.href)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    },
    [onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      if (results[selected]) navigate(results[selected]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
        onMouseDown={onClose}
      />

      <div className="relative w-full max-w-xl terminal-glow rounded-lg border border-border bg-surface overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-light border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red/80" />
            <span className="w-3 h-3 rounded-full bg-yellow/80" />
            <span className="w-3 h-3 rounded-full bg-green/80" />
          </div>
          <span className="text-text-dim text-xs ml-2 font-mono">
            bash — grep -r &quot;{query || "..."}&quot; ./portfolio
          </span>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <span className="text-green text-sm select-none">❯</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="search projects, skills, experience..."
            className="flex-1 bg-transparent text-text text-sm outline-none placeholder:text-text-dim/40 font-mono"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-text-dim hover:text-text text-xs font-mono shrink-0"
            >
              [clear]
            </button>
          )}
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-72 overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-text-dim text-xs font-mono">
              <span className="text-red">✗</span> no matches for &quot;{query}&quot;
            </div>
          ) : (
            results.map((r, i) => (
              <button
                key={r.id}
                onClick={() => navigate(r)}
                onMouseEnter={() => setSelected(i)}
                className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors text-xs font-mono ${
                  i === selected ? "bg-surface-light" : ""
                }`}
              >
                <span className="flex-1 truncate">
                  <span className="text-text-dim">./</span>
                  <span className={TYPE_COLOR[r.type]}>{r.type}/</span>
                  <span className="text-text">
                    <Highlight text={r.name} query={query} />
                  </span>
                </span>
                <span className="text-text-dim truncate max-w-[200px] shrink-0">
                  <Highlight text={r.subtitle} query={query} />
                </span>
                <span
                  className={`text-green text-xs shrink-0 transition-opacity ${
                    i === selected ? "opacity-100" : "opacity-0"
                  }`}
                >
                  →
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 px-4 py-2 border-t border-border bg-surface-light/50">
          <span className="text-text-dim text-[10px] font-mono">↑↓ navigate</span>
          <span className="text-text-dim text-[10px] font-mono">enter select</span>
          <span className="text-text-dim text-[10px] font-mono">esc close</span>
          <span className="text-text-dim text-[10px] font-mono ml-auto">
            {results.length} result{results.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

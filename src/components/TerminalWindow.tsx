"use client";

import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  command?: string;
  id?: string;
}

function TypedCommand({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <span className="text-cyan">{displayed}</span>
      {!done && <span className="cursor-blink text-green ml-0.5">▋</span>}
    </>
  );
}

export default function TerminalWindow({
  title = "bash",
  children,
  command,
  id,
}: TerminalWindowProps) {
  const { ref, visible } = useScrollReveal(0.1);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (visible && command) {
      const timer = setTimeout(() => setShowContent(true), command.length * 35 + 100);
      return () => clearTimeout(timer);
    } else if (visible) {
      setShowContent(true);
    }
  }, [visible, command]);

  return (
    <div
      ref={ref}
      id={id}
      className={`terminal-glow rounded-lg border border-border overflow-hidden bg-surface transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-light border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red/80" />
          <span className="w-3 h-3 rounded-full bg-yellow/80" />
          <span className="w-3 h-3 rounded-full bg-green/80" />
        </div>
        <span className="text-text-dim text-xs ml-2">{title}</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 text-sm leading-relaxed">
        {command && visible && (
          <div className="mb-4">
            <span className="text-green">❯</span>{" "}
            <TypedCommand text={command} />
          </div>
        )}
        <div
          className={`transition-opacity duration-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

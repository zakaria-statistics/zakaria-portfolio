"use client";

import { useState, useEffect, useCallback } from "react";
import { bootConfig } from "@/data/loaders";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [fading, setFading] = useState(false);

  const skip = useCallback(() => {
    setFading(true);
    setTimeout(() => onComplete(), 400);
  }, [onComplete]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    bootConfig.lines.forEach((line, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), line.delay)
      );
    });

    timers.push(
      setTimeout(() => setFading(true), bootConfig.totalDuration - 500)
    );

    timers.push(
      setTimeout(() => onComplete(), bootConfig.totalDuration)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="max-w-xl w-full px-6 font-mono text-xs leading-loose">
        {bootConfig.lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.color}>
            {line.text === "" ? <br /> : line.text}
          </div>
        ))}
        {!fading && (
          <span className="cursor-blink text-green">▋</span>
        )}
      </div>
      {!fading && (
        <button
          onClick={skip}
          className="fixed bottom-8 right-8 text-text-dim text-xs hover:text-green transition-colors cursor-pointer"
        >
          skip &gt;&gt;
        </button>
      )}
    </div>
  );
}

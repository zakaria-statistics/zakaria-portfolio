"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4 font-mono">
      <div className="max-w-lg w-full border border-red/50 rounded-lg bg-surface p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red/80" />
            <span className="w-3 h-3 rounded-full bg-yellow/80" />
            <span className="w-3 h-3 rounded-full bg-green/80" />
          </div>
          <span className="text-text-dim text-xs ml-2">system — error</span>
        </div>
        <div className="space-y-3 text-xs">
          <div className="text-red font-bold">[FATAL] Application error</div>
          <div className="text-text-dim">
            <span className="text-yellow">error</span>=
            <span className="text-orange">
              &quot;{error.message}&quot;
            </span>
          </div>
          <button
            onClick={reset}
            className="mt-2 bg-green/10 border border-green/30 text-green text-xs px-4 py-2 rounded hover:bg-green/20 transition-colors cursor-pointer"
          >
            <span className="text-green">❯</span> retry
          </button>
        </div>
      </div>
    </div>
  );
}

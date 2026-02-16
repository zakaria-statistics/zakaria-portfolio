import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4 font-mono">
      <div className="max-w-lg w-full border border-border rounded-lg bg-surface p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red/80" />
            <span className="w-3 h-3 rounded-full bg-yellow/80" />
            <span className="w-3 h-3 rounded-full bg-green/80" />
          </div>
          <span className="text-text-dim text-xs ml-2">bash — 404</span>
        </div>
        <div className="space-y-3 text-xs">
          <div>
            <span className="text-green">❯</span>{" "}
            <span className="text-cyan">cd</span>{" "}
            <span className="text-text">/requested/page</span>
          </div>
          <div className="text-red font-bold">
            bash: cd: /requested/page: No such file or directory
          </div>
          <div className="text-text-dim border-t border-border pt-3">
            <span className="text-yellow">exit_code</span>=
            <span className="text-orange">404</span>
          </div>
          <Link
            href="/"
            className="inline-block mt-2 bg-green/10 border border-green/30 text-green text-xs px-4 py-2 rounded hover:bg-green/20 transition-colors"
          >
            <span className="text-green">❯</span> cd ~
          </Link>
        </div>
      </div>
    </div>
  );
}

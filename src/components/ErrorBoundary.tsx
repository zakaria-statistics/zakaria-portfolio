"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg flex items-center justify-center p-4">
          <div className="max-w-lg w-full border border-red/50 rounded-lg bg-surface p-6 font-mono">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red/80" />
                <span className="w-3 h-3 rounded-full bg-yellow/80" />
                <span className="w-3 h-3 rounded-full bg-green/80" />
              </div>
              <span className="text-text-dim text-xs ml-2">
                system — error
              </span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="text-red font-bold">
                [FATAL] Unhandled exception
              </div>
              <div className="text-text-dim">
                <span className="text-yellow">error</span>=
                <span className="text-orange">
                  &quot;{this.state.error?.message ?? "Unknown error"}&quot;
                </span>
              </div>
              <div className="border-t border-border pt-3 text-text-dim">
                <span className="text-green">suggestion</span>=
                <span className="text-text">
                  &quot;Try refreshing the page&quot;
                </span>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 bg-green/10 border border-green/30 text-green text-xs px-4 py-2 rounded hover:bg-green/20 transition-colors cursor-pointer"
              >
                <span className="text-green">❯</span> sudo reboot
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

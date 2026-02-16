import TerminalWindow from "./TerminalWindow";
import { siteConfig, heroData } from "@/data/loaders";

export default function Hero() {
  const github = siteConfig.socials.find((s) => s.platform === "github");
  const linkedin = siteConfig.socials.find((s) => s.platform === "linkedin");
  const email = siteConfig.socials.find((s) => s.platform === "email");

  return (
    <section id="hero" className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <TerminalWindow title={heroData.terminalTitle} command={heroData.command}>
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-green">
                {siteConfig.name}
              </h1>
              <p className="text-blue mt-1">
                {siteConfig.role}
              </p>
            </div>

            <div className="text-text-dim text-xs leading-relaxed space-y-1">
              <p>
                <span className="text-yellow">location</span>
                <span className="text-text-dim">=</span>
                <span className="text-orange">&quot;{siteConfig.location}&quot;</span>
              </p>
              <p>
                <span className="text-yellow">focus</span>
                <span className="text-text-dim">=</span>
                <span className="text-orange">
                  &quot;{siteConfig.focus}&quot;
                </span>
              </p>
              <p>
                <span className="text-yellow">status</span>
                <span className="text-text-dim">=</span>
                <span className="text-orange">
                  &quot;{siteConfig.status}&quot;
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-xs">
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-green transition-colors"
                >
                  github
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:text-green transition-colors"
                >
                  linkedin
                </a>
              )}
              {email && (
                <a
                  href={email.url}
                  className="text-cyan hover:text-green transition-colors"
                >
                  mail
                </a>
              )}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

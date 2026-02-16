import { siteConfig } from "@/data/loaders";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="text-xs text-text-dim">
          <span className="text-green">❯</span>{" "}
          <span className="text-cyan">echo</span>{" "}
          <span className="text-orange">&quot;Thanks for visiting!&quot;</span>
        </div>

        <div className="flex justify-center gap-6 text-xs">
          {siteConfig.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target={social.platform === "email" ? undefined : "_blank"}
              rel={social.platform === "email" ? undefined : "noopener noreferrer"}
              className="text-text-dim hover:text-green transition-colors"
            >
              {social.platform === "email" ? "Email" : social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
            </a>
          ))}
        </div>

        <p className="text-text-dim text-xs">
          <span className="text-green">©</span> {new Date().getFullYear()}{" "}
          {siteConfig.name} — Built with Next.js &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}

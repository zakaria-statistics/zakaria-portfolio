import TerminalWindow from "./TerminalWindow";
import { skillCategories } from "@/data/loaders";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <TerminalWindow title="zakaria — skills" command="ls ~/skills/">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue">📁</span>
                  <span className={`font-bold ${cat.color}`}>{cat.name}</span>
                </div>
                <div className="ml-6 space-y-0.5">
                  {cat.items.map((item) => (
                    <div key={item} className="text-text-dim text-xs">
                      <span className="text-text-dim mr-2">├──</span>
                      <span className="text-text hover:text-green transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

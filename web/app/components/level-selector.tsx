"use client";

import { Level } from "../types";
import { Brain } from "lucide-react";

const levelMeta: Record<Level, { title: string; description: string }> = {
    junior: {
        title: "Beginner",
        description: "Perfect for first-timers and guided walkthroughs.",
    },
    intermediate: {
        title: "Intermediate",
        description: "Balanced insight for developers who know the basics.",
    },
    senior: {
        title: "Expert",
        description: "Deep dives on complexity, trade-offs, and patterns.",
    },
};

interface LevelSelectorProps {
    value: Level;
    onChange: (level: Level) => void;
}

export function LevelSelector({ value, onChange }: LevelSelectorProps) {
    return (
        <section className="rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-950 p-5 shadow-xl shadow-slate-900/5">
            <header className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Brain className="h-5 w-5" />
                </span>
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Audience</p>
                    <h2 className="text-lg font-semibold text-slate-300">Choose Expertise</h2>
                </div>
            </header>

            <div className="grid gap-3">
                {(Object.keys(levelMeta) as Level[]).map((level) => {
                    const active = level === value;
                    const palette = active
                        ? "border-slate-950 bg-slate-800 text-white shadow-lg"
                        : "text-slate-300 border border-slate-800";

                    return (
                        <button
                            key={level}
                            type="button"
                            onClick={() => onChange(level)}
                            className={`rounded-xl border px-4 py-3 text-left transition ${palette}`}
                        >
                            <p className="text-sm font-semibold capitalize">{levelMeta[level].title}</p>
                            <p className="text-xs text-slate-400">{levelMeta[level].description}</p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

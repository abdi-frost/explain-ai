"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Copy, Check, Sparkles, Wand2 } from "lucide-react";
import { Level } from "../types";

interface ExplanationPanelProps {
  content: string;
  loading: boolean;
  level: Level;
  copied: boolean;
  onCopy: () => void;
}

export function ExplanationPanel({ content, loading, level, copied, onCopy }: ExplanationPanelProps) {
  return (
    <section className="relative flex flex-col gap-4 rounded-2xl border border-white/10  bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-xl shadow-slate-900/5">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Result</p>
          <h2 className="text-lg font-semibold text-slate-900">AI Explanation</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span className="capitalize">{level}</span>
        </div>
      </header>

      <div className="relative h-[24rem] overflow-auto rounded-xl border border-black/70 bg-black/90 p-4 text-sm">
        {loading && <ThinkingState />}
        {content ? (
          <article className="prose prose-slate max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-slate-400">
            <Wand2 className="h-8 w-8" />
            <p>Feed in some code to see the magic.</p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onCopy}
          disabled={!content}
          className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition ${
            content ? "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white" : "border-slate-200 text-slate-300"
          }`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </section>
  );
}

function ThinkingState() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-lg">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Sparkles className="h-4 w-4 animate-spin text-indigo-500" />
          Refining answer
        </div>
        <div className="flex gap-1">
          <Dot delay={0} />
          <Dot delay={150} />
          <Dot delay={300} />
        </div>
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return <span style={{ animationDelay: `${delay}ms` }} className="h-2.5 w-2.5 animate-bounce rounded-full bg-indigo-500" />;
}

"use client";

import { ForwardedRef, forwardRef } from "react";
import type { KeyboardEvent } from "react";
import { RotateCcw, ClipboardPaste } from "lucide-react";

const helperCopy = "Drop in a snippet, tweak it, and press Cmd/Ctrl + Enter to run the explanation.";


interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onResetSample?: () => void;
  onPasteFromClipboard?: () => void;
}

export const CodeEditor = forwardRef(function CodeEditor(
  { value, onChange, onKeyDown, onResetSample, onPasteFromClipboard }: CodeEditorProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-white shadow-2xl shadow-slate-900/30">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Your Code</p>
          <h2 className="text-xl font-semibold">Explain This</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onResetSample}
            className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-slate-100 transition hover:border-white hover:bg-white/10"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
          <button
            type="button"
            onClick={onPasteFromClipboard}
            className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-slate-100 transition hover:border-white hover:bg-white/10"
          >
            <ClipboardPaste className="h-3.5 w-3.5" />
            Paste
          </button>
        </div>
      </header>

      <div className="rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm">
        <textarea
          ref={ref}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          placeholder="Paste or type code here..."
          className="h-72 w-full resize-none bg-transparent text-slate-100 outline-none"
        />
      </div>

      <p className="flex items-center gap-2 text-xs text-slate-400">
        {helperCopy}
      </p>
    </section>
  );
});

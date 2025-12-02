"use client";

import { useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { BASE_URL } from "@/config/api";
import { CodeEditor } from "./components/code-editor";
import { LevelSelector } from "./components/level-selector";
import { ExplanationPanel } from "./components/explanation-panel";
import { Level } from "./types";
import Link from "next/link";

const sampleCode = `def fibonacci(n):\n    """Return the first n numbers in the Fibonacci sequence."""\n    seq = [0, 1]\n    while len(seq) < n:\n        seq.append(seq[-1] + seq[-2])\n    return seq[:n]\n\nprint(fibonacci(10))`;

export default function Home() {

  const [code, setCode] = useState<string>(sampleCode);
  const [level, setLevel] = useState<Level>("intermediate");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  async function handlePasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setCode(text);
    } catch (err) {
      setError("Could not read from clipboard. Please allow clipboard permissions.");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!code.trim()) return;

    setLoading(true);
    setError(null);
    setResult("");

    try {
      const response = await fetch(`${BASE_URL}/api/v1/explain`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, level }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.detail || "Unable to generate explanation");
      }

      const data = await response.json();
      setResult(data.explanation ?? "No explanation returned.");
    } catch (err) {
      setError(err instanceof Error ? err?.message : "Something unexpected happened.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = e.currentTarget;
      const start = el.selectionStart ?? 0;
      const end = el.selectionEnd ?? 0;
      const value = el.value;
      const newValue = value.substring(0, start) + "\t" + value.substring(end);
      setCode(newValue);
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1;
        }
      });
    }

    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  }

  async function handleCopy() {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/30 blur-[160px]" />
        <div className="absolute right-0 top-0 h-64 w-64 bg-indigo-500/30 blur-[120px]" />
      </div>

      <main className="relative mx-auto w-full max-w-6xl px-6 py-12">
        <section className="mb-12 text-center md:text-left">
            <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Explain</p>
            <Link
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-teal-700 via-slate-800 to-indigo-800 px-4 py-1.5 text-xs font-semibold text-white shadow-lg transition hover:scale-105 hover:from-teal-600 hover:to-indigo-500"
              href="https://abdifrost.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-1 animate-pulse text-lg text-teal-300">★</span>
              developed by <span className="ml-1 font-bold text-teal-200">@abdi-frost</span>
            </Link>
            </div>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Turn raw code into insight
            <span className="block text-teal-300">with conversational AI.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300">
            Paste any snippet, pick who you are explaining to, and ship human-friendly breakdowns your team will actually read.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <CodeEditor
              value={code}
              onChange={setCode}
              onKeyDown={handleKeyDown}
              onResetSample={() => setCode(sampleCode)}
              onPasteFromClipboard={handlePasteFromClipboard}
              ref={textareaRef}
            />

            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Action</p>
                <p className="text-base font-medium text-white">Ready to translate this code?</p>
              </div>

              <div className="ml-auto flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading || !code.trim()}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-slate-950 transition ${loading || !code.trim() ? "bg-slate-600/40 text-slate-300" : "bg-teal-300 hover:bg-teal-200"
                    }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Thinking
                    </>
                  ) : (
                    <>
                      Explain code
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {error && <p className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-200">{error}</p>}
          </div>

          <div className="flex flex-col gap-4">
            <LevelSelector value={level} onChange={setLevel} />
            <ExplanationPanel content={result} loading={loading} level={level} copied={copied} onCopy={handleCopy} />
          </div>
        </form>
      </main>
    </div>
  );
}

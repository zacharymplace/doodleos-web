"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { Shell } from "@/components/Shell";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";
import { DoodleNetButton } from "@/components/doodlenet95/DoodleNetButton";

const posts = [
  "I ran my golden doodle through DoodleOS and the recall system is still in beta.",
  "DoodleOS diagnosed my dog as a Wet Beige Missile with severe emotional dependency.",
  "Filed my first DoodleOS incident report. Root cause: joy overflow.",
  "DoodleOS is what happens when Windows 95 tries to manage a golden doodle.",
  "My dog has been classified as a beige compliance risk.",
  "The family computer has reviewed the evidence and the doodle is unstable.",
  "DoodleOS says the doorbell processor is degraded. This seems accurate.",
  "I regret to report that personal space has been deprecated.",
];

const publicLink = "https://doodleos-web.vercel.app";

export default function ShareKitPage() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyText(label: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(label);

    setTimeout(() => {
      setCopied(null);
    }, 2200);
  }

  return (
    <Shell>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black">Share Kit</h1>
        <p className="mt-3 text-slate-700">
          Copy-ready lines for spreading DoodleOS without explaining the joke too hard.
        </p>
      </div>

      {copied ? (
        <div className="mt-6 border-2 border-slate-900 bg-[#d9ffe2] p-3 font-mono text-xs font-black uppercase text-emerald-950 shadow-[2px_2px_0px_#0f172a]">
          Copied {copied} to clipboard.
        </div>
      ) : null}

      <section className="mt-8 grid gap-5">
        <WindowPanel title="SHARE_LINES.TXT">
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div
                key={post}
                className="grid gap-3 border-2 border-slate-900 bg-white p-4 shadow-[2px_2px_0px_#0f172a] sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div className="font-mono text-sm">{post}</div>

                <button
                  type="button"
                  onClick={() => copyText(`line ${index + 1}`, post)}
                  className="flex w-fit items-center gap-2 border-2 border-slate-900 bg-[#c0c0c0] px-3 py-2 font-mono text-xs font-black uppercase text-slate-950 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                >
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </button>
              </div>
            ))}
          </div>
        </WindowPanel>

        <WindowPanel title="PUBLIC_LINK.URL">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="break-all border-2 border-slate-900 bg-white p-4 font-mono text-sm shadow-[2px_2px_0px_#0f172a]">
              {publicLink}
            </div>

            <button
              type="button"
              onClick={() => copyText("public link", publicLink)}
              className="flex w-fit items-center gap-2 border-2 border-slate-900 bg-[#c0c0c0] px-3 py-2 font-mono text-xs font-black uppercase text-slate-950 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
            >
              <Copy className="h-3.5 w-3.5" />
              Copy Link
            </button>
          </div>

          <div className="mt-5">
            <DoodleNetButton href="/report" variant="primary">
              Run Diagnostic
            </DoodleNetButton>
          </div>
        </WindowPanel>
      </section>
    </Shell>
  );
}

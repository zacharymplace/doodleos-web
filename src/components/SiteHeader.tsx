import Link from "next/link";
import { Dog } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b-2 border-slate-900 bg-[#c0c0c0]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-2 font-mono text-xl font-black">
          <Dog className="h-6 w-6" />
          DoodleOS™
        </Link>

        <nav className="flex flex-wrap gap-3 font-mono text-[11px] font-black uppercase sm:gap-4">
          <Link href="/about">About</Link>
          <Link href="/status">Status</Link>
          <Link href="/patch-notes">Patch Notes</Link>
          <Link href="/error-codes">Error Codes</Link>
          <Link href="/incidents">Archive</Link>
          <Link href="/report">Report</Link>
          <Link href="/archetypes">Archetypes</Link>
          <Link href="/field-guide">Field Guide</Link>
          <Link href="/submit-incident">Submit</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/share-kit">Share Kit</Link>
        </nav>

        <Link
          href="/report"
          className="w-fit border-2 border-slate-900 bg-[#1f3c88] px-4 py-2 font-mono text-xs font-black uppercase text-white shadow-[2px_2px_0px_#0f172a]"
        >
          Run Diagnostic
        </Link>
      </div>
    </header>
  );
}

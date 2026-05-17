import Link from "next/link";
import { Dog } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b-2 border-slate-900 bg-[#c0c0c0]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-mono text-xl font-black">
          <Dog className="h-6 w-6" />
          DoodleOS™
        </Link>

        <nav className="hidden gap-4 font-mono text-xs font-black uppercase md:flex">
          <Link href="/status">Status</Link>
          <Link href="/patch-notes">Patch Notes</Link>
          <Link href="/error-codes">Error Codes</Link>
          <Link href="/incidents">Incidents</Link>
          <Link href="/report">Report</Link>
          <Link href="/submit-incident">Incidents</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/submit-incident">Incidents</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>

        <Link
          href="/report"
          className="border-2 border-slate-900 bg-[#1f3c88] px-4 py-2 font-mono text-xs font-black uppercase text-white shadow-[2px_2px_0px_#0f172a]"
        >
          Register Your Doodle
        </Link>
      </div>
    </header>
  );
}

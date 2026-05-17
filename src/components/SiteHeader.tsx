import Link from "next/link";
import { Dog } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-black">
          <Dog className="h-6 w-6" />
          DoodleOS™
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/status">Status</Link>
          <Link href="/patch-notes">Patch Notes</Link>
          <Link href="/error-codes">Error Codes</Link>
          <Link href="/incidents">Incidents</Link>
          <Link href="/report">Report</Link>
          <Link href="/submit-incident">Incidents</Link>
          <Link href="/submit-incident">Incidents</Link>
        </nav>

        <Link
          href="/report"
          className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
        >
          Register Your Doodle
        </Link>
      </div>
    </header>
  );
}

import { SiteHeader } from "./SiteHeader";
import { StartBar } from "./doodlenet95/StartBar";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen text-(--ink)">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </div>
      <footer className="border-t-2 border-(--rule-strong) bg-(--paper-2) px-4 py-6 font-mono text-xs font-black uppercase sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>DoodleOS™ Legacy Companion Software</span>
          <span>Recall remains in beta.</span>
        </div>
      </footer>
      <StartBar />
    </main>
  );
}

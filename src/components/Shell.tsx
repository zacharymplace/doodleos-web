import { SiteHeader } from "./SiteHeader";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#d8d2bd] text-slate-950">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-6 py-10">{children}</div>
    </main>
  );
}

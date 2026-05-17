import { BadgeCheck, FileText, Gauge, HeartPulse, Siren } from "lucide-react";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";
import { DoodleNetButton } from "@/components/doodlenet95/DoodleNetButton";

const paths = [
  {
    title: "Run Diagnostic",
    href: "/report",
    icon: HeartPulse,
    summary: "Classify your doodle instance and generate a shareable system report.",
    action: "Start Report",
    variant: "primary" as const,
  },
  {
    title: "File Incident",
    href: "/submit-incident",
    icon: Siren,
    summary: "Document sock breaches, pond deployments, doorbell cascades, and other failures.",
    action: "Submit Incident",
    variant: "danger" as const,
  },
  {
    title: "Read Field Guide",
    href: "/field-guide",
    icon: FileText,
    summary: "Operational guidance for common golden doodle instability events.",
    action: "Open Guide",
    variant: "default" as const,
  },
  {
    title: "Browse Archetypes",
    href: "/archetypes",
    icon: Gauge,
    summary: "Review known doodle modes, from Wet Beige Missile to Doorbell Prophet.",
    action: "View Types",
    variant: "default" as const,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d8d2bd] text-slate-950">
      <header className="border-b-2 border-slate-900 bg-[#c0c0c0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2 font-mono text-xl font-black">
            DoodleOS™
          </div>
          <DoodleNetButton href="/report" variant="primary">
            Run Diagnostic
          </DoodleNetButton>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 inline-flex border-2 border-slate-900 bg-[#fff7cc] px-3 py-1 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#0f172a]">
            DoodleOS 95 Mode
          </div>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            The family computer says your doodle is unstable.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            A fake legacy control panel for diagnosing golden doodle chaos:
            recall outages, sock breaches, zoomie risk, and emotionally
            distributed household incidents.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <DoodleNetButton href="/report" variant="primary">
              Run Diagnostic
            </DoodleNetButton>
            <DoodleNetButton href="/submit-incident" variant="danger">
              File Incident
            </DoodleNetButton>
            <DoodleNetButton href="/field-guide">
              Field Guide
            </DoodleNetButton>
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-700" />
            98.7% uptime, excluding squirrels, guests, rain, and doorbells.
          </div>
        </div>

        <WindowPanel title="CONTROL_PANEL.EXE">
          <div className="grid gap-4">
            <div className="border-2 border-slate-900 bg-white p-4">
              <div className="font-mono text-xs font-bold text-slate-500">
                RECALL STATUS
              </div>
              <div className="mt-2 text-2xl font-black text-amber-700">
                DEGRADED
              </div>
            </div>

            <div className="border-2 border-slate-900 bg-white p-4">
              <div className="font-mono text-xs font-bold text-slate-500">
                DOORBELL PROCESSOR
              </div>
              <div className="mt-2 text-2xl font-black text-red-700">
                UNSTABLE
              </div>
            </div>

            <div className="border-2 border-slate-900 bg-white p-4">
              <div className="font-mono text-xs font-bold text-slate-500">
                LOVE KERNEL
              </div>
              <div className="mt-2 text-2xl font-black text-emerald-700">
                OK
              </div>
            </div>
          </div>
        </WindowPanel>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <WindowPanel title="START_HERE.DIR">
          <div className="grid gap-5 md:grid-cols-2">
            {paths.map((path) => {
              const Icon = path.icon;

              return (
                <div
                  key={path.title}
                  className="border-2 border-slate-900 bg-white p-5 shadow-[2px_2px_0px_#0f172a]"
                >
                  <div className="flex items-center gap-2 font-black">
                    <Icon className="h-5 w-5 text-slate-700" />
                    {path.title}
                  </div>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-700">
                    {path.summary}
                  </p>
                  <div className="mt-5">
                    <DoodleNetButton href={path.href} variant={path.variant}>
                      {path.action}
                    </DoodleNetButton>
                  </div>
                </div>
              );
            })}
          </div>
        </WindowPanel>
      </section>

      <footer className="border-t-2 border-slate-900 bg-[#c0c0c0] px-4 py-8 text-slate-950 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono text-xs font-black uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>DoodleOS™ Legacy Companion Software</span>
          <span>Recall remains in beta.</span>
        </div>
      </footer>
    </main>
  );
}

import { BadgeCheck, FileText, Gauge, HeartPulse, Siren } from "lucide-react";
import { Shell } from "@/components/Shell";
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
    <Shell>
      <section className="grid gap-8 py-2 sm:py-4 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 inline-flex border-2 border-(--rule-strong) bg-(--spot-tint) border-dashed px-3 py-1 font-mono text-xs font-black uppercase">
            DoodleOS 95 Mode
          </div>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            The family computer says your doodle is unstable.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-(--ink-2)">
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

          <div className="mt-5 flex items-center gap-2 text-sm text-(--ink-2)">
            <BadgeCheck className="h-4 w-4 text-(--ink)" />
            98.7% uptime, excluding squirrels, guests, rain, and doorbells.
          </div>
        </div>

        <WindowPanel title="CONTROL_PANEL.EXE">
          <div className="grid gap-4">
            <div className="border-2 border-(--rule-strong) bg-(--paper) p-4">
              <div className="font-mono text-xs font-bold text-(--ink-muted)">
                RECALL STATUS
              </div>
              <div className="mt-2 text-2xl font-black text-(--ink)">
                DEGRADED
              </div>
            </div>

            <div className="border-2 border-(--rule-strong) bg-(--paper) p-4">
              <div className="font-mono text-xs font-bold text-(--ink-muted)">
                DOORBELL PROCESSOR
              </div>
              <div className="mt-2 text-2xl font-black text-(--ink)">
                UNSTABLE
              </div>
            </div>

            <div className="border-2 border-(--rule-strong) bg-(--paper) p-4">
              <div className="font-mono text-xs font-bold text-(--ink-muted)">
                LOVE KERNEL
              </div>
              <div className="mt-2 text-2xl font-black text-(--ink)">
                OK
              </div>
            </div>
          </div>
        </WindowPanel>
      </section>

      <section className="pb-16">
        <WindowPanel title="START_HERE.DIR">
          <div className="grid gap-5 md:grid-cols-2">
            {paths.map((path) => {
              const Icon = path.icon;

              return (
                <div
                  key={path.title}
                  className="border-2 border-(--rule-strong) bg-(--paper) p-5"
                >
                  <div className="flex items-center gap-2 font-black">
                    <Icon className="h-5 w-5 text-(--ink-2)" />
                    {path.title}
                  </div>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-(--ink-2)">
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

    </Shell>
  );
}

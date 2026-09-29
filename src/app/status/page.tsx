import { Shell } from "@/components/Shell";
import { SystemBadge } from "@/components/doodlenet95/SystemBadge";
import { services } from "@/data/doodle";

export default function StatusPage() {
  return (
    <Shell>
      <h1 className="text-4xl font-black">System Status</h1>
      <p className="mt-3 max-w-2xl text-(--ink-2)">
        Live operational health for high-variance doodle infrastructure.
      </p>

      <section className="mt-8 grid gap-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="border-2 border-(--rule-strong) bg-(--paper) p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-mono text-sm font-black uppercase">{service.name}</h2>
              <SystemBadge
                label={service.status}
                tone={
                  service.level === "ok"
                    ? "ok"
                    : service.level === "warn"
                      ? "warn"
                      : "danger"
                }
              />
            </div>
          </div>
        ))}
      </section>
    </Shell>
  );
}

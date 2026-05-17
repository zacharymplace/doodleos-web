import { Shell } from "@/components/Shell";
import { SystemBadge } from "@/components/doodlenet95/SystemBadge";
import { services } from "@/data/doodle";

export default function StatusPage() {
  return (
    <Shell>
      <h1 className="text-4xl font-black">System Status</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Live operational health for high-variance doodle infrastructure.
      </p>

      <section className="mt-8 grid gap-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="border-2 border-slate-900 bg-[#ece9d8] p-5 shadow-[4px_4px_0px_#0f172a]"
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

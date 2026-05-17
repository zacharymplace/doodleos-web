import { Shell } from "@/components/Shell";
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
          <div key={service.name} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-black">{service.name}</h2>
              <span
                className={
                  service.level === "ok"
                    ? "text-emerald-600"
                    : service.level === "warn"
                      ? "text-amber-600"
                      : "text-red-600"
                }
              >
                {service.status}
              </span>
            </div>
          </div>
        ))}
      </section>
    </Shell>
  );
}

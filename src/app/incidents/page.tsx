import { Shell } from "@/components/Shell";
import { incidents } from "@/data/doodle";

export default function IncidentsPage() {
  return (
    <Shell>
      <h1 className="text-4xl font-black">Incident Reports</h1>
      <p className="mt-3 text-(--ink-2)">Postmortems from the front lines of beige chaos.</p>

      <section className="mt-8 space-y-5">
        {incidents.map((incident) => (
          <article key={incident.id} className="border-2 border-(--rule-strong) bg-(--paper) p-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-black">
                {incident.id} — {incident.title}
              </h2>
              <span className="border-2 border-dashed border-(--rule-strong) bg-(--spot-tint) px-3 py-1 font-mono text-xs font-bold uppercase text-(--ink)">
                {incident.status}
              </span>
            </div>
            <dl className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <dt className="font-black">Impact</dt>
                <dd className="mt-1 text-(--ink-2)">{incident.impact}</dd>
              </div>
              <div>
                <dt className="font-black">Root Cause</dt>
                <dd className="mt-1 text-(--ink-2)">{incident.rootCause}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
    </Shell>
  );
}

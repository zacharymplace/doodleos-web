import { Shell } from "@/components/Shell";
import { incidents } from "@/data/doodle";

export default function IncidentsPage() {
  return (
    <Shell>
      <h1 className="text-4xl font-black">Incident Reports</h1>
      <p className="mt-3 text-slate-600">Postmortems from the front lines of beige chaos.</p>

      <section className="mt-8 space-y-5">
        {incidents.map((incident) => (
          <article key={incident.id} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-black">
                {incident.id} — {incident.title}
              </h2>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
                {incident.status}
              </span>
            </div>
            <dl className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <dt className="font-black">Impact</dt>
                <dd className="mt-1 text-slate-700">{incident.impact}</dd>
              </div>
              <div>
                <dt className="font-black">Root Cause</dt>
                <dd className="mt-1 text-slate-700">{incident.rootCause}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
    </Shell>
  );
}

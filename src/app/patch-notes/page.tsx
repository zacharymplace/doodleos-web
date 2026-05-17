import { Shell } from "@/components/Shell";
import { patchNotes } from "@/data/doodle";

export default function PatchNotesPage() {
  return (
    <Shell>
      <h1 className="text-4xl font-black">Patch Notes</h1>
      <p className="mt-3 text-slate-600">Release history for unstable companion software.</p>

      <section className="mt-8 space-y-5">
        {patchNotes.map((release) => (
          <article key={release.version} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-black">{release.version}</h2>
              <p className="text-sm text-slate-500">{release.date}</p>
            </div>
            <ul className="mt-4 space-y-2 text-slate-700">
              {release.notes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </Shell>
  );
}

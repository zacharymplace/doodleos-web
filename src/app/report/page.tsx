import { Shell } from "@/components/Shell";

export default function ReportPage() {
  return (
    <Shell>
      <h1 className="text-4xl font-black">Generate Your Doodle Report</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        v0.1 report generator. Static for now, but shaped like the future upload/AI flow.
      </p>

      <section className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <form className="rounded-2xl border bg-white p-6 shadow-sm">
          <label className="block text-sm font-bold">Doodle Name</label>
          <input className="mt-2 w-full rounded-xl border px-4 py-3" placeholder="Murphy" />

          <label className="mt-5 block text-sm font-bold">Primary Behavior</label>
          <select className="mt-2 w-full rounded-xl border px-4 py-3">
            <option>Wet Beige Missile</option>
            <option>Therapy Goblin</option>
            <option>Mud Roomba</option>
            <option>Sentient Mop</option>
          </select>

          <button
            type="button"
            className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white"
          >
            Generate Report
          </button>
        </form>

        <article className="rounded-2xl border bg-white p-6 font-mono text-sm shadow-sm">
          <h2 className="font-sans text-2xl font-black">DOODLE REPORT</h2>
          <div className="mt-5 space-y-2">
            <p>INSTANCE: Murphy</p>
            <p>VERSION: 4.7.2 Chaos Canary</p>
            <p>INSTABILITY SCORE: 86/100</p>
            <p>EMOTIONAL DEPENDENCY: Severe</p>
            <p>PRIMARY MODE: Wet Beige Missile</p>
          </div>

          <h3 className="mt-6 font-sans font-black">Known Bugs</h3>
          <ul className="mt-2 space-y-1">
            <li>- Counter surfing reintroduced</li>
            <li>- Personal space deprecated</li>
            <li>- Recall unavailable near squirrels</li>
          </ul>

          <h3 className="mt-6 font-sans font-black">Recommended Actions</h3>
          <ul className="mt-2 space-y-1">
            <li>- Increase walk frequency</li>
            <li>- Hide all socks</li>
            <li>- Budget for grooming</li>
          </ul>
        </article>
      </section>
    </Shell>
  );
}

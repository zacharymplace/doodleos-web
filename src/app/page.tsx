import {
  AlertTriangle,
  BadgeCheck,
  Bug,
  Cpu,
  Dog,
  FileText,
  Gauge,
  HeartPulse,
  Terminal,
} from "lucide-react";

const services = [
  ["Tail Wagging Service", "Operational", "ok"],
  ["Treat Detection", "Operational", "ok"],
  ["Recall System", "Partial Outage", "warn"],
  ["Self Control", "Major Incident", "down"],
  ["Mud Avoidance", "Major Incident", "down"],
];

const errors = [
  ["DOODLE_014", "Refuses to walk in rain after begging to go outside"],
  ["DOODLE_233", "Has stolen sock but wants you to chase"],
  ["DOODLE_502", "Wet beard failure"],
  ["DOODLE_721", "Sudden 3AM zoomies"],
];

const patchNotes = [
  "Reduced barking at absolutely nothing by 3%",
  "Added support for puddle detection",
  "Deprecated personal space",
  "Hotfix: counter surfing was mistakenly reintroduced",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-black text-xl">
            <Dog className="h-6 w-6" />
            DoodleOS™
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#status">Status</a>
            <a href="#patches">Patch Notes</a>
            <a href="#errors">Error Codes</a>
            <a href="#report">Report</a>
          </nav>
          <button className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
            Register Your Doodle
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
            Enterprise-grade companion software.
          </div>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-7xl">
            Built for chaos. Optimized for love.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            DoodleOS helps you deploy, maintain, and manage the world’s most lovable,
            unstable, emotionally distributed companion instances.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl bg-slate-950 px-5 py-3 font-bold text-white">
              Run Diagnostic
            </button>
            <button className="rounded-xl border bg-white px-5 py-3 font-bold">
              View System Status
            </button>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            98.7% uptime, excluding squirrels, guests, rain, and doorbells.
          </div>
        </div>

        <div className="rounded-2xl bg-slate-950 p-6 font-mono text-sm text-emerald-400 shadow-2xl">
          <div className="mb-5 text-slate-400">DOODLEOS TERMINAL v5.2.1</div>
          <p>&gt; INITIALIZING DOODLE INSTANCE...</p>
          <p>&gt; FETCHING PERSONALITY PACKAGES...</p>
          <p>&gt; LOADING LOVE MODULE...</p>
          <p>&gt; WARNING: Recall system unstable</p>
          <p>&gt; SUCCESS: Emotional dependency established</p>
          <div className="my-6 border-t border-slate-700" />
          <p className="text-slate-300">DOODLE_ID: 7F3A-DOOD-GOOD-BOY</p>
          <p className="text-slate-300">VERSION: 5.2.1 Canine Cloud</p>
          <p className="text-slate-300">ZOOMIES: HIGH</p>
          <p className="text-slate-300">RISK LEVEL: MEDIUM-HIGH</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-16 md:grid-cols-3">
        <Card id="status" title="System Status" icon={<Gauge />}>
          <div className="space-y-3">
            {services.map(([name, status, type]) => (
              <div key={name} className="flex items-center justify-between border-b pb-2 text-sm">
                <span>{name}</span>
                <span
                  className={
                    type === "ok"
                      ? "text-emerald-600"
                      : type === "warn"
                        ? "text-amber-600"
                        : "text-red-600"
                  }
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card id="patches" title="Latest Patch Notes" icon={<FileText />}>
          <h3 className="mb-3 text-xl font-black">v5.2.1</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {patchNotes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </Card>

        <Card title="Performance Index" icon={<Cpu />}>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Metric label="Child Compatibility" value="87" />
            <Metric label="Mud Generation" value="94" />
            <Metric label="Sock Throughput" value="99" />
            <Metric label="Firmware Stability" value="31" />
          </div>
        </Card>

        <Card title="Recent Incident Report" icon={<AlertTriangle />}>
          <h3 className="text-xl font-black">#4821 — Unauthorized Pond Deployment</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            At approximately 8:14 AM, multiple doodle units entered a retention pond
            despite clear verbal guidance.
          </p>
          <p className="mt-4 text-sm font-semibold">Root cause: joy overflow.</p>
        </Card>

        <Card id="errors" title="Common Error Codes" icon={<Bug />}>
          <div className="space-y-3">
            {errors.map(([code, desc]) => (
              <div key={code} className="grid grid-cols-[105px_1fr] gap-3 text-sm">
                <code className="rounded bg-slate-100 px-2 py-1 font-bold">{code}</code>
                <span className="text-slate-600">{desc}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card id="report" title="Generate Your Doodle Report" icon={<HeartPulse />}>
          <p className="text-sm leading-6 text-slate-600">
            Upload flow coming soon. For now, every doodle is provisionally classified
            as a beige emotional support incident with premium mud compatibility.
          </p>
          <button className="mt-5 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white">
            Generate Report
          </button>
        </Card>
      </section>

      <footer className="border-t bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <div className="font-black">DoodleOS™</div>
            <p className="text-sm text-slate-400">All systems woofing.</p>
          </div>
          <Terminal className="h-5 w-5 text-emerald-400" />
        </div>
      </footer>
    </main>
  );
}

function Card({
  title,
  icon,
  children,
  id,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <article id={id} className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2 font-black">
        <span className="text-indigo-600 [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
        {title}
      </div>
      {children}
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">
      <div className="text-3xl font-black text-indigo-700">{value}</div>
      <div className="mt-1 text-slate-600">{label}</div>
    </div>
  );
}

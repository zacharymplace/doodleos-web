"use client";

import { useMemo, useState } from "react";
import { Shell } from "@/components/Shell";

const behaviorProfiles = {
  "Wet Beige Missile": {
    version: "4.7.2 Chaos Canary",
    score: 86,
    dependency: "Severe",
    bugs: [
      "Counter surfing reintroduced",
      "Personal space deprecated",
      "Recall unavailable near squirrels",
    ],
    actions: ["Increase walk frequency", "Hide all socks", "Budget for grooming"],
  },
  "Therapy Goblin": {
    version: "5.1.0 Emotional LTS",
    score: 72,
    dependency: "Enterprise-grade",
    bugs: [
      "Blocks all doorways during sadness events",
      "Requires direct eye contact to process commands",
      "Auto-deploys chin to human knee",
    ],
    actions: ["Maintain cuddle uptime", "Approve blanket access", "Limit cheese escalation"],
  },
  "Mud Roomba": {
    version: "3.9.8 Terrain Preview",
    score: 91,
    dependency: "Moderate but damp",
    bugs: [
      "Tracks outdoor state into indoor zones",
      "Detects puddles as mission-critical",
      "Ignores towel-based mitigation",
    ],
    actions: ["Stage towel at entry", "Audit yard moisture", "Prepare bath incident response"],
  },
  "Sentient Mop": {
    version: "6.0.1 Fluff Kernel",
    score: 79,
    dependency: "High",
    bugs: [
      "Absorbs leaves, mulch, and vague neighborhood energy",
      "May become indistinguishable from rug",
      "Requires scheduled de-tangling windows",
    ],
    actions: ["Book recurring grooming", "Perform daily burr scan", "Keep brush in visible location"],
  },
} as const;

type Behavior = keyof typeof behaviorProfiles;

function firmwareSuffix(name: string) {
  const clean = name.trim();
  if (!clean) return "UNREGISTERED";
  return clean
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 10)
    .padEnd(4, "X");
}

export default function ReportPage() {
  const [name, setName] = useState("Murphy");
  const [behavior, setBehavior] = useState<Behavior>("Wet Beige Missile");
  const [age, setAge] = useState("3");

  const profile = behaviorProfiles[behavior];

  const report = useMemo(() => {
    const parsedAge = Number(age);
    const ageAdjustment = Number.isFinite(parsedAge) ? Math.min(Math.max(parsedAge, 0), 15) : 0;
    const adjustedScore = Math.min(100, profile.score + Math.floor(ageAdjustment / 3));

    return {
      instance: name.trim() || "Unnamed Doodle",
      version: `${profile.version}-${firmwareSuffix(name)}`,
      score: adjustedScore,
      dependency: profile.dependency,
      behavior,
      risk:
        adjustedScore >= 90
          ? "Critical but adorable"
          : adjustedScore >= 80
            ? "Medium-high"
            : "Manageable with snacks",
    };
  }, [age, behavior, name, profile]);

  return (
    <Shell>
      <h1 className="text-4xl font-black">Generate Your Doodle Report</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Live v0.2 diagnostic generator for unstable companion infrastructure.
      </p>

      <section className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <form className="rounded-2xl border bg-white p-6 shadow-sm">
          <label className="block text-sm font-bold" htmlFor="doodle-name">
            Doodle Name
          </label>
          <input
            id="doodle-name"
            className="mt-2 w-full rounded-xl border px-4 py-3"
            placeholder="Murphy"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label className="mt-5 block text-sm font-bold" htmlFor="doodle-age">
            Age
          </label>
          <input
            id="doodle-age"
            className="mt-2 w-full rounded-xl border px-4 py-3"
            inputMode="numeric"
            placeholder="3"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />

          <label className="mt-5 block text-sm font-bold" htmlFor="primary-behavior">
            Primary Behavior
          </label>
          <select
            id="primary-behavior"
            className="mt-2 w-full rounded-xl border px-4 py-3"
            value={behavior}
            onChange={(event) => setBehavior(event.target.value as Behavior)}
          >
            {Object.keys(behaviorProfiles).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            Report updates instantly. Upload/photo analysis comes later.
          </div>
        </form>

        <article className="rounded-2xl border bg-white p-6 font-mono text-sm shadow-sm">
          <h2 className="font-sans text-2xl font-black">DOODLE REPORT</h2>
          <div className="mt-5 space-y-2">
            <p>INSTANCE: {report.instance}</p>
            <p>VERSION: {report.version}</p>
            <p>INSTABILITY SCORE: {report.score}/100</p>
            <p>RISK LEVEL: {report.risk}</p>
            <p>EMOTIONAL DEPENDENCY: {report.dependency}</p>
            <p>PRIMARY MODE: {report.behavior}</p>
          </div>

          <h3 className="mt-6 font-sans font-black">Known Bugs</h3>
          <ul className="mt-2 space-y-1">
            {profile.bugs.map((bug) => (
              <li key={bug}>- {bug}</li>
            ))}
          </ul>

          <h3 className="mt-6 font-sans font-black">Recommended Actions</h3>
          <ul className="mt-2 space-y-1">
            {profile.actions.map((action) => (
              <li key={action}>- {action}</li>
            ))}
          </ul>
        </article>
      </section>
    </Shell>
  );
}

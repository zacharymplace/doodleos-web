"use client";

import { useMemo, useState } from "react";
import { Copy, ShieldAlert } from "lucide-react";
import { Shell } from "@/components/Shell";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";

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

function severityLabel(score: number) {
  if (score >= 90) {
    return {
      label: "CRITICAL",
      style: "bg-red-100 text-red-700 border-red-200",
    };
  }

  if (score >= 80) {
    return {
      label: "HIGH",
      style: "bg-amber-100 text-amber-700 border-amber-200",
    };
  }

  return {
    label: "MODERATE",
    style: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };
}

export default function ReportPage() {
  const [name, setName] = useState("Murphy");
  const [behavior, setBehavior] = useState<Behavior>("Wet Beige Missile");
  const [age, setAge] = useState("3");
  const [copied, setCopied] = useState(false);

  const profile = behaviorProfiles[behavior];

  const report = useMemo(() => {
    const parsedAge = Number(age);

    const ageAdjustment = Number.isFinite(parsedAge)
      ? Math.min(Math.max(parsedAge, 0), 15)
      : 0;

    const adjustedScore = Math.min(
      100,
      profile.score + Math.floor(ageAdjustment / 3)
    );

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

  const severity = severityLabel(report.score);

  const shareText = `
DOODLEOS REPORT

INSTANCE: ${report.instance}
VERSION: ${report.version}
INSTABILITY SCORE: ${report.score}/100
SEVERITY: ${severity.label}
RISK LEVEL: ${report.risk}
EMOTIONAL DEPENDENCY: ${report.dependency}
PRIMARY MODE: ${report.behavior}

KNOWN BUGS:
${profile.bugs.map((bug) => `- ${bug}`).join("\n")}

RECOMMENDED ACTIONS:
${profile.actions.map((action) => `- ${action}`).join("\n")}
`.trim();

  async function handleCopy() {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Shell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black">
            Generate Your Doodle Report
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Live v0.3 diagnostic generator for unstable companion
            infrastructure.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Copied" : "Copy Report"}
        </button>
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <form className="border-2 border-slate-900 bg-[#ece9d8] p-6 shadow-[4px_4px_0px_#0f172a]">
          <label className="block text-sm font-bold" htmlFor="doodle-name">
            Doodle Name
          </label>

          <input
            id="doodle-name"
            className="mt-2 w-full border-2 border-slate-900 bg-white px-4 py-3 shadow-[2px_2px_0px_#0f172a]"
            placeholder="Murphy"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label className="mt-5 block text-sm font-bold" htmlFor="doodle-age">
            Age
          </label>

          <input
            id="doodle-age"
            className="mt-2 w-full border-2 border-slate-900 bg-white px-4 py-3 shadow-[2px_2px_0px_#0f172a]"
            inputMode="numeric"
            placeholder="3"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />

          <label
            className="mt-5 block text-sm font-bold"
            htmlFor="primary-behavior"
          >
            Primary Behavior
          </label>

          <select
            id="primary-behavior"
            className="mt-2 w-full border-2 border-slate-900 bg-white px-4 py-3 shadow-[2px_2px_0px_#0f172a]"
            value={behavior}
            onChange={(event) =>
              setBehavior(event.target.value as Behavior)
            }
          >
            {Object.keys(behaviorProfiles).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <div className="mt-6 border-2 border-slate-900 bg-white p-4 font-mono text-xs text-slate-700 shadow-[2px_2px_0px_#0f172a]">
            Report updates instantly. Shareable diagnostic output enabled.
          </div>
        </form>

        <WindowPanel title="DOODLE_REPORT.EXE">
          <div className="border-b-2 border-slate-900 bg-[#1f3c88] p-5 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">DOODLE REPORT</h2>

              <div
                className={`rounded-full border px-3 py-1 text-xs font-black ${severity.style}`}
              >
                {severity.label}
              </div>
            </div>

            <p className="mt-2 text-sm text-slate-300">
              Enterprise companion diagnostics
            </p>
          </div>

          <div className="p-6 font-mono text-sm">
            <div className="space-y-2">
              <p>INSTANCE: {report.instance}</p>
              <p>VERSION: {report.version}</p>
              <p>INSTABILITY SCORE: {report.score}/100</p>
              <p>RISK LEVEL: {report.risk}</p>
              <p>EMOTIONAL DEPENDENCY: {report.dependency}</p>
              <p>PRIMARY MODE: {report.behavior}</p>
            </div>

            <div className="mt-6 flex items-center gap-2 border-2 border-slate-900 bg-[#fff7cc] p-4 text-amber-900 shadow-[2px_2px_0px_#0f172a]">
              <ShieldAlert className="h-5 w-5" />

              <div className="text-xs font-semibold">
                Doodle containment protocols may be insufficient during
                excitement events.
              </div>
            </div>

            <h3 className="mt-6 font-sans font-black">Known Bugs</h3>

            <ul className="mt-2 space-y-1">
              {profile.bugs.map((bug) => (
                <li key={bug}>- {bug}</li>
              ))}
            </ul>

            <h3 className="mt-6 font-sans font-black">
              Recommended Actions
            </h3>

            <ul className="mt-2 space-y-1">
              {profile.actions.map((action) => (
                <li key={action}>- {action}</li>
              ))}
            </ul>
          </div>
        </WindowPanel>
      </section>
    </Shell>
  );
}

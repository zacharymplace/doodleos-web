"use client";

import { useMemo, useState } from "react";
import { Copy, ShieldAlert } from "lucide-react";
import { Shell } from "@/components/Shell";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";
import { SystemBadge } from "@/components/doodlenet95/SystemBadge";
import { DoodleNetButton } from "@/components/doodlenet95/DoodleNetButton";

const behaviorProfiles = {
  "Wet Beige Missile": {
    version: "4.7.2 Chaos Canary",
    score: 86,
    dependency: "Severe",
    archetypeNote: "Moisture-enabled companion projectile with limited braking and no shame.",
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
    archetypeNote: "Provides emotional support through invasive proximity and blanket claims.",
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
    archetypeNote: "Converts outdoor moisture into distributed indoor evidence.",
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
    archetypeNote: "Absorbs leaves, mulch, and vague neighborhood energy.",
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
      style: "bg-(--spot-tint) text-(--ink) border-double",
    };
  }

  if (score >= 80) {
    return {
      label: "HIGH",
      style: "bg-(--spot-tint) text-(--ink) border-dashed",
    };
  }

  return {
    label: "MODERATE",
    style: "bg-(--data-tint) text-(--ink) border-solid",
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
    }, 2200);
  }

  return (
    <Shell>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-black">
            Generate Your Doodle Report
          </h1>

          <p className="mt-3 max-w-2xl text-(--ink-2)">
            Live v0.3 diagnostic generator for unstable companion
            infrastructure.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="flex w-fit items-center gap-2 border-2 border-(--rule-strong) bg-(--paper-2) px-4 py-2 font-mono text-xs font-black uppercase text-(--ink) transition"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Copied" : "Copy Report"}
        </button>
      </div>

      {copied ? (
        <div className="mt-6 border-2 border-(--rule-strong) bg-(--data-tint) p-3 font-mono text-xs font-black uppercase text-(--ink)">
          Report copied to clipboard. Doodle accountability package ready.
        </div>
      ) : null}

      <section className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <form className="border-2 border-(--rule-strong) bg-(--paper) p-6">
          <label className="block text-sm font-bold" htmlFor="doodle-name">
            Doodle Name
          </label>

          <input
            id="doodle-name"
            className="mt-2 w-full border-2 border-(--rule-strong) bg-(--paper) px-4 py-3"
            placeholder="Murphy"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label className="mt-5 block text-sm font-bold" htmlFor="doodle-age">
            Age
          </label>

          <input
            id="doodle-age"
            className="mt-2 w-full border-2 border-(--rule-strong) bg-(--paper) px-4 py-3"
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
            className="mt-2 w-full border-2 border-(--rule-strong) bg-(--paper) px-4 py-3"
            value={behavior}
            onChange={(event) =>
              setBehavior(event.target.value as Behavior)
            }
          >
            {Object.keys(behaviorProfiles).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <div className="mt-6 border-2 border-(--rule-strong) bg-(--paper) p-4 font-mono text-xs text-(--ink-2)">
            Report updates instantly. Shareable diagnostic output enabled.
          </div>
        </form>

        <WindowPanel title="DOODLE_REPORT.EXE">
          <div className="border-b-2 border-(--rule-strong) bg-(--ink) p-5 text-(--paper)">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">DOODLE REPORT</h2>

              <SystemBadge
                label={severity.label}
                tone={
                  report.score >= 90
                    ? "danger"
                    : report.score >= 80
                      ? "warn"
                      : "ok"
                }
              />
            </div>

            <p className="mt-2 text-sm text-(--paper-3)">
              Enterprise companion diagnostics
            </p>
          </div>

          <div className="p-4 font-mono text-xs sm:p-6 sm:text-sm">
            <div className="space-y-1.5">
              <p>INSTANCE: {report.instance}</p>
              <p>VERSION: {report.version}</p>
              <p>INSTABILITY SCORE: {report.score}/100</p>
              <p>RISK LEVEL: {report.risk}</p>
              <p>EMOTIONAL DEPENDENCY: {report.dependency}</p>
              <p>PRIMARY MODE: {report.behavior}</p>
            </div>

            <div className="mt-6 flex items-center gap-2 border-2 border-(--rule-strong) bg-(--spot-tint) border-dashed p-4 text-(--ink)">
              <ShieldAlert className="h-5 w-5" />

              <div className="text-xs font-semibold">
                Doodle containment protocols may be insufficient during
                excitement events.
              </div>
            </div>

            <div className="mt-5 border-2 border-(--rule-strong) bg-(--paper) p-4 font-sans text-sm">
              <div className="font-mono text-xs font-black uppercase text-(--ink-muted)">
                Archetype Classification
              </div>
              <p className="mt-2 leading-6">{profile.archetypeNote}</p>
              <div className="mt-4">
                <DoodleNetButton href="/archetypes">
                  View Archetypes
                </DoodleNetButton>
              </div>
            </div>

            <h3 className="mt-5 border-b-2 border-(--rule-strong) pb-2 font-sans font-black">Known Bugs</h3>

            <ul className="mt-2 space-y-1">
              {profile.bugs.map((bug) => (
                <li key={bug}>- {bug}</li>
              ))}
            </ul>

            <h3 className="mt-5 border-b-2 border-(--rule-strong) pb-2 font-sans font-black">
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

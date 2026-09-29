"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Copy, ShieldAlert } from "lucide-react";
import { Shell } from "@/components/Shell";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";
import { SystemBadge } from "@/components/doodlenet95/SystemBadge";

const incidentTypes = [
  "Unauthorized Pond Deployment",
  "Sock Containment Breach",
  "Vacuum Aggression Event",
  "Guest Overstimulation Cascade",
  "Mud Distribution Failure",
  "3AM Zoomie Incident",
  "Counter Surfing Escalation",
];

const severityMap: Record<string, number> = {
  "Unauthorized Pond Deployment": 88,
  "Sock Containment Breach": 74,
  "Vacuum Aggression Event": 81,
  "Guest Overstimulation Cascade": 92,
  "Mud Distribution Failure": 84,
  "3AM Zoomie Incident": 77,
  "Counter Surfing Escalation": 90,
};

function incidentId(name: string) {
  const seed = name
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 4);

  // Derived from the name, not Math.random(): a random ID differs between server and client render and breaks hydration.
  let hash = 0;
  for (const char of name) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return `INC-${seed || "DOOD"}-${1000 + (hash % 9000)}`;
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

export default function SubmitIncidentPage() {
  const [name, setName] = useState("Murphy");
  const [incident, setIncident] = useState(incidentTypes[0]);
  const [details, setDetails] = useState(
    "Entered retention pond despite direct verbal guidance."
  );
  const [copied, setCopied] = useState(false);

  const severityScore = severityMap[incident];
  const severity = severityLabel(severityScore);

  const report = useMemo(() => {
    return {
      id: incidentId(name),
      responder: "DoodleOS Incident Response",
      mitigation:
        severityScore >= 90
          ? "Immediate towel deployment recommended."
          : severityScore >= 80
            ? "Containment possible with treats."
            : "Situation considered manageable.",
    };
  }, [name, severityScore]);

  const shareText = `
DOODLEOS INCIDENT REPORT

REPORT ID: ${report.id}
INSTANCE: ${name.trim() || "Unnamed Doodle"}
INCIDENT: ${incident}
SEVERITY: ${severity.label}
SEVERITY SCORE: ${severityScore}/100
RESPONSE TEAM: ${report.responder}

MITIGATION:
${report.mitigation}

FIELD NOTES:
${details.trim() || "No field notes provided."}
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
          <h1 className="text-4xl font-black">Submit Incident Report</h1>

          <p className="mt-3 max-w-2xl text-(--ink-2)">
            Document and classify active doodle-related infrastructure failures.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex w-fit items-center gap-2 border-2 border-(--rule-strong) bg-(--paper-2) px-4 py-2 font-mono text-xs font-black uppercase text-(--ink) transition"
          >
            <Copy className="h-4 w-4" />
            {copied ? "Copied" : "Copy Incident"}
          </button>

          <SystemBadge
            label={`${severity.label} INCIDENT`}
            tone={
              severityScore >= 90
                ? "danger"
                : severityScore >= 80
                  ? "warn"
                  : "ok"
            }
          />
        </div>
      </div>

      {copied ? (
        <div className="mt-6 border-2 border-(--rule-strong) bg-(--data-tint) p-3 font-mono text-xs font-black uppercase text-(--ink)">
          Incident copied to clipboard. Please preserve evidence before bath deployment.
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
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label className="mt-5 block text-sm font-bold" htmlFor="incident-type">
            Incident Type
          </label>

          <select
            id="incident-type"
            className="mt-2 w-full border-2 border-(--rule-strong) bg-(--paper) px-4 py-3"
            value={incident}
            onChange={(event) => setIncident(event.target.value)}
          >
            {incidentTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          <label className="mt-5 block text-sm font-bold" htmlFor="details">
            Incident Notes
          </label>

          <textarea
            id="details"
            rows={5}
            className="mt-2 w-full border-2 border-(--rule-strong) bg-(--paper) px-4 py-3"
            value={details}
            onChange={(event) => setDetails(event.target.value)}
          />

          <div className="mt-6 border-2 border-(--rule-strong) bg-(--paper) p-4 font-mono text-xs text-(--ink-2)">
            All reports are reviewed by certified containment personnel.
          </div>
        </form>

        <WindowPanel title="INCIDENT_REPORT.EXE">
          <div className="border-b-2 border-(--rule-strong) bg-(--ink) p-5 text-(--paper)">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">INCIDENT REPORT</h2>

              <SystemBadge
                label={severity.label}
                tone={
                  severityScore >= 90
                    ? "danger"
                    : severityScore >= 80
                      ? "warn"
                      : "ok"
                }
              />
            </div>

            <p className="mt-2 text-sm text-(--paper-3)">
              Active companion instability event
            </p>
          </div>

          <div className="p-4 font-mono text-xs sm:p-6 sm:text-sm">
            <div className="space-y-1.5">
              <p>REPORT ID: {report.id}</p>
              <p>INSTANCE: {name}</p>
              <p>INCIDENT: {incident}</p>
              <p>SEVERITY SCORE: {severityScore}/100</p>
              <p>RESPONSE TEAM: {report.responder}</p>
            </div>

            <div className="mt-6 flex items-start gap-3 border-2 border-(--rule-strong) bg-(--spot-tint) border-4 border-double p-4 text-(--ink)">
              <ShieldAlert className="mt-0.5 h-5 w-5" />

              <div>
                <div className="font-bold">
                  Containment protocols advised
                </div>

                <div className="mt-1 text-xs">
                  {report.mitigation}
                </div>
              </div>
            </div>

            <h3 className="mt-6 flex items-center gap-2 font-sans font-black">
              <AlertTriangle className="h-4 w-4" />
              Field Notes
            </h3>

            <div className="mt-2 border-2 border-(--rule-strong) bg-(--paper) p-4 leading-6 text-(--ink-2)">
              {details}
            </div>

            <div className="mt-6 flex items-center gap-2 border-2 border-(--rule-strong) bg-(--data-tint) p-4 text-(--ink)">
              <CheckCircle2 className="h-5 w-5" />

              <div className="text-xs font-semibold">
                Incident successfully escalated to DoodleOS monitoring systems.
              </div>
            </div>
          </div>
        </WindowPanel>
      </section>
    </Shell>
  );
}

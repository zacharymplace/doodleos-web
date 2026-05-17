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

  return `INC-${seed || "DOOD"}-${Math.floor(1000 + Math.random() * 9000)}`;
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
    }, 2000);
  }

  return (
    <Shell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black">Submit Incident Report</h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Document and classify active doodle-related infrastructure failures.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"
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

      <section className="mt-8 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <form className="border-2 border-slate-900 bg-[#ece9d8] p-6 shadow-[4px_4px_0px_#0f172a]">
          <label className="block text-sm font-bold" htmlFor="doodle-name">
            Doodle Name
          </label>

          <input
            id="doodle-name"
            className="mt-2 w-full border-2 border-slate-900 bg-white px-4 py-3 shadow-[2px_2px_0px_#0f172a]"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label className="mt-5 block text-sm font-bold" htmlFor="incident-type">
            Incident Type
          </label>

          <select
            id="incident-type"
            className="mt-2 w-full border-2 border-slate-900 bg-white px-4 py-3 shadow-[2px_2px_0px_#0f172a]"
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
            className="mt-2 w-full border-2 border-slate-900 bg-white px-4 py-3 shadow-[2px_2px_0px_#0f172a]"
            value={details}
            onChange={(event) => setDetails(event.target.value)}
          />

          <div className="mt-6 border-2 border-slate-900 bg-white p-4 font-mono text-xs text-slate-700 shadow-[2px_2px_0px_#0f172a]">
            All reports are reviewed by certified containment personnel.
          </div>
        </form>

        <WindowPanel title="INCIDENT_REPORT.EXE">
          <div className="border-b-2 border-slate-900 bg-[#1f3c88] p-5 text-white">
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

            <p className="mt-2 text-sm text-slate-300">
              Active companion instability event
            </p>
          </div>

          <div className="p-6 font-mono text-sm">
            <div className="space-y-2">
              <p>REPORT ID: {report.id}</p>
              <p>INSTANCE: {name}</p>
              <p>INCIDENT: {incident}</p>
              <p>SEVERITY SCORE: {severityScore}/100</p>
              <p>RESPONSE TEAM: {report.responder}</p>
            </div>

            <div className="mt-6 flex items-start gap-3 border-2 border-slate-900 bg-[#ffd6d6] p-4 text-red-900 shadow-[2px_2px_0px_#0f172a]">
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

            <div className="mt-2 border-2 border-slate-900 bg-white p-4 leading-6 text-slate-700 shadow-[2px_2px_0px_#0f172a]">
              {details}
            </div>

            <div className="mt-6 flex items-center gap-2 border-2 border-slate-900 bg-[#d9ffe2] p-4 text-emerald-900 shadow-[2px_2px_0px_#0f172a]">
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

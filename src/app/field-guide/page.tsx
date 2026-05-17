import { Shell } from "@/components/Shell";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";
import { DoodleNetButton } from "@/components/doodlenet95/DoodleNetButton";

const guides = [
  {
    title: "Doorbell Event Response",
    type: "Incident Handling",
    summary: "How to stabilize household systems after an external chime event.",
    steps: [
      "Assume bark buffer overflow.",
      "Redirect doodle instance away from glass surfaces.",
      "Delay guest greeting until four-paw compliance is restored.",
    ],
  },
  {
    title: "Sock Hostage Protocol",
    type: "Asset Recovery",
    summary: "A structured process for negotiating laundry object release.",
    steps: [
      "Do not initiate chase loop.",
      "Offer approved trade object.",
      "Recover sock without rewarding theatrical escalation.",
    ],
  },
  {
    title: "Wet Beard Containment",
    type: "Environmental Control",
    summary: "Mitigation guidance for post-water-bowl drip distribution.",
    steps: [
      "Stage towel near hydration station.",
      "Avoid dark pants within splash radius.",
      "Document recurring beard persistence as expected behavior.",
    ],
  },
  {
    title: "Zoomie Risk Assessment",
    type: "Safety Advisory",
    summary: "How to identify pre-zoomie instability before furniture is involved.",
    steps: [
      "Watch for sudden stillness.",
      "Clear low tables and hallway obstacles.",
      "Do not make direct eye contact during ignition phase.",
    ],
  },
  {
    title: "Selective Hearing Diagnostics",
    type: "System Test",
    summary: "Determine whether recall is offline or merely negotiating.",
    steps: [
      "Run name-call test.",
      "Run treat-bag control test.",
      "Compare response delta and classify severity.",
    ],
  },
  {
    title: "Mud Roomba Cleanup",
    type: "Recovery Workflow",
    summary: "Post-yard incident cleanup for distributed paw evidence.",
    steps: [
      "Freeze household movement.",
      "Contain entryway.",
      "Clean paws before allowing couch integration.",
    ],
  },
];

export default function FieldGuidePage() {
  return (
    <Shell>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black">DoodleOS Field Guide</h1>
        <p className="mt-3 text-slate-700">
          Operational guidance for common golden doodle instability events.
        </p>
      </div>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {guides.map((guide) => (
          <WindowPanel key={guide.title} title={`${guide.title.toUpperCase()}.TXT`}>
            <div className="font-mono text-sm">
              <div className="mb-3 inline-block border-2 border-slate-900 bg-[#fff7cc] px-2 py-1 text-xs font-black uppercase">
                {guide.type}
              </div>

              <p className="leading-6">{guide.summary}</p>

              <h2 className="mt-5 border-b-2 border-slate-900 pb-2 font-sans font-black">
                Procedure
              </h2>

              <ol className="mt-3 list-decimal space-y-1 pl-5">
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </WindowPanel>
        ))}
      </section>

      <div className="mt-8">
        <DoodleNetButton href="/submit-incident" variant="primary">
          File Incident
        </DoodleNetButton>
      </div>
    </Shell>
  );
}

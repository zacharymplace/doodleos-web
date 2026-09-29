import { Shell } from "@/components/Shell";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";
import { DoodleNetButton } from "@/components/doodlenet95/DoodleNetButton";

const archetypes = [
  {
    name: "Wet Beige Missile",
    severity: "High",
    description: "A moisture-enabled companion projectile with limited braking and no shame.",
    knownBugs: ["Puddle magnetism", "Back-seat contamination", "Recall degradation"],
  },
  {
    name: "Sock Hostage Negotiator",
    severity: "Moderate",
    description: "Secures laundry assets and initiates chase-based diplomacy.",
    knownBugs: ["Object retention", "Theatrical eye contact", "Ransom escalation"],
  },
  {
    name: "Doorbell Prophet",
    severity: "Critical",
    description: "Predicts household collapse whenever an external chime event occurs.",
    knownBugs: ["Bark buffer overflow", "Guest overclock", "Perimeter delusion"],
  },
  {
    name: "Therapy Goblin",
    severity: "Moderate",
    description: "Provides emotional support through invasive proximity and blanket claims.",
    knownBugs: ["Foot sitting", "Doorway blocking", "Chin deployment"],
  },
  {
    name: "Mud Roomba",
    severity: "High",
    description: "Converts outdoor moisture into distributed indoor evidence.",
    knownBugs: ["Towel evasion", "Entryway failure", "Floor pattern generation"],
  },
  {
    name: "Beige Compliance Risk",
    severity: "High",
    description: "Appears innocent while violating household operating procedures.",
    knownBugs: ["Counter surfing", "Selective hearing", "Evidence concealment"],
  },
  {
    name: "Cheese Wrapper Apparition",
    severity: "Moderate",
    description: "Materializes instantly when dairy-adjacent packaging is disturbed.",
    knownBugs: ["Kitchen teleportation", "Snack entitlement", "Counter intelligence"],
  },
  {
    name: "Bathroom Door Auditor",
    severity: "Low",
    description: "Monitors all private human activity for unauthorized separation events.",
    knownBugs: ["Door scratching", "Privacy deprecation", "Hallway surveillance"],
  },
  {
    name: "Suspicious Silence Unit",
    severity: "Critical",
    description: "Appears calm only when actively modifying household property.",
    knownBugs: ["Evidence concealment", "Charm reset", "Shoe risk"],
  },
];

export default function ArchetypesPage() {
  return (
    <Shell>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black">Doodle Archetypes</h1>
        <p className="mt-3 text-(--ink-2)">
          Classification profiles for unstable golden doodle companion instances.
        </p>
      </div>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {archetypes.map((archetype) => (
          <WindowPanel key={archetype.name} title={`${archetype.name.toUpperCase()}.CFG`}>
            <div className="font-mono text-sm">
              <div className="mb-3 inline-block border-2 border-(--rule-strong) bg-(--spot-tint) border-dashed px-2 py-1 text-xs font-black uppercase">
                Severity: {archetype.severity}
              </div>

              <p className="leading-6">{archetype.description}</p>

              <h2 className="mt-5 border-b-2 border-(--rule-strong) pb-2 font-sans font-black">
                Known Bugs
              </h2>

              <ul className="mt-3 space-y-1">
                {archetype.knownBugs.map((bug) => (
                  <li key={bug}>- {bug}</li>
                ))}
              </ul>
            </div>
          </WindowPanel>
        ))}
      </section>

      <div className="mt-8">
        <DoodleNetButton href="/report" variant="primary">
          Run Diagnostic
        </DoodleNetButton>
      </div>
    </Shell>
  );
}

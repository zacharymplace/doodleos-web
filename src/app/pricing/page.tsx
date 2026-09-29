import { BadgeCheck, Bone, Crown, ShieldAlert } from "lucide-react";
import { Shell } from "@/components/Shell";
import { DoodleNetButton } from "@/components/doodlenet95/DoodleNetButton";
import { SystemBadge } from "@/components/doodlenet95/SystemBadge";

const plans = [
  {
    name: "Starter",
    price: "$0",
    label: "For lightly unstable households",
    icon: Bone,
    features: [
      "Basic tail wag monitoring",
      "Manual sock incident logging",
      "Limited recall diagnostics",
      "Community-grade towel guidance",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    label: "For active doodle operators",
    icon: BadgeCheck,
    featured: true,
    features: [
      "Advanced zoomie detection",
      "Priority wet beard alerts",
      "Unlimited incident reports",
      "Enhanced squirrel outage tracking",
      "Monthly grooming spend panic report",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    label: "For multi-doodle infrastructure",
    icon: Crown,
    features: [
      "Fleet-level doodle observability",
      "Guest arrival incident response",
      "Multi-zone mud containment",
      "Dedicated emotional dependency analyst",
    ],
  },
];

export default function PricingPage() {
  return (
    <Shell>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black">DoodleOS Pricing</h1>
        <p className="mt-3 text-(--ink-2)">
          Companion infrastructure plans for households operating at elevated fluff, mud,
          and emotional dependency levels.
        </p>
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <article
              key={plan.name}
              className="border-2 border-(--rule-strong) bg-(--paper) p-6"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-(--ink)" />
                {plan.featured ? (
                  <SystemBadge label="MOST UNNECESSARY" tone="warn" />
                ) : null}
              </div>

              <h2 className="mt-5 text-2xl font-black">{plan.name}</h2>
              <p className="mt-2 text-sm text-(--ink-2)">{plan.label}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-black">{plan.price}</span>
                {plan.price !== "Custom" ? (
                  <span className="pb-2 text-sm font-semibold text-(--ink-muted)">/mo</span>
                ) : null}
              </div>

              <ul className="mt-6 space-y-3 text-sm text-(--ink-2)">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-(--ink)">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <DoodleNetButton href="/report" variant={plan.featured ? "primary" : "default"}>
                  Run Diagnostic First
                </DoodleNetButton>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-8 border-2 border-(--rule-strong) bg-(--spot-tint) border-dashed p-6 text-(--ink)">
        <div className="flex gap-3">
          <ShieldAlert className="mt-1 h-5 w-5" />
          <div>
            <h2 className="font-black">Billing advisory</h2>
            <p className="mt-2 text-sm leading-6">
              DoodleOS is not responsible for actual grooming bills, destroyed rugs,
              emotional manipulation, or recurring treat-based negotiations.
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}

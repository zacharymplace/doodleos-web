import { Shell } from "@/components/Shell";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";
import { DoodleNetButton } from "@/components/doodlenet95/DoodleNetButton";

export default function AboutPage() {
  return (
    <Shell>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black">About DoodleOS</h1>
        <p className="mt-3 text-slate-700">
          Legacy companion software for diagnosing golden doodle chaos.
        </p>
      </div>

      <section className="mt-8 grid gap-5">
        <WindowPanel title="README.TXT">
          <div className="space-y-4 text-sm leading-7 text-slate-900">
            <p>
              DoodleOS is a fake 1995-style control panel for golden doodle owners.
              It treats everyday doodle behavior like enterprise software incidents,
              system outages, bug reports, and compliance risks.
            </p>

            <p>
              The joke is not that doodles are random. The joke is that a very serious
              obsolete computer system is trying to govern a creature powered by love,
              mud, socks, doorbells, and selective hearing.
            </p>
          </div>
        </WindowPanel>

        <WindowPanel title="OPERATING_PRINCIPLES.INI">
          <ul className="space-y-2 font-mono text-sm">
            <li>- Recall remains in beta.</li>
            <li>- Personal space may be deprecated without notice.</li>
            <li>- Wet beard persistence is expected behavior.</li>
            <li>- All incidents should be documented before bath deployment.</li>
          </ul>
        </WindowPanel>

        <div>
          <DoodleNetButton href="/report" variant="primary">
            Run Diagnostic
          </DoodleNetButton>
        </div>
      </section>
    </Shell>
  );
}

import { Shell } from "@/components/Shell";
import { WindowPanel } from "@/components/doodlenet95/WindowPanel";
import { DoodleNetButton } from "@/components/doodlenet95/DoodleNetButton";

const posts = [
  "I ran my golden doodle through DoodleOS and the recall system is still in beta.",
  "DoodleOS diagnosed my dog as a Wet Beige Missile with severe emotional dependency.",
  "Filed my first DoodleOS incident report. Root cause: joy overflow.",
];

export default function ShareKitPage() {
  return (
    <Shell>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black">Share Kit</h1>
        <p className="mt-3 text-slate-700">
          Copy-ready lines for spreading DoodleOS without explaining the joke too hard.
        </p>
      </div>

      <section className="mt-8 grid gap-5">
        <WindowPanel title="SHARE_LINES.TXT">
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post}
                className="border-2 border-slate-900 bg-white p-4 font-mono text-sm shadow-[2px_2px_0px_#0f172a]"
              >
                {post}
              </div>
            ))}
          </div>
        </WindowPanel>

        <WindowPanel title="PUBLIC_LINK.URL">
          <div className="font-mono text-sm">
            https://doodleos-web.vercel.app
          </div>

          <div className="mt-5">
            <DoodleNetButton href="/report" variant="primary">
              Run Diagnostic
            </DoodleNetButton>
          </div>
        </WindowPanel>
      </section>
    </Shell>
  );
}

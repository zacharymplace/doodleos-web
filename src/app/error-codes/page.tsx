import { Shell } from "@/components/Shell";
import { errorCodes } from "@/data/doodle";

export default function ErrorCodesPage() {
  return (
    <Shell>
      <h1 className="text-4xl font-black">Error Codes</h1>
      <p className="mt-3 text-(--ink-2)">Diagnostic reference for common doodle failures.</p>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {errorCodes.map(([code, description]) => (
          <article key={code} className="border-2 border-(--rule-strong) bg-(--paper) p-5">
            <code className="border-2 border-(--rule-strong) bg-(--paper-2) px-2 py-1 font-bold">{code}</code>
            <p className="mt-4 text-(--ink-2)">{description}</p>
          </article>
        ))}
      </section>
    </Shell>
  );
}

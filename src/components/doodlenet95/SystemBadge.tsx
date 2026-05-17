export function SystemBadge({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "ok" | "warn" | "danger";
}) {
  const styles = {
    neutral: "bg-[#c0c0c0] text-slate-950",
    ok: "bg-[#d9ffe2] text-emerald-950",
    warn: "bg-[#fff7cc] text-amber-950",
    danger: "bg-[#ffd6d6] text-red-950",
  };

  return (
    <span
      className={`inline-block border-2 border-slate-900 px-2 py-1 font-mono text-[10px] font-black uppercase tracking-wide ${styles[tone]}`}
    >
      {label}
    </span>
  );
}

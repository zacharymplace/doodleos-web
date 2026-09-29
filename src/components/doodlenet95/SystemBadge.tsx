export function SystemBadge({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "ok" | "warn" | "danger";
}) {
  const styles = {
    neutral: "bg-(--paper-2) text-(--ink)",
    ok: "bg-(--data-tint) text-(--ink)",
    warn: "bg-(--spot-tint) border-dashed text-(--ink)",
    danger: "bg-(--spot-tint) border-4 border-double text-(--ink)",
  };

  return (
    <span
      className={`inline-block border-2 border-(--rule-strong) px-2 py-1 font-mono text-[10px] font-black uppercase tracking-wide ${styles[tone]}`}
    >
      {label}
    </span>
  );
}

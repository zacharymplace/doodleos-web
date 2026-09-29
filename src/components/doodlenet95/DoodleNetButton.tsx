import Link from "next/link";

export function DoodleNetButton({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary" | "danger";
}) {
  const styles = {
    default:
      "border-2 border-(--rule-strong) bg-(--paper-2) text-(--ink)",
    primary:
      "border-2 border-(--rule-strong) bg-(--ink) text-(--paper)",
    danger:
      "border-2 border-(--rule-strong) bg-(--spot-tint) text-(--ink) border-double",
  };

  return (
    <Link
      href={href}
      className={`inline-block px-4 py-2 font-mono text-xs font-black uppercase tracking-wide transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

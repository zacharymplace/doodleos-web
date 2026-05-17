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
      "border-2 border-slate-900 bg-[#c0c0c0] text-slate-950 shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none",
    primary:
      "border-2 border-slate-900 bg-[#1f3c88] text-white shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none",
    danger:
      "border-2 border-slate-900 bg-[#ff5c5c] text-slate-950 shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none",
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

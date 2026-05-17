import Link from "next/link";
import { Dog, Folder, Gauge, TriangleAlert } from "lucide-react";

const shortcuts = [
  { href: "/report", label: "Diagnostic", icon: Gauge },
  { href: "/submit-incident", label: "Incident", icon: TriangleAlert },
  { href: "/status", label: "Status", icon: Folder },
];

export function StartBar() {
  return (
    <div className="sticky bottom-0 z-40 border-t-2 border-slate-900 bg-[#c0c0c0] px-2 py-2 font-mono text-[10px] font-black uppercase shadow-[0_-2px_0px_#ffffff_inset] sm:px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 border-2 border-slate-900 bg-[#ece9d8] px-3 py-2 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          <Dog className="h-4 w-4" />
          Start
        </Link>

        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto px-1">
          {shortcuts.map((shortcut) => {
            const Icon = shortcut.icon;

            return (
              <Link
                key={shortcut.href}
                href={shortcut.href}
                className="flex shrink-0 items-center gap-2 border-2 border-slate-900 bg-[#d8d2bd] px-3 py-2 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              >
                <Icon className="h-3.5 w-3.5" />
                {shortcut.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden border-2 border-slate-900 bg-white px-3 py-2 text-slate-700 shadow-[2px_2px_0px_#0f172a] sm:block">
          ZOOMIE RISK: HIGH
        </div>
      </div>
    </div>
  );
}

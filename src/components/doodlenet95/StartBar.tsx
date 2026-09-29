import Link from "next/link";
import { Copy, Dog, Folder, Gauge, TriangleAlert } from "lucide-react";

const shortcuts = [
  { href: "/report", label: "Diagnostic", icon: Gauge },
  { href: "/submit-incident", label: "Incident", icon: TriangleAlert },
  { href: "/status", label: "Status", icon: Folder },
  { href: "/share-kit", label: "Share", icon: Copy },
];

export function StartBar() {
  return (
    <div className="sticky bottom-0 z-40 hidden border-t-2 border-(--rule-strong) bg-(--paper-2) px-4 py-2 font-mono text-[10px] font-black uppercase md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 border-2 border-(--rule-strong) bg-(--paper) px-3 py-2"
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
                className="flex shrink-0 items-center gap-2 border-2 border-(--rule-strong) bg-(--paper-3) px-3 py-2"
              >
                <Icon className="h-3.5 w-3.5" />
                {shortcut.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden border-2 border-(--rule-strong) bg-(--paper) px-3 py-2 text-(--ink-2) sm:block">
          ZOOMIE RISK: HIGH
        </div>
      </div>
    </div>
  );
}

export function WindowPanel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden border-2 border-(--rule-strong) bg-(--paper) ${className}`}
    >
      <div className="flex items-center justify-between border-b-2 border-(--rule-strong) bg-(--ink) px-3 py-2 text-(--paper)">
        <div className="font-mono text-xs font-bold tracking-wide">
          {title}
        </div>

        <div className="flex gap-1 font-mono text-[9px] font-black text-(--ink)">
          <div className="grid h-4 w-4 place-items-center border border-(--rule-strong) bg-(--paper-2)">_</div>
          <div className="grid h-4 w-4 place-items-center border border-(--rule-strong) bg-(--paper-2)">□</div>
          <div className="grid h-4 w-4 place-items-center border border-(--rule-strong) bg-(--spot-tint)">×</div>
        </div>
      </div>

      <div className="bg-(--paper) p-5">
        {children}
      </div>
    </div>
  );
}

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
      className={`overflow-hidden border-2 border-slate-900 bg-[#ece9d8] shadow-[4px_4px_0px_#0f172a] ${className}`}
    >
      <div className="flex items-center justify-between border-b-2 border-slate-900 bg-[#1f3c88] px-3 py-2 text-white">
        <div className="font-mono text-xs font-bold tracking-wide">
          {title}
        </div>

        <div className="flex gap-1">
          <div className="h-3 w-3 border border-slate-900 bg-[#c0c0c0]" />
          <div className="h-3 w-3 border border-slate-900 bg-[#c0c0c0]" />
          <div className="h-3 w-3 border border-slate-900 bg-[#ff5c5c]" />
        </div>
      </div>

      <div className="bg-[#ece9d8] p-5">
        {children}
      </div>
    </div>
  );
}

import { Zap } from "lucide-react";

export function DynamicServiceIcon() {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent">
      <Zap className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </div>
  );
}

import * as React from "react";

import { cn } from "@/shared/lib/cn";
import { useSmoothCorners } from "@/shared/ui/smoothCorners";

export function classesForMarkdownTable(wrap: boolean) {
  return cn(
    "border-collapse text-left text-sm",
    wrap ? "w-full table-fixed" : "w-max min-w-full",
  );
}

export function MarkdownTable({
  children,
  wrap = false,
}: {
  children?: React.ReactNode;
  wrap?: boolean;
}) {
  const tableBlockRef = React.useRef<HTMLDivElement | null>(null);
  useSmoothCorners(tableBlockRef);

  return (
    <div
      ref={tableBlockRef}
      className="overflow-x-auto rounded-2xl border border-border/70"
      data-table-block=""
    >
      <table className={classesForMarkdownTable(wrap)}>{children}</table>
    </div>
  );
}

"use client";

import { useEffect, useId, useRef } from "react";

type MermaidDiagramProps = {
  chart: string;
  caption?: string;
};

export function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        securityLevel: "strict",
        fontFamily: "inherit",
      });

      try {
        const { svg } = await mermaid.render(`diagram${rawId}`, chart);
        if (!cancelled && host.current) {
          host.current.innerHTML = svg;
        }
      } catch {
        if (!cancelled && host.current) {
          host.current.replaceChildren();
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, rawId]);

  return (
    <figure className="mt-8">
      <div
        ref={host}
        className="mermaid-diagram overflow-x-auto rounded-[16px] bg-zinc-50 p-4 text-zinc-800"
      />
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-ink-faint">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

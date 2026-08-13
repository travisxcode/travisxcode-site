"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour12: false,
          timeZone: "America/Toronto",
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.08em] text-ink-soft">
      <span className="live-dot" aria-hidden="true" />
      <span className="tabular-nums">{time}</span>
      <span className="sr-only">Toronto time</span>
    </span>
  );
}

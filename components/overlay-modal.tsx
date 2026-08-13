"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";

type OverlayModalProps = {
  titleId: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

const subscribe = () => () => {};

export function OverlayModal({
  titleId,
  title,
  onClose,
  children,
}: OverlayModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [isClient, onClose]);

  if (!isClient) {
    return null;
  }

  return createPortal(
    <div
      className="modal-scrim fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="modal-panel relative flex max-h-[calc(100dvh-2rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:max-h-[calc(100dvh-4rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id={titleId} className="sr-only">
          {title}
        </h2>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-end p-3 sm:p-4">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/5 text-zinc-700 backdrop-blur-md hover:bg-black/10"
            aria-label="Close"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

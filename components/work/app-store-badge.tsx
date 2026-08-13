import Image from "next/image";

type AppStoreBadgeProps = {
  href: string;
  label?: string;
};

export function AppStoreBadge({
  href,
  label = "Download on the App Store",
}: AppStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-block"
    >
      <Image
        src="/images/badges/download-on-the-app-store.svg"
        alt={label}
        width={120}
        height={40}
        className="h-10 w-[120px]"
      />
    </a>
  );
}

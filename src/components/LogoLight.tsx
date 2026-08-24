import Link from "next/link";

export function LogoLight({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Link href="/blanco" className={`group flex items-center gap-2.5 ${className}`}>
      <svg
        width={size * 0.62}
        height={size * 0.62}
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0 transition-transform duration-300 group-hover:-rotate-12"
      >
        <circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="6" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 7.3L20 17.2M8 16.7L20 6.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="font-logo" style={{ fontSize: `${size * 0.5}px` }}>
        Maccia
      </span>
    </Link>
  );
}

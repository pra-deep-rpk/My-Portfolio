interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <img
      src="/images/hero/logo.png"
      alt="Prady logo"
      className={className ?? 'h-10 w-10'}
      draggable={false}
    />
  );
}

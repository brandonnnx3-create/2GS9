type ArrowIconProps = {
  className?: string;
};

export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden className={className}>
      <path d="M0 5h22M18 1l4 4-4 4" />
    </svg>
  );
}

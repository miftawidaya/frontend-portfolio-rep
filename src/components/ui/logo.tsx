type LogoProps = Readonly<{
  className?: string;
  variant?: 'default' | 'gradient';
}>;

/**
 * Brand Logo component - Single Source of Truth for the brand mark.
 * Supports 'default' (currentColor) and 'gradient' variants.
 * Definitions for gradients are included internally to ensure shape consistency.
 */
export const Logo = ({ className, variant = 'default' }: LogoProps) => {
  const isGradient = variant === 'gradient';

  return (
    <svg
      viewBox='0 0 43 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden='true'
    >
      <path
        d='M21.5 43C20.8775 22.6313 20.3687 22.1257 0 21.5C20.3687 20.8775 20.8744 20.3687 21.5 0C22.1224 20.3687 22.6313 20.8744 43 21.5C22.6313 22.1257 22.1257 22.6251 21.5 43Z'
        fill={isGradient ? 'url(#logo_gradient)' : 'currentColor'}
      />
      {isGradient && (
        <defs>
          <linearGradient
            id='logo_gradient'
            x1='5.02674'
            y1='3.95171'
            x2='32.2946'
            y2='30.2445'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='var(--color-stats-purple-start)' />
            <stop offset='1' stopColor='var(--color-stats-purple-end)' />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
};

type LogoProps = Readonly<{
  className?: string;
}>;

export const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      width='43'
      height='43'
      viewBox='0 0 43 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden='true'
    >
      <path
        d='M21.5 43C20.8775 22.6313 20.3687 22.1257 0 21.5C20.3687 20.8775 20.8744 20.3687 21.5 0C22.1224 20.3687 22.6313 20.8744 43 21.5C22.6313 22.1257 22.1257 22.6251 21.5 43Z'
        fill='currentColor'
      />
    </svg>
  );
};

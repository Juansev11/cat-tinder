export const Skip = ({
  width = '32px',
  height = '32px',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="#FF9500"
    {...props}
  >
    <path d="m12 36 17-12-17-12v24zm20-24v24h4V12h-4z" />
    <path d="M0 0h48v48H0z" fill="none" />
  </svg>
);

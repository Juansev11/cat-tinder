export const Dislike = ({
  width = '20px',
  height = '19px',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} fill="#8E8E93" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.513 0a1.35 1.35 0 0 0-.941 2.32L7.72 9.47.572 16.623a1.351 1.351 0 1 0 1.91 1.91l7.148-7.15 7.149 7.15a1.35 1.35 0 1 0 1.91-1.91l-7.15-7.151 7.15-7.151a1.351 1.351 0 1 0-1.91-1.91l-7.15 7.15L2.482.41A1.35 1.35 0 0 0 1.513 0Z"
      fill="#8E8E93"
    />
    <defs>
      <linearGradient id="a" x1=".156" y1="0" x2=".156" y2="18.947" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8E8E93" />
        <stop offset="1" stopColor="#AEAEB2" />
      </linearGradient>
    </defs>
  </svg>
);

export const Like = ({
  width = '20px',
  height = '20px',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.0588.0526276c-3.154 0-4.9026 2.3404624-4.9026 2.3404624S9.40761.0526276 6.25358.0526276C2.94376.0526276.261475 2.80966.261475 6.21173c0 5.24647 7.905225 11.71237 10.247625 13.51307.3856.2968.9075.2968 1.2932 0 2.3434-1.8007 10.2486-8.2666 10.2486-13.51307 0-3.40207-2.6822-6.1591024-5.9921-6.1591024Z"
      fill="#FF375F"
    />
    <defs>
      <linearGradient
        id="a"
        x1=".261475"
        y1=".0526276"
        x2=".261475"
        y2="19.9474"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF375F" />
        <stop offset="1" stopColor="#FF453A" />
      </linearGradient>
    </defs>
  </svg>
);

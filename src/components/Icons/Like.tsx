export const Like = ({
  width = '20px',
  height = '23px',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16.059.053c-3.154 0-4.903 2.34-4.903 2.34S9.408.053 6.254.053C2.944.053.26 2.81.26 6.212c0 5.246 7.906 11.712 10.248 13.513a1.05 1.05 0 0 0 1.293 0c2.344-1.8 10.249-8.267 10.249-13.513 0-3.402-2.682-6.16-5.992-6.16Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1=".261"
        y1=".053"
        x2=".261"
        y2="19.947"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF375F" />
        <stop offset="1" stopColor="#FF453A" />
      </linearGradient>
    </defs>
  </svg>
);

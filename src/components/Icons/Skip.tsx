export const Skip = ({
  width = '21px',
  height = '21px',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.333.708a.491.491 0 0 0-.346.836l1.907 1.907C2.034 5.232.864 7.728.864 10.5c0 5.396 4.396 9.792 9.792 9.792 5.397 0 9.792-4.396 9.792-9.792 0-5.029-3.812-9.187-8.705-9.729a.98.98 0 0 0-.215 1.947A7.822 7.822 0 0 1 18.49 10.5a7.818 7.818 0 0 1-7.834 7.833A7.818 7.818 0 0 1 2.823 10.5c0-2.242.947-4.245 2.452-5.668L6.883 6.44a.49.49 0 0 0 .836-.346V1.687a.98.98 0 0 0-.98-.979H2.334Z"
      fill="#FF9500"
    />
    <defs>
      <linearGradient
        id="a"
        x1=".865"
        y1=".708"
        x2=".865"
        y2="20.292"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9500" />
        <stop offset="1" stopColor="#FF9F0A" />
      </linearGradient>
    </defs>
  </svg>
);

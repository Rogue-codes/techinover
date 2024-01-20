export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  next: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      {...props}
    >
      <path
        d="M15.75 7.27435L0.75 7.27435"
        stroke="#1A1D1F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.7002 13.2988L15.7502 7.27476L9.7002 1.24976"
        stroke="#1A1D1F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  dot: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="5"
      viewBox="0 0 4 5"
      fill="none"
      {...props}
    >
      <circle cx="2" cy="2.5" r="2" fill="#6F767E" />
    </svg>
  ),
};

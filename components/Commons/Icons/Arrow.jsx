const Arrow = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path id="prefix__a" d="M7 7L.5.701 1.223 0 7 5.598 12.777 0l.723.701z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <text
        fontFamily="NunitoSans-Bold, Nunito Sans"
        fontSize={14}
        fontWeight="bold"
        fill="#151515"
        transform="translate(-448 -4603)"
      >
        <tspan x={40} y={4617}>
          Bathroom
        </tspan>
      </text>
      <use
        fill="#151515"
        transform="matrix(1 0 0 -1 5 15)"
        xlinkHref="#prefix__a"
      />
    </g>
  </svg>
);

export default Arrow;

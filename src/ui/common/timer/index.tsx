export const Timer = () => {
  const progress = 50;

  const circumference = 2 * 3.14 * 100;
  const offset = circumference * ((100 - progress) / 100);

  return (
    <svg className="w-full h-full overflow-visible">
      <g className="text-themed-grey-500">
        <circle
          r="80"
          cy="50%"
          cx="50%"
          strokeWidth={10}
          strokeDasharray={0}
          strokeDashoffset={100}
          stroke="currentColor"
          fill="none"
        />
      </g>
      <g className="text-white">
        <circle
          r="80"
          cy="50%"
          cx="50%"
          strokeWidth={10}
          strokeDasharray={circumference + 'px'}
          strokeDashoffset={offset + 'px'}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
        />
      </g>
    </svg>
  );
};

import {useIsomorphicLayoutEffect} from '@/hooks/common/use-isomorphic-layout-effect';
import {useResizeObserver} from '@/hooks/common/use-resize-observer';
import {useCurve} from '@/hooks/use-curve';
import {useRef, useState} from 'react';

type LineChartProps = {
  data: [number, number][];
};
export const LineChart = ({data}: LineChartProps) => {
  const [dimensions, setDimensions] = useState<[number, number]>([0, 0]);

  const path = useCurve(data, dimensions);

  const ref = useRef<HTMLDivElement>(null);
  useResizeObserver({
    ref,
    onResize: ({width, height}) => setDimensions([width!, height!]),
  });

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      setDimensions([ref.current.offsetWidth, ref.current.offsetHeight]);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-full relative flex flex-col justify-between"
    >
      <svg className="w-full h-full overflow-visible absolute text-themed-black-primary">
        <path
          d={path}
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
        />
      </svg>
      {data.map((_, i) => {
        return (
          <span
            key={i}
            className="border-dashed border border-themed-grey-200"
          />
        );
      })}
    </div>
  );
};

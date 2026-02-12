"use client";

import { useMemo, useState } from "react";

type PnlPoint = {
  time: string;
  value: number;
};

const chartData: PnlPoint[] = [
  { time: "08:00", value: 42 },
  { time: "08:30", value: 37 },
  { time: "09:00", value: 28 },
  { time: "09:30", value: 12 },
  { time: "10:00", value: -4 },
  { time: "10:30", value: -18 },
  { time: "11:00", value: -12 },
  { time: "11:30", value: -26 },
  { time: "12:00", value: -39 },
  { time: "12:30", value: -52 },
  { time: "13:00", value: -63 },
  { time: "13:30", value: -47 },
  { time: "14:00", value: -58 },
  { time: "14:30", value: -73 },
  { time: "15:00", value: -91 },
  { time: "15:30", value: -109 }
];

const WIDTH = 800;
const HEIGHT = 240;
const PADDING_X = 0;
const PADDING_Y = 16;

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

export function RealizedPnlChart() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const { points, minValue, maxValue, zeroY } = useMemo(() => {
    const values = chartData.map((point) => point.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const spread = max - min || 1;
    const xSpan = WIDTH - PADDING_X * 2;
    const ySpan = HEIGHT - PADDING_Y * 2;

    const mapped = chartData.map((point, index) => {
      const x = PADDING_X + (index / (chartData.length - 1)) * xSpan;
      const y = PADDING_Y + ((max - point.value) / spread) * ySpan;
      return { ...point, x, y };
    });

    const baseline = PADDING_Y + ((max - 0) / spread) * ySpan;
    return {
      points: mapped,
      minValue: min,
      maxValue: max,
      zeroY: clamp(baseline, PADDING_Y, HEIGHT - PADDING_Y)
    };
  }, []);

  const { positiveLinePaths, negativeLinePaths, positiveAreaPaths, negativeAreaPaths } = useMemo(() => {
    const posLines: string[] = [];
    const negLines: string[] = [];
    const posAreas: string[] = [];
    const negAreas: string[] = [];

    for (let i = 0; i < points.length - 1; i += 1) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const v1 = p1.value;
      const v2 = p2.value;
      const p1Positive = v1 >= 0;
      const p2Positive = v2 >= 0;

      if (p1Positive === p2Positive) {
        if (p1Positive) {
          posLines.push(`M${p1.x} ${p1.y} L${p2.x} ${p2.y}`);
          posAreas.push(`M${p1.x} ${p1.y} L${p2.x} ${p2.y} L${p2.x} ${zeroY} L${p1.x} ${zeroY} Z`);
        } else {
          negLines.push(`M${p1.x} ${p1.y} L${p2.x} ${p2.y}`);
          negAreas.push(`M${p1.x} ${p1.y} L${p2.x} ${p2.y} L${p2.x} ${zeroY} L${p1.x} ${zeroY} Z`);
        }
        continue;
      }

      const t = (0 - v1) / (v2 - v1);
      const crossX = p1.x + (p2.x - p1.x) * t;
      const crossY = zeroY;

      if (p1Positive) {
        posLines.push(`M${p1.x} ${p1.y} L${crossX} ${crossY}`);
        posAreas.push(`M${p1.x} ${p1.y} L${crossX} ${crossY} L${crossX} ${zeroY} L${p1.x} ${zeroY} Z`);
        negLines.push(`M${crossX} ${crossY} L${p2.x} ${p2.y}`);
        negAreas.push(`M${crossX} ${crossY} L${p2.x} ${p2.y} L${p2.x} ${zeroY} L${crossX} ${zeroY} Z`);
      } else {
        negLines.push(`M${p1.x} ${p1.y} L${crossX} ${crossY}`);
        negAreas.push(`M${p1.x} ${p1.y} L${crossX} ${crossY} L${crossX} ${zeroY} L${p1.x} ${zeroY} Z`);
        posLines.push(`M${crossX} ${crossY} L${p2.x} ${p2.y}`);
        posAreas.push(`M${crossX} ${crossY} L${p2.x} ${p2.y} L${p2.x} ${zeroY} L${crossX} ${zeroY} Z`);
      }
    }

    return {
      positiveLinePaths: posLines,
      negativeLinePaths: negLines,
      positiveAreaPaths: posAreas,
      negativeAreaPaths: negAreas
    };
  }, [points, zeroY]);

  const activeIndex = hoverIndex ?? points.length - 1;
  const activePoint = points[activeIndex];
  const isDown = activePoint.value < 0;
  const pointColor = isDown ? "#ef4444" : "#22c55e";
  const guideColor = isDown ? "#fca5a5" : "#86efac";
  const minTooltipX = 10;
  const tooltipWidth = 200;
  const tooltipHeight = 88;
  const maxTooltipX = WIDTH - tooltipWidth - 10;
  const tooltipX = clamp(activePoint.x - tooltipWidth / 2, minTooltipX, maxTooltipX);
  const tooltipY = Math.max(activePoint.y - (tooltipHeight + 14), 10);

  return (
    <div className="relative h-[220px] rounded-lg border border-white/10 bg-black">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        onMouseLeave={() => setHoverIndex(null)}
        onMouseMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const relativeX = (event.clientX - bounds.left) / bounds.width;
          const nearest = Math.round(relativeX * (points.length - 1));
          setHoverIndex(clamp(nearest, 0, points.length - 1));
        }}
      >
        <defs>
          <linearGradient id="pnlFillPositive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pnlFillNegative" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
        </defs>

        <line x1={PADDING_X} y1={zeroY} x2={WIDTH - PADDING_X} y2={zeroY} stroke="#ffffff14" />
        {negativeAreaPaths.map((path) => (
          <path key={`neg-area-${path}`} d={path} fill="url(#pnlFillNegative)" />
        ))}
        {positiveAreaPaths.map((path) => (
          <path key={`pos-area-${path}`} d={path} fill="url(#pnlFillPositive)" />
        ))}
        {negativeLinePaths.map((path) => (
          <path
            key={`neg-line-${path}`}
            d={path}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {positiveLinePaths.map((path) => (
          <path
            key={`pos-line-${path}`}
            d={path}
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        <line x1={activePoint.x} y1={PADDING_Y} x2={activePoint.x} y2={HEIGHT - PADDING_Y} stroke={guideColor} strokeOpacity="0.35" />
        <circle cx={activePoint.x} cy={activePoint.y} r="5" fill={pointColor} stroke="#0b0b0b" strokeWidth="2" />
        {points.map((point, index) => (
          <circle
            key={point.time}
            cx={point.x}
            cy={point.y}
            r="12"
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setHoverIndex(index)}
          />
        ))}

        <g transform={`translate(${tooltipX}, ${tooltipY})`}>
          <rect width={tooltipWidth} height={tooltipHeight} rx="10" fill="#05070f" stroke="#ffffff26" />
          <text x="14" y="32" fill="#cbd5e1" fontSize="13">
            {activePoint.time}
          </text>
          <text x="14" y="62" fill={activePoint.value < 0 ? "#fb7185" : "#34d399"} fontSize="18" fontWeight="700">
            {currency.format(activePoint.value)}
          </text>
        </g>
      </svg>

      <div className="pointer-events-none absolute bottom-2 right-3 text-[10px] text-slate-400">
        Range {currency.format(minValue)} to {currency.format(maxValue)}
      </div>
    </div>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

export type StackLayer = "ai" | "data" | "erp";

type Point = [number, number];

const CX = 196;
const W = 150;
const H = 86;

const LAYERS: { key: StackLayer; label: string; cy: number }[] = [
  { key: "ai", label: "AI", cy: 118 },
  { key: "data", label: "Data", cy: 210 },
  { key: "erp", label: "ERP", cy: 302 },
];

const lerp = (a: Point, b: Point, t: number): Point => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

function corners(cy: number) {
  const T: Point = [CX, cy - H];
  const R: Point = [CX + W, cy];
  const B: Point = [CX, cy + H];
  const L: Point = [CX - W, cy];
  return { T, R, B, L };
}

/**
 * Decorative isometric diagram of the AI / Data / ERP stack.
 * `highlight` lights up the layer a page is about.
 */
export function StackDiagram({ highlight, className }: { highlight?: StackLayer | null; className?: string }) {
  return (
    <svg
      viewBox="0 0 480 420"
      className={cn("h-auto w-full max-w-[30rem]", className)}
      role="img"
      aria-label="AI, Data and ERP working as one connected stack"
    >
      <defs>
        <radialGradient id="sd-glow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sd-plane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A2B45" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0B1222" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="sd-plane-hi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0B1A2E" stopOpacity="0.95" />
        </linearGradient>
        <filter id="sd-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <ellipse cx={CX} cy="210" rx="210" ry="190" fill="url(#sd-glow)" />

      {/* Vertical connectors between layers */}
      {LAYERS.slice(0, -1).map((layer, i) => {
        const a = corners(layer.cy);
        const b = corners(LAYERS[i + 1].cy);
        return (
          <g key={`c-${layer.key}`} stroke="#94B2D6" strokeOpacity="0.28" strokeDasharray="3 5">
            <line x1={a.L[0]} y1={a.L[1]} x2={b.L[0]} y2={b.L[1]} />
            <line x1={a.R[0]} y1={a.R[1]} x2={b.R[0]} y2={b.R[1]} />
            <line x1={a.B[0]} y1={a.B[1]} x2={b.B[0]} y2={b.B[1]} />
          </g>
        );
      })}

      {/* Planes, bottom first so upper layers overlap */}
      {[...LAYERS].reverse().map((layer) => {
        const { T, R, B, L } = corners(layer.cy);
        const active = highlight === layer.key;
        const points = [T, R, B, L].map((p) => p.join(",")).join(" ");
        const grid = [0.25, 0.5, 0.75].flatMap((t) => [
          [lerp(T, L, t), lerp(R, B, t)],
          [lerp(T, R, t), lerp(L, B, t)],
        ]);
        const nodes: Point[] = [lerp(lerp(T, L, 0.5), lerp(R, B, 0.5), 0.5), lerp(lerp(T, L, 0.25), lerp(R, B, 0.25), 0.75), lerp(lerp(T, L, 0.75), lerp(R, B, 0.75), 0.25)];
        return (
          <g key={layer.key}>
            {active && <polygon points={points} fill="#00E5FF" opacity="0.35" filter="url(#sd-blur)" />}
            <polygon
              points={points}
              fill={active ? "url(#sd-plane-hi)" : "url(#sd-plane)"}
              stroke={active ? "#00E5FF" : "#94B2D6"}
              strokeOpacity={active ? 0.9 : 0.3}
              strokeWidth={active ? 1.4 : 1}
            />
            <g stroke={active ? "#00E5FF" : "#94B2D6"} strokeOpacity={active ? 0.3 : 0.12}>
              {grid.map(([p1, p2], i) => (
                <line key={i} x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} />
              ))}
            </g>
            {nodes.map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i === 0 ? 3.5 : 2.5}
                fill={active ? "#00E5FF" : "#94B2D6"}
                fillOpacity={active ? 1 : 0.5}
                className={active && i === 0 ? "motion-safe:animate-pulse" : undefined}
              />
            ))}

            {/* Label */}
            <line x1={R[0] + 6} y1={R[1]} x2={R[0] + 34} y2={R[1]} stroke={active ? "#00E5FF" : "#94B2D6"} strokeOpacity={active ? 0.8 : 0.35} />
            <circle cx={R[0] + 34} cy={R[1]} r="2.5" fill={active ? "#00E5FF" : "#94B2D6"} fillOpacity={active ? 1 : 0.5} />
            <text
              x={R[0] + 44}
              y={R[1] + 5}
              className="font-display"
              fontSize="15"
              fontWeight={600}
              fill={active ? "#F3F6FA" : "#B4C2D3"}
            >
              {layer.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

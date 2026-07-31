/**
 * Fixed, purely decorative AI/robotics backdrop.
 * All motion is CSS transform/opacity on a handful of nodes — no canvas, no JS loop.
 */
const NODES = [
  [12, 22],
  [30, 12],
  [46, 30],
  [64, 16],
  [82, 28],
  [22, 52],
  [40, 66],
  [58, 54],
  [76, 70],
  [90, 50],
] as const;

const EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [2, 7],
  [6, 7],
  [7, 8],
  [4, 9],
  [8, 9],
  [1, 7],
];

export function AiBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* perspective circuit grid */}
      <div className="ai-grid absolute inset-x-0 bottom-0 h-[60vh]" />

      {/* neural network mesh */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g stroke="color-mix(in oklab, var(--primary) 40%, transparent)" strokeWidth="0.12">
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a][0]}
              y1={NODES[a][1]}
              x2={NODES[b][0]}
              y2={NODES[b][1]}
              className="ai-edge"
              style={{ animationDelay: `${i * 0.55}s` }}
            />
          ))}
        </g>
        <g>
          {NODES.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="0.45"
              fill="color-mix(in oklab, var(--primary) 80%, transparent)"
              className="ai-node"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </g>
      </svg>

      {/* data-flow scan lines */}
      <span className="ai-flow ai-flow-1" />
      <span className="ai-flow ai-flow-2" />
      <span className="ai-flow ai-flow-3" />

      {/* floating geometry + particles */}
      <span className="ai-shape ai-shape-1" />
      <span className="ai-shape ai-shape-2" />
      <span className="ai-dot ai-dot-1" />
      <span className="ai-dot ai-dot-2" />
      <span className="ai-dot ai-dot-3" />
      <span className="ai-dot ai-dot-4" />
      <span className="ai-dot ai-dot-5" />
    </div>
  );
}

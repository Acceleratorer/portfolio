"use client";

import { motion } from "framer-motion";

const loop = {
  repeat: Infinity,
  ease: "easeInOut",
} as const;

export function IsometricBlocks() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[74%] min-w-[390px] overflow-hidden">
      <svg viewBox="0 0 520 260" className="h-full w-full">
        <defs>
          <linearGradient id="accelraCubeFill" x1="0" x2="1">
            <stop offset="0%" stopColor="rgb(var(--color-brand-mint))" stopOpacity="0.22" />
            <stop offset="100%" stopColor="rgb(var(--color-brand-ochre))" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <motion.path
          d="M260 54 L260 210 M130 132 L390 132 M190 96 L330 168 M330 96 L190 168"
          fill="none"
          stroke="rgb(var(--color-brand-mint))"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ strokeDashoffset: [0, -80] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        />

        <motion.g
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ duration: 4.6, ...loop }}
        >
          <Cube x={184} y={58} />
          <Cube x={96} y={118} delay={0.16} />
          <Cube x={272} y={116} delay={0.32} />
          <Cube x={184} y={168} delay={0.48} />
        </motion.g>
      </svg>
    </div>
  );
}

function Cube({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: [1, 1.045, 1] }}
      transition={{ duration: 3.4, delay, ...loop }}
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
    >
      <g transform={`translate(${x}, ${y})`}>
        <polygon
          points="0,34 76,0 152,34 76,70"
          fill="url(#accelraCubeFill)"
          stroke="rgb(var(--color-brand-mint))"
          strokeWidth="1.4"
        />
        <polygon
          points="0,34 76,70 76,136 0,100"
          fill="rgb(var(--color-brand-mint))"
          fillOpacity="0.15"
          stroke="rgb(var(--color-brand-mint))"
          strokeWidth="1"
        />
        <polygon
          points="152,34 76,70 76,136 152,100"
          fill="rgb(var(--color-brand-ochre))"
          fillOpacity="0.22"
          stroke="rgb(var(--color-brand-mint))"
          strokeWidth="1"
        />
      </g>
    </motion.g>
  );
}

export function LangCacheStreams() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-[-8px] h-[235px] w-full overflow-hidden">
      <svg viewBox="0 0 520 250" className="h-full w-full">
        <defs>
          <linearGradient id="accelraPurpleStream" x1="0" x2="1">
            <stop offset="0%" stopColor="rgb(var(--color-brand-lavender))" />
            <stop offset="100%" stopColor="rgb(var(--color-brand-coral))" stopOpacity="0.76" />
          </linearGradient>
        </defs>

        {[0, 1, 2].map((item) => (
          <motion.g
            key={item}
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: [0, 46, 0], opacity: [0.32, 0.95, 0.32] }}
            transition={{ duration: 4.8, delay: item * 0.34, ...loop }}
          >
            <rect
              x={70 + item * 46}
              y={132 - item * 44}
              width="270"
              height="54"
              rx="27"
              fill="url(#accelraPurpleStream)"
              opacity="0.72"
              transform="rotate(28 168 142)"
            />
            <rect
              x={70 + item * 46}
              y={132 - item * 44}
              width="270"
              height="54"
              rx="27"
              fill="none"
              stroke="rgb(var(--color-brand-lavender))"
              strokeOpacity="0.62"
              transform="rotate(28 168 142)"
            />
          </motion.g>
        ))}

        <motion.path
          d="M54 86 C150 20, 264 218, 462 82"
          fill="none"
          stroke="rgb(var(--color-brand-lavender))"
          strokeOpacity="0.38"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ strokeDashoffset: [0, -90] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "linear" }}
        />

        {[78, 190, 312, 430].map((x, index) => (
          <motion.circle
            key={x}
            cx={x}
            cy={78 + (index % 2) * 72}
            r="5"
            fill="rgb(var(--color-brand-lavender))"
            animate={{ scale: [0.72, 1.35, 0.72], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, delay: index * 0.24, ...loop }}
          />
        ))}
      </svg>
    </div>
  );
}

export function CachingPanels() {
  const panels = [
    { x: 84, y: 88, delay: 0 },
    { x: 220, y: 52, delay: 0.22 },
    { x: 204, y: 146, delay: 0.44 },
    { x: 348, y: 116, delay: 0.66 },
  ];

  return (
    <div className="pointer-events-none absolute bottom-0 right-[-18px] h-[245px] w-full overflow-hidden">
      <svg viewBox="0 0 520 250" className="h-full w-full">
        <motion.circle
          cx="345"
          cy="130"
          r="92"
          fill="none"
          stroke="rgb(var(--color-brand-teal))"
          strokeOpacity="0.35"
          strokeDasharray="4 7"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "345px 130px" }}
        />

        {panels.map((panel) => (
          <motion.g
            key={`${panel.x}-${panel.y}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ duration: 3.8, delay: panel.delay, ...loop }}
          >
            <rect
              x={panel.x}
              y={panel.y}
              width="108"
              height="74"
              fill="rgb(var(--color-surface-dark-elevated))"
              stroke="rgb(var(--color-brand-teal))"
              strokeWidth="1.5"
            />
            <rect
              x={panel.x + 12}
              y={panel.y + 12}
              width="84"
              height="50"
              fill="rgb(var(--color-brand-teal))"
              opacity="0.78"
            />
            <circle cx={panel.x + 8} cy={panel.y + 8} r="4" fill="rgb(var(--color-surface-dark))" stroke="rgb(var(--color-brand-teal))" />
            <circle cx={panel.x + 100} cy={panel.y + 66} r="4" fill="rgb(var(--color-surface-dark))" stroke="rgb(var(--color-brand-teal))" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export function InsightBlocks() {
  return (
    <div className="pointer-events-none absolute bottom-[-12px] left-0 h-[245px] w-full overflow-hidden">
      <svg viewBox="0 0 520 250" className="h-full w-full">
        {[64, 118, 172, 248, 336].map((x, index) => (
          <motion.g
            key={x}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{ duration: 4, delay: index * 0.18, ...loop }}
          >
            <polygon
              points={`${x},186 ${x + 42},162 ${x + 84},186 ${x + 42},210`}
              fill="rgb(var(--color-brand-lavender))"
              fillOpacity="0.9"
              stroke="rgb(var(--color-brand-lavender))"
            />
            <polygon
              points={`${x},186 ${x + 42},210 ${x + 42},244 ${x},220`}
              fill="rgb(var(--color-brand-lavender))"
              fillOpacity="0.38"
              stroke="rgb(var(--color-brand-lavender))"
            />
            <polygon
              points={`${x + 84},186 ${x + 42},210 ${x + 42},244 ${x + 84},220`}
              fill="rgb(var(--color-brand-coral))"
              fillOpacity="0.35"
              stroke="rgb(var(--color-brand-lavender))"
            />
          </motion.g>
        ))}

        <motion.path
          d="M128 84 L128 166 M248 68 L248 164 M365 92 L365 166"
          stroke="rgb(var(--color-brand-lavender))"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ strokeDashoffset: [0, -70] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

export function FlexPyramid() {
  return (
    <div className="pointer-events-none absolute bottom-[-2px] right-[-18px] h-[250px] w-full overflow-hidden">
      <svg viewBox="0 0 520 260" className="h-full w-full">
        {[0, 1, 2, 3].map((level) => (
          <motion.polygon
            key={level}
            points={`${54 + level * 44},${228 - level * 42} 260,${126 - level * 42} ${466 - level * 44},${228 - level * 42} 260,${254 - level * 42}`}
            fill="rgb(var(--color-brand-mint))"
            fillOpacity={0.08 + level * 0.04}
            stroke="rgb(var(--color-brand-mint))"
            strokeOpacity="0.72"
            animate={{ opacity: [0.42, 1, 0.42] }}
            transition={{ duration: 4.2, delay: level * 0.22, ...loop }}
          />
        ))}

        {[
          [235, 58],
          [136, 174],
          [218, 154],
          [348, 178],
          [404, 138],
        ].map(([x, y], index) => (
          <motion.rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="34"
            height="34"
            fill="rgb(var(--color-brand-mint))"
            stroke="rgb(var(--color-brand-ochre))"
            strokeWidth="1.2"
            animate={{ y: [y, y - 12, y], scale: [1, 1.08, 1] }}
            transition={{ duration: 3.4, delay: index * 0.18, ...loop }}
          />
        ))}
      </svg>
    </div>
  );
}

export function SearchLayers() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-0 h-[245px] w-full overflow-hidden">
      <svg viewBox="0 0 520 250" className="h-full w-full">
        {[0, 1, 2].map((level) => (
          <motion.polygon
            key={level}
            points={`100,${114 + level * 28} 260,${32 + level * 28} 420,${114 + level * 28} 260,${196 + level * 28}`}
            fill="rgb(var(--color-brand-coral))"
            fillOpacity="0.05"
            stroke="rgb(var(--color-brand-coral))"
            strokeOpacity="0.9"
            animate={{ x: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4.1, delay: level * 0.2, ...loop }}
          />
        ))}
        <motion.circle
          cx="260"
          cy="118"
          r="50"
          fill="none"
          stroke="rgb(var(--color-brand-coral))"
          strokeOpacity="0.8"
          strokeDasharray="5 9"
          animate={{ strokeDashoffset: [0, -84], scale: [0.96, 1.03, 0.96] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        />
        {[220, 260, 300].map((x, index) => (
          <motion.circle
            key={x}
            cx={x}
            cy={116 + Math.abs(index - 1) * 28}
            r={index === 1 ? 18 : 22}
            fill="rgb(var(--color-brand-coral))"
            animate={{ opacity: [0.55, 1, 0.55], scale: [0.88, 1.12, 0.88] }}
            transition={{ duration: 2.8, delay: index * 0.22, ...loop }}
          />
        ))}
      </svg>
    </div>
  );
}

export function DataBuilding() {
  return (
    <div className="pointer-events-none absolute bottom-[-4px] right-[-8px] h-[250px] w-full overflow-hidden">
      <svg viewBox="0 0 520 260" className="h-full w-full">
        <defs>
          <clipPath id="dataBuildingLeftFace">
            <polygon points="174,88 286,150 286,246 174,184" />
          </clipPath>
          <clipPath id="dataBuildingRightFace">
            <polygon points="286,150 420,78 420,176 286,246" />
          </clipPath>
        </defs>

        <motion.g
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ duration: 4.4, ...loop }}
        >
          <polygon
            points="174,88 300,20 420,78 286,150"
            fill="rgb(var(--color-brand-teal))"
            fillOpacity="0.18"
            stroke="rgb(var(--color-brand-teal))"
            strokeWidth="1.4"
          />
          <polygon
            points="174,88 286,150 286,246 174,184"
            fill="rgb(var(--color-brand-teal))"
            fillOpacity="0.22"
            stroke="rgb(var(--color-brand-teal))"
            strokeWidth="1.4"
          />
          <polygon
            points="286,150 420,78 420,176 286,246"
            fill="rgb(var(--color-surface-dark-elevated))"
            stroke="rgb(var(--color-brand-teal))"
            strokeWidth="1.4"
          />

          <g clipPath="url(#dataBuildingLeftFace)">
            {Array.from({ length: 36 }).map((_, index) => {
              const col = index % 6;
              const row = Math.floor(index / 6);
              const x = 194 + col * 15 + row * 1.8;
              const y = 116 + row * 17 + col * 8.5;
              return (
                <motion.rect
                  key={index}
                  x={x}
                  y={y}
                  width="10"
                  height="12"
                  fill="rgb(var(--color-brand-teal))"
                  opacity={index % 5 === 0 ? 0.96 : 0.46}
                  animate={{
                    opacity:
                      index % 5 === 0 ? [0.46, 1, 0.46] : [0.24, 0.64, 0.24],
                  }}
                  transition={{ duration: 2.6, delay: index * 0.035, ...loop }}
                />
              );
            })}
          </g>

          <g clipPath="url(#dataBuildingRightFace)" opacity="0.22">
            {Array.from({ length: 18 }).map((_, index) => {
              const col = index % 3;
              const row = Math.floor(index / 3);
              return (
                <motion.rect
                  key={index}
                  x={315 + col * 24 - row * 2.5}
                  y={120 + row * 18 - col * 11}
                  width="14"
                  height="11"
                  fill="rgb(var(--color-brand-teal))"
                  animate={{ opacity: [0.18, 0.52, 0.18] }}
                  transition={{ duration: 3.2, delay: index * 0.06, ...loop }}
                />
              );
            })}
          </g>

        </motion.g>

        {[94, 446, 386].map((x, index) => (
          <motion.rect
            key={x}
            x={x}
            y={118 + index * 36}
            width="22"
            height="22"
            fill="rgb(var(--color-brand-teal))"
            fillOpacity="0.46"
            stroke="rgb(var(--color-brand-teal))"
            animate={{ y: [118 + index * 36, 106 + index * 36, 118 + index * 36], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 3.2, delay: index * 0.28, ...loop }}
          />
        ))}
      </svg>
    </div>
  );
}

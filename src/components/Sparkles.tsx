import { useEffect, useMemo, useRef, useState } from "react";

type Sparkle = {
  id: number;
  x: number;        // px from left
  y: number;        // px from top
  size: number;     // px
  hue: number;      // HSL hue
  rotate: number;   // deg
  bornAt: number;   // ms
  life: number;     // ms
};

type SparklesProps = {
  /** If provided, sparkles are constrained to this element. Otherwise they cover the page. */
  containerRef?: React.RefObject<HTMLElement>;
  /** Average number of sparkles per second (float allowed). Default: 2 */
  rate?: number;
  /** Min/Max sparkle size in px. Default: [6, 14] */
  sizeRange?: [number, number];
  /** Sparkle lifespan in ms. Default: 1200 */
  life?: number;
  /** Optional: fix z-index. Default: 40 (above content, below modals you might use) */
  zIndex?: number;
  /** Optional className for the wrapper */
  className?: string;
  /** Limit hue range for the colors (H in HSL). Default: [20, 50] (orangey) */
  hueRange?: [number, number];
};

export default function Sparkles({
  containerRef,
  rate = 2,
  sizeRange = [6, 14],
  life = 1200,
  zIndex = 40,
  className,
  hueRange = [20, 50],
}: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const idRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);

  const prefersReducedMotion = usePrefersReducedMotion();

  // Compute bounds for where sparkles can spawn
  const bounds = useBounds(containerRef);

  // Spawn a sparkle
  const addSparkle = () => {
    setSparkles((prev) => {
      const now = performance.now();
      const s: Sparkle = {
        id: ++idRef.current,
        x: rand(bounds.left, bounds.right),
        y: rand(bounds.top, bounds.bottom),
        size: rand(sizeRange[0], sizeRange[1]),
        hue: rand(hueRange[0], hueRange[1]),
        rotate: rand(0, 360),
        bornAt: now,
        life: prefersReducedMotion ? 1 : life,
      };
      return [...prev, s];
    });
  };

  // Remove expired sparkles on each frame
  useEffect(() => {
    if (prefersReducedMotion) return;

    const tick = () => {
      const now = performance.now();
      setSparkles((prev) => prev.filter((s) => now - s.bornAt < s.life));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  // Random spawn scheduling (Poisson-like by jittering delay)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const scheduleNext = () => {
      // average delay based on "rate" sparkles per second
      const avg = 1000 / Math.max(rate, 0.001);
      // jitter: between 50% and 150% of avg
      const delay = rand(avg * 0.5, avg * 1.5);
      timerRef.current = window.setTimeout(() => {
        addSparkle();
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [rate, life, bounds, prefersReducedMotion]);

  // If reduced motion, render nothing (or render a few still sparkles)
  const stillSparkles = useMemo(() => {
    if (!prefersReducedMotion) return null;
    // Render a few subtle, static sparkles
    return new Array(8).fill(0).map((_, i) => ({
      id: i,
      x: rand(bounds.left, bounds.right),
      y: rand(bounds.top, bounds.bottom),
      size: rand(sizeRange[0], sizeRange[1]),
      hue: rand(hueRange[0], hueRange[1]),
      rotate: rand(0, 360),
      bornAt: 0,
      life: 0,
    })) as Sparkle[];
  }, [prefersReducedMotion, bounds, hueRange, sizeRange]);

  const wrapperStyle: React.CSSProperties = containerRef
    ? { position: "absolute", inset: 0, pointerEvents: "none", zIndex }
    : { position: "fixed", inset: 0, pointerEvents: "none", zIndex };

  return (
    <div
      aria-hidden
      className={className}
      style={wrapperStyle}
    >
      {(prefersReducedMotion ? stillSparkles ?? [] : sparkles).map((s) => (
        <Star
          key={s.id}
          x={s.x}
          y={s.y}
          size={s.size}
          hue={s.hue}
          rotate={s.rotate}
          life={prefersReducedMotion ? 0 : life}
        />
      ))}
    </div>
  );
}

/* ===== Helpers ===== */

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

function useBounds(containerRef?: React.RefObject<HTMLElement>) {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: typeof window !== "undefined" ? window.innerWidth : 0,
    bottom: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const compute = () => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBounds({
          left: rect.left,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
        });
      } else {
        setBounds({
          left: 0,
          top: 0,
          right: window.innerWidth,
          bottom: window.innerHeight,
        });
      }
    };
    compute();
    window.addEventListener("resize", compute);
    window.addEventListener("scroll", compute, { passive: true });
    return () => {
      window.removeEventListener("resize", compute);
      window.removeEventListener("scroll", compute);
    };
  }, [containerRef]);

  return bounds;
}

/* A tiny SVG star with Tailwind-powered animation (uses custom keyframes below) */
function Star({
  x,
  y,
  size,
  hue,
  rotate,
  life,
}: {
  x: number;
  y: number;
  size: number;
  hue: number;
  rotate: number;
  life: number;
}) {
  const style: React.CSSProperties = {
    position: "absolute",
    left: x,
    top: y,
    width: size,
    height: size,
    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
    color: `hsl(${hue} 90% 60%)`,
    willChange: "transform, opacity, filter",
  };

  // Use Tailwind's arbitrary animation value to pass duration
  const anim = life ? `animate-[sparkle-pop_${life}ms_ease-out]` : "";

  return (
    <svg
      viewBox="0 0 24 24"
      style={style}
      className={`drop-shadow-[0_0_4px_rgba(255,255,255,0.55)] ${anim}`}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l2.3 4.9L20 9.2l-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.7-2.3L12 2z" />
    </svg>
  );
}

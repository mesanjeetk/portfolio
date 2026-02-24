import { useEffect, useRef } from "react";

export const ScrollProgress = () => {
    const barRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const update = () => {
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight <= 0) return;

            const progress = window.scrollY / scrollHeight;
            const percent = progress * 100;

            if (barRef.current) {
                barRef.current.style.transform = `scaleX(${progress})`;
            }

            if (glowRef.current) {
                glowRef.current.style.left = `${percent}%`;
            }

            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        update();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[200] pointer-events-none">
            {/* Main Bar */}
            <div
                ref={barRef}
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 origin-left"
                style={{
                    transform: "scaleX(0)",
                    transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)"
                }}
            />

            {/* Glow Tip */}
            <div
                ref={glowRef}
                className="absolute top-0 h-full w-20 -translate-x-1/2 bg-gradient-to-r from-transparent to-accent blur-sm"
                style={{ left: "0%" }}
            />
        </div>
    );
};
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Loader = () => {
    const loaderRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const coreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!loaderRef.current || !ringRef.current || !coreRef.current) return;

        const tl = gsap.timeline({ repeat: -1 });

        // Outer ring rotation
        tl.to(ringRef.current, {
            rotate: 360,
            duration: 4,
            ease: "linear"
        }, 0);

        // Core pulse
        tl.to(coreRef.current, {
            scale: 1.15,
            duration: 1.2,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        }, 0);

    }, []);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[500] bg-[#0B0B0F] flex flex-col items-center justify-center overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>

            {/* Loader Core */}
            <div className="relative flex items-center justify-center">

                {/* Rotating Ring */}
                <div
                    ref={ringRef}
                    className="w-28 h-28 rounded-full border border-accent/30 relative"
                >
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
                </div>

                {/* Inner Core */}
                <div
                    ref={coreRef}
                    className="absolute w-14 h-14 bg-gradient-to-br from-accent to-indigo-500 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                ></div>
            </div>

            {/* Text */}
            <div className="mt-12 text-center space-y-3">
                <p className="text-xs font-bold tracking-[0.6em] text-white uppercase">
                    Initializing
                </p>
                <div className="w-40 h-[2px] bg-white/10 mx-auto overflow-hidden rounded-full">
                    <div className="h-full bg-accent animate-[loading_2s_ease-in-out_infinite] w-1/2"></div>
                </div>
                <p className="text-[10px] tracking-widest text-white/40 uppercase">
                    Preparing Experience
                </p>
            </div>

            {/* Custom keyframes */}
            <style>
                {`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(100%); }
                    100% { transform: translateX(200%); }
                }
                `}
            </style>
        </div>
    );
};
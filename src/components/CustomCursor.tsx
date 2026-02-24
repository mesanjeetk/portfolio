import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trail = trailRef.current;
        if (!cursor || !trail) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let posX = mouseX;
        let posY = mouseY;

        let trailX = mouseX;
        let trailY = mouseY;

        let velocityX = 0;
        let velocityY = 0;

        const setCursorX = gsap.quickSetter(cursor, "x", "px");
        const setCursorY = gsap.quickSetter(cursor, "y", "px");
        const setTrailX = gsap.quickSetter(trail, "x", "px");
        const setTrailY = gsap.quickSetter(trail, "y", "px");
        const setScale = gsap.quickSetter(cursor, "scale");

        const lerp = (start: number, end: number, amt: number) =>
            start + (end - start) * amt;

        let lastMouseX = mouseX;
        let lastMouseY = mouseY;
        let idleFrames = 0;

        const animate = () => {
            // Smooth interpolation
            posX = lerp(posX, mouseX, 0.2);
            posY = lerp(posY, mouseY, 0.2);

            trailX = lerp(trailX, mouseX, 0.08);
            trailY = lerp(trailY, mouseY, 0.08);

            velocityX = mouseX - posX;
            velocityY = mouseY - posY;

            const velocity = Math.min(
                Math.abs(velocityX) + Math.abs(velocityY),
                50
            );

            // Apply transforms
            setCursorX(posX);
            setCursorY(posY);
            setTrailX(trailX);
            setTrailY(trailY);

            setScale(1 + velocity / 300);

            // Idle check: if mouse hasn't moved and cursor reached position, stop loop
            if (Math.abs(mouseX - posX) < 0.1 && Math.abs(mouseY - posY) < 0.1 && mouseX === lastMouseX && mouseY === lastMouseY) {
                idleFrames++;
            } else {
                idleFrames = 0;
            }

            lastMouseX = mouseX;
            lastMouseY = mouseY;

            if (idleFrames < 60) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                rafRef.current = null;
            }
        };

        const rafRef = { current: null as number | null };
        rafRef.current = requestAnimationFrame(animate);

        const move = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!rafRef.current) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        // Magnetic hover effect
        const interactive = document.querySelectorAll("a, button, .cursor-pointer");

        const handleHover = (e: Event) => {
            const el = e.currentTarget as HTMLElement;
            const rect = el.getBoundingClientRect();

            mouseX = rect.left + rect.width / 2;
            mouseY = rect.top + rect.height / 2;

            gsap.to(cursor, { scale: 2, duration: 0.3 });
            gsap.to(trail, { scale: 1.5, duration: 0.3 });
        };

        const handleLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(trail, { scale: 1, duration: 0.3 });
        };

        interactive.forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleLeave);
        });

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            interactive.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-5 h-5 rounded-full bg-white mix-blend-difference pointer-events-none z-[10000] hidden md:block"
                style={{ transform: "translate(-50%, -50%)" }}
            />

            <div
                ref={trailRef}
                className="fixed top-0 left-0 w-40 h-40 rounded-full bg-accent/20 blur-3xl pointer-events-none z-[9999] hidden md:block"
                style={{ transform: "translate(-50%, -50%)" }}
            />
        </>
    );
}

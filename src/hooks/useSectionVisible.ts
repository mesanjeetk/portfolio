import { useEffect, useRef, useState } from "react";

export function useSectionVisible(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // stops observing after first trigger
        }
      },
      { threshold }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { sectionRef, isVisible };
}

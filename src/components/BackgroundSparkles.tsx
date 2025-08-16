import { Sparkles } from "lucide-react";

export const BackgroundSparkles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-orange-400 opacity-30 animate-sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 16 + 8}px`,
          }}
        />
      ))}
    </div>

  )
}
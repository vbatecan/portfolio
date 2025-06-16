"use client"

import { motion } from "framer-motion"

const shapes = [
  { type: "circle", size: 60, color: "from-blue-600 to-cyan-600", left: "27.8%", top: "40.4%", speed: 0.1 },
  { type: "triangle", size: 40, color: "from-purple-600 to-pink-600", left: "66.9%", top: "65.8%", speed: 0.2 },
  { type: "square", size: 35, color: "from-green-600 to-emerald-600", left: "12.4%", top: "24.8%", speed: 0.3 },
  { type: "hexagon", size: 50, color: "from-orange-600 to-red-600", left: "85.2%", top: "35.6%", speed: 0.4 },
  { type: "circle", size: 25, color: "from-indigo-600 to-blue-600", left: "45.7%", top: "75.3%", speed: 0.5 },
  { type: "triangle", size: 30, color: "from-pink-600 to-rose-600", left: "33.1%", top: "15.9%", speed: 0.6 },
  { type: "hexagon", size: 50, color: "from-orange-600 to-red-600", left: "55.2%", top: "12.6%", speed: 0.4 },
  { type: "square", size: 35, color: "from-green-600 to-emerald-600", left: "72.4%", top: "81.8%", speed: 0.3 },
]

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${shape.color} opacity-50`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            clipPath:
              shape.type === "triangle"
                ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                : shape.type === "hexagon"
                  ? "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                  : shape.type === "circle"
                    ? "circle(50%)"
                    : "none",
            borderRadius: shape.type === "square" ? "8px" : "0",
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + index * shape.speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

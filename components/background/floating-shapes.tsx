"use client"

import { motion } from "framer-motion"

const shapes = [
  { type: "circle", size: 60, color: "from-blue-700 to-cyan-700", left: "27.8%", top: "40.4%" },
  { type: "triangle", size: 40, color: "from-purple-700 to-pink-700", left: "66.9%", top: "65.8%" },
  { type: "square", size: 35, color: "from-green-700 to-emerald-700", left: "12.4%", top: "24.8%" },
  { type: "hexagon", size: 50, color: "from-orange-700 to-red-700", left: "85.2%", top: "35.6%" },
  { type: "circle", size: 25, color: "from-indigo-700 to-blue-700", left: "45.7%", top: "75.3%" },
  { type: "triangle", size: 30, color: "from-pink-700 to-rose-700", left: "33.1%", top: "15.9%" },
]

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${shape.color} opacity-80`}
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
            duration: 10 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

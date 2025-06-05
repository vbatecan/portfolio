"use client"

import { motion } from "framer-motion"

const shapes = [
  { type: "circle", size: 60, color: "from-blue-400 to-cyan-400" },
  { type: "triangle", size: 40, color: "from-purple-400 to-pink-400" },
  { type: "square", size: 35, color: "from-green-400 to-emerald-400" },
  { type: "hexagon", size: 50, color: "from-orange-400 to-red-400" },
  { type: "circle", size: 25, color: "from-indigo-400 to-blue-400" },
  { type: "triangle", size: 30, color: "from-pink-400 to-rose-400" },
]

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${shape.color} opacity-10`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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

import React from 'react';
import { motion } from "framer-motion";

const HeroBgAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 bg-gray-500 opacity-10 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.5, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            delay: index * 1,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

export default HeroBgAnimation
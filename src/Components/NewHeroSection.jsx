import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const NetworkMesh = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const emojis = ['💻', '🎨', '🔍', '📱', '🚀', '📊', '🌐', '📈', '🤖']
    const nodes = emojis.map((emoji, index) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      emoji,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        ctx.font = '24px Arial'
        ctx.fillText(node.emoji, node.x, node.y)
      })

      nodes.forEach((node, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x
          const dy = nodes[j].y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(79, 70, 229, ${1 - distance / 100})`
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
}

const BackgroundAnimation = () => {
  return (
    <svg className="absolute inset-0 w-full h-full -z-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        </filter>
      </defs>
      <g filter="url(#goo)">
        {[...Array(10)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r={Math.random() * 50 + 10}
            fill={`rgba(79, 70, 229, ${Math.random() * 0.3 + 0.1})`}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </g>
    </svg>
  )
}

export default function NewHeroSection() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [controls])

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <BackgroundAnimation />
      <NetworkMesh />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-bold leading-none mt-2 sm:text-5xl py-2 sm:px-8 px-2"
              animate={controls}
              custom={0}
            >
              Your Vision with
              <span className="text-indigo-600 ml-2">Byyte</span>
            </motion.h1>
            <motion.p
              className="px-8 mt-8 mb-12 text-lg"
              animate={controls}
              custom={1}
            >
              At Byyte Digital, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.
            </motion.p>
            <NavLink to={'contactus'} className="px-8">
              <motion.button 
                className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={controls}
                custom={2}
              >
                Contact Us →
              </motion.button>
            </NavLink>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 p-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4 overflow-visible">
              {['💻', '🎨', '🔍', '📱', '🚀', '📊', '🌐', '📈', '🤖'].map((emoji, index) => (
                <motion.div 
                  key={index}
                  className="bg-indigo-100 rounded-full w-24 h-24 flex items-center justify-center text-4xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12 bg-indigo-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Innovation serves as the driving force behind progress.
          </h2>
          <p className="text-gray-600">
            It empowers us to tackle challenges, discover untapped opportunities, and envision a future filled with possibilities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
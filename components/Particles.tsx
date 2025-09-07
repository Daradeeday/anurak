'use client'

import { motion } from 'framer-motion'

export default function Particles(){
  const stars = Array.from({length: 8})
  return (
    <div aria-hidden className='pointer-events-none absolute inset-0'>
      {stars.map((_, i)=> (
        <motion.div
          key={i}
          className='absolute w-3 h-3 rounded-full bg-white/80'
          initial={{opacity:0, scale:0, y:0, x:0}}
          animate={{
            opacity:[0,.8,0],
            scale:[0,1,0],
            y:[0, -30 - i*6, 0],
            x:[0, (i%2===0?1:-1)*(30 + i*4), 0]
          }}
          transition={{ duration: 5 + (i%5), repeat: Infinity, delay: i*0.3 }}
          style={{ left: `${10 + i*10}%`, bottom: `${10 + (i%4)*12}%` }}
        />
      ))}
    </div>
  )
}

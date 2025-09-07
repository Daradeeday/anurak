'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Particles from './Particles'

const DRIVE_URL = 'https://drive.google.com/drive/folders/1FB4M-J66GoDySdOIhpHecnbPivLMRi6D?usp=sharing'

export default function Card(){
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      className='relative max-w-sm w-full rounded-3xl overflow-hidden shadow-soft drop-shadow-glow'
      style={{ background: 'linear-gradient(180deg, #FFCC29 0%, #FFC107 100%)' }}
    >
      <div className='absolute inset-0 bg-[url(/noise.png)] opacity-10 mix-blend-overlay pointer-events-none' />
      <div className='p-6 sm:p-7'>
        <div className='flex items-baseline gap-2'>
          <span className='inline-flex items-center justify-center w-6 h-6 rounded bg-black text-brand-yellow font-black'>★</span>
          <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-none'>
            ANURAK<br/>TNS13
          </h1>
        </div>
        <div className='mt-1 inline-flex text-xs font-bold px-3 py-1 rounded-full bg-black text-white'>
          PHOTO
        </div>

        {/* Doodle block substitute with animated particles */}
        <div className='relative mt-4 rounded-2xl bg-white/90 p-4 overflow-hidden'>
          <Particles />
          <div className='relative z-10 grid grid-cols-6 gap-2'>
            {Array.from({length: 18}).map((_,i)=>(
              <motion.div
                key={i}
                className='aspect-square rounded-md bg-black/90'
                initial={{scale:.6, opacity:0, rotate:-10}}
                animate={{scale:1, opacity:.9, rotate:0}}
                transition={{delay: 0.05*i, type:'spring', stiffness: 200, damping: 18}}
              />
            ))}
          </div>
          <div className='absolute -top-10 -right-10 rotate-12'>
            <motion.div
              className='w-36 h-36 rounded-full bg-yellow-300 mix-blend-multiply'
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className='mt-6'
        >
          <Link
            href={DRIVE_URL}
            target='_blank'
            className='group inline-flex items-center justify-center w-full rounded-full bg-black text-white px-5 py-3 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300'
          >
            <span className='mr-2'>กดปุ่มเพื่อโหลดรูป</span>
            <motion.span
              aria-hidden
              className='inline-block'
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type:'spring', stiffness: 300, damping: 12 }}
            >
              →
            </motion.span>
          </Link>
          <p className='mt-2 text-center text-black/70 text-xs'>Opens Google Drive</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

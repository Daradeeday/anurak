'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Card from '@/components/Card';

export default function Page() {

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/40 to-transparent" />
      </div>

      {/* Floating accent blobs */}
      <motion.div
        aria-hidden={true}
        className="absolute -z-0 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-yellow-400/20 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{ top: '-20vh', right: '-10vw' }}
      />
      <motion.div
        aria-hidden={true}
        className="absolute -z-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-white/10 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        style={{ bottom: '-15vh', left: '-10vw' }}
      />

      {/* Content */}
      <section className="container relative z-10 py-20">
        <div className="grid md:grid-cols-[minmax(0,520px)_1fr] items-center gap-10">
          <Card />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Anurak.<br className="hidden sm:block" />Tns13.
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto md:mx-0">
              Step back into the mountains, smiles, and team spirit of the Conservation Camp – Triam Udom Suksa Nomklao Nakhon Ratchasima. Browse the gallery and download the photos that captured your best moments.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <Badge>Anurak</Badge>
              <Badge>Tns13</Badge>
              <Badge>Photo</Badge>
              <Badge>Family</Badge>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur text-sm">
      {children}
    </span>
  );
}

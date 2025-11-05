import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-end px-6 pb-16 pt-24 sm:pt-32 md:pb-24 lg:pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Vela Style
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-zinc-300"
        >
          Curatori di immagine e parrucchieri per uomo e donna. Eleganza contemporanea, dettagli su misura e creatività che profuma di stile.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#prodotti" className="rounded-full bg-white px-6 py-3 text-black transition hover:bg-zinc-200">
            I nostri prodotti
          </a>
          <a href="#contatti" className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-white/60">
            Prenota ora
          </a>
        </motion.div>
      </div>
    </section>
  );
}

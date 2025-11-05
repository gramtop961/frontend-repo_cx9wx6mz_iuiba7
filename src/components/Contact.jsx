import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contatti" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Contatti</h2>
          <p className="mt-2 text-zinc-400">
            Prenota un appuntamento o scrivici per una consulenza personalizzata. Siamo qui per valorizzare la tua unicità.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Nome</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-zinc-500 outline-none focus:border-white/30"
                  placeholder="Il tuo nome"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-zinc-300">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-zinc-500 outline-none focus:border-white/30"
                    placeholder="email@esempio.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-300">Telefono</label>
                  <input
                    type="tel"
                    className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-zinc-500 outline-none focus:border-white/30"
                    placeholder="+39"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Messaggio</label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-zinc-500 outline-none focus:border-white/30"
                  placeholder="Raccontaci di cosa hai bisogno"
                />
              </div>
              <button type="button" className="w-full rounded-md bg-white py-3 font-medium text-black transition hover:bg-zinc-200">
                Invia richiesta
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-center gap-3"><Phone size={18} className="text-white" /> +39 333 000 0000</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-white" /> info@velastyle.it</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-white" /> Via del Vento 12, Milano</li>
              <li className="flex items-center gap-3"><Instagram size={18} className="text-white" /> @velastyle.official</li>
            </ul>
            <div className="mt-8 h-56 w-full overflow-hidden rounded-xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
                alt="Salon"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

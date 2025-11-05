import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="chi-siamo" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">
              <Scissors size={16} /> Chi siamo
            </div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Artigiani dell'eleganza quotidiana</h2>
            <p className="text-zinc-300">
              Siamo curatori di immagine che uniscono tecnica e sensibilità artistica. Il nostro approccio è su misura: ascoltiamo, consigliamo e trasformiamo.
            </p>
            <p className="text-zinc-400">
              Dall'hair styling alla consulenza di look, ogni dettaglio nasce da una visione contemporanea di bellezza autentica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">
              <Sparkles size={16} /> La nostra mission
            </div>
            <h3 className="mt-4 text-2xl font-medium">Valorizzare l'unicità</h3>
            <p className="mt-3 text-zinc-300">
              Vogliamo donare ad ogni persona una forma di bellezza che rispetti la sua identità. Tagli sartoriali, colorazioni raffinate e rituali di cura, con materiali selezionati.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-white/60" /> Qualità senza compromessi</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-white/60" /> Esperienza premium e accogliente</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-white/60" /> Consulenza personalizzata</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

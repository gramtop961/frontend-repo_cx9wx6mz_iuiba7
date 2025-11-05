import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Linee professionali capelli',
    desc: 'Shampoo, maschere e styling a base di ingredienti selezionati per una cura completa.',
    tag: 'Capelli',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Profumi d\'autore',
    desc: 'Fragranze moderne con note pulite e luminose. Un tocco di personalità in ogni scia.',
    tag: 'Fragranze',
    image:
      'https://images.unsplash.com/photo-1556228010-2d8f8b4f8b3b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Strumenti di styling',
    desc: 'Spazzole, piastre e phon selezionati per prestazioni professionali a casa.',
    tag: 'Tools',
    image:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e9a80?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Products() {
  return (
    <section id="prodotti" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">I nostri prodotti</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Una selezione curata per trattamenti professionali e rituali quotidiani. Solo ciò che amiamo davvero.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

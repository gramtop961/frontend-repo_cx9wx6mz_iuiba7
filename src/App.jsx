import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import { Scissors } from 'lucide-react';

function App() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Chi siamo', href: '#chi-siamo' },
    { label: 'La mission', href: '#chi-siamo' },
    { label: 'Prodotti', href: '#prodotti' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <Scissors size={16} />
            </span>
            <span className="text-lg font-semibold">Vela Style</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contatti" className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200 md:inline-block">
            Prenota
          </a>
        </div>
      </header>

      {/* Main sections */}
      <main className="pt-16">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-10 text-zinc-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Vela Style — Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#chi-siamo" className="transition hover:text-white">Chi siamo</a>
            <a href="#prodotti" className="transition hover:text-white">Prodotti</a>
            <a href="#contatti" className="transition hover:text-white">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

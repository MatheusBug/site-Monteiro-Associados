import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'O Escritório', href: '#sobre' },
    { name: 'Atuação', href: '#atuacao' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-navy-950/95 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between relative z-50">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <Scale className={`w-8 h-8 transition-colors ${isScrolled ? 'text-gold-500' : 'text-gold-400'}`} />
          <div className="flex flex-col">
            <span className={`font-serif text-xl md:text-2xl font-bold leading-none tracking-wide transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
              MONTEIRO
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500">
              & Associados
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold-500 relative group ${isScrolled ? 'text-slate-200' : 'text-white/90'
                }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className={`cursor-pointer border px-5 py-2 text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${isScrolled
              ? 'border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-navy-900'
              }`}
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-navy-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-2xl font-serif text-slate-200 hover:text-gold-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
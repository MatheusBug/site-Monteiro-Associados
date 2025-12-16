import React from 'react';
import FadeIn from './ui/FadeIn';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Escritório de advocacia moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl pt-20">
        <div className="max-w-3xl">
          <FadeIn direction="up" delay={0.2}>
            <div className="inline-block px-3 py-1 mb-6 border-l-2 border-gold-500 bg-white/5 backdrop-blur-sm">
              <span className="text-gold-400 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                Excelência & Estratégia Jurídica
              </span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Defendendo seus interesses com <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">autoridade</span> e integridade.
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.6}>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
              Soluções jurídicas personalizadas para empresas e famílias. 
              Compromisso inegociável com a ética e a obtenção dos melhores resultados possíveis.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 text-white font-semibold text-sm uppercase tracking-widest hover:bg-gold-700 transition-colors shadow-lg hover:shadow-gold-500/20"
              >
                Fale com um Advogado
              </a>
              <a
                href="#atuacao"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-colors backdrop-blur-sm"
              >
                Conheça Nossas Áreas
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <a href="#sobre" className="text-white/50 hover:text-gold-500 transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
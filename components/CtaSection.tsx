import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';

const CtaSection: React.FC = () => {
  return (
    <Section id="cta" className="bg-slate-100 border-y border-slate-200">
      <div className="text-center max-w-4xl mx-auto">
        <FadeIn direction="up">
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold mb-6">
            Diante de um desafio jurídico, a <span className="text-gold-600">estratégia</span> define o resultado.
          </h2>
          <p className="text-slate-600 text-lg mb-10 font-light">
            Agende uma reunião inicial para entendermos o seu caso e desenharmos a melhor solução jurídica.
          </p>
          <a
            href="#contato"
            className="inline-block bg-navy-900 text-white px-10 py-4 font-semibold uppercase tracking-widest hover:bg-gold-600 transition-colors shadow-lg"
          >
            Entrar em Contato
          </a>
        </FadeIn>
      </div>
    </Section>
  );
};

export default CtaSection;
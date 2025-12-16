import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { ShieldCheck, Clock, Award } from 'lucide-react';

const Differentiators: React.FC = () => {
  return (
    <div id="diferenciais" className="relative py-20 bg-navy-900 text-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn direction="right">
              <h2 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Nossos Diferenciais</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Por que escolher o Monteiro & Associados?
              </h3>
              <p className="text-slate-300 text-lg font-light mb-8 text-justify">
                Não somos apenas advogados; somos parceiros estratégicos do seu negócio e da sua família. Nossa abordagem combina a tradição do Direito com ferramentas modernas de gestão e tecnologia.
              </p>
              
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                    <ShieldCheck />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 font-serif">Segurança Jurídica</h4>
                    <p className="text-slate-400 text-sm">Análise preventiva rigorosa para mitigar riscos e evitar litígios desnecessários.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 font-serif">Agilidade e Foco</h4>
                    <p className="text-slate-400 text-sm">Respeito ao tempo do cliente com comunicação clara, direta e atualizações constantes.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                    <Award />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 font-serif">Excelência Reconhecida</h4>
                    <p className="text-slate-400 text-sm">Profissionais com sólida formação acadêmica e reconhecimento no meio jurídico.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>
          
          <div className="relative">
             <FadeIn direction="left" delay={0.3}>
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" 
                  alt="Executivo trabalhando" 
                  className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <p className="text-gold-400 italic font-serif text-lg">"A justiça é a constante e perpétua vontade de dar a cada um o que é seu."</p>
                   <p className="text-white text-xs mt-2 uppercase tracking-widest">— Ulpiano</p>
                </div>
              </div>
             </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differentiators;
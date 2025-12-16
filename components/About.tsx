import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <Section id="sobre" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <FadeIn direction="up">
            <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Sobre o Escritório</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-navy-900 font-bold mb-8 leading-tight">
              Uma trajetória marcada pela dedicação e rigor técnico.
            </h3>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className="prose prose-lg text-slate-600 font-light text-justify">
              <p className="mb-6">
                Fundado com o propósito de oferecer uma advocacia artesanal e estratégica, o escritório <strong>Monteiro & Associados</strong> consolidou-se como referência no mercado jurídico. Entendemos que cada cliente possui necessidades únicas, e por isso, oferecemos um atendimento personalizado, pautado na escuta ativa e na análise minuciosa de cada caso.
              </p>
              <p>
                Nossa equipe é composta por profissionais altamente qualificados e em constante atualização, prontos para atuar em demandas complexas com agilidade e precisão.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-slate-50 border-t-4 border-gold-500 shadow-sm">
                <h4 className="font-serif text-xl font-bold text-navy-900 mb-2">Missão</h4>
                <p className="text-sm text-slate-600">Prover soluções jurídicas de excelência, gerando valor e segurança para nossos clientes.</p>
              </div>
              <div className="p-6 bg-slate-50 border-t-4 border-navy-800 shadow-sm">
                <h4 className="font-serif text-xl font-bold text-navy-900 mb-2">Visão</h4>
                <p className="text-sm text-slate-600">Ser reconhecido pela integridade, inovação e resultados expressivos na advocacia nacional.</p>
              </div>
              <div className="p-6 bg-slate-50 border-t-4 border-gold-500 shadow-sm">
                <h4 className="font-serif text-xl font-bold text-navy-900 mb-2">Valores</h4>
                <p className="text-sm text-slate-600">Ética, Transparência, Lealdade, Comprometimento e Excelência Técnica.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Image Composition */}
        <FadeIn direction="left" delay={0.3} className="relative h-full min-h-[500px] hidden lg:block">
           <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-navy-900 z-0"></div>
           <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
            alt="Reunião de negócios" 
            className="absolute top-10 right-10 w-4/5 h-4/5 object-cover z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
           <div className="absolute bottom-20 left-0 bg-white p-8 shadow-xl max-w-xs z-20 border-l-4 border-gold-500">
             <p className="font-serif text-2xl text-navy-900 italic">"O Direito não é apenas uma profissão, é um sacerdócio."</p>
           </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default About;
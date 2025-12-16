import React from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { Scale, Building2, Users, FileText, Landmark, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const areas = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Direito Empresarial",
    description: "Assessoria consultiva e contenciosa para empresas, visando segurança jurídica e crescimento sustentável."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Direito Civil",
    description: "Atuação em responsabilidade civil, contratos, obrigações e disputas patrimoniais complexas."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Família e Sucessões",
    description: "Planejamento sucessório, divórcios e inventários, tratados com discrição e sensibilidade."
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Direito Tributário",
    description: "Planejamento fiscal estratégico e defesa em execuções fiscais administrativas e judiciais."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Trabalhista Patronal",
    description: "Defesa dos interesses corporativos na gestão de passivos trabalhistas e negociações sindicais."
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Resolução de Conflitos",
    description: "Mediação e arbitragem como alternativas eficientes para solução de litígios."
  }
];

const PracticeAreas: React.FC = () => {
  return (
    <Section id="atuacao" className="bg-slate-50">
      <div className="text-center mb-16">
        <FadeIn direction="up">
          <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Áreas de Atuação</h2>
          <h3 className="font-serif text-4xl text-navy-900 font-bold">Expertise Multidisciplinar</h3>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <FadeIn key={index} direction="up" delay={index * 0.1}>
            <div className="group bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <div className="mb-6 p-4 bg-navy-50 text-navy-900 rounded-full w-fit group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors duration-300">
                {area.icon}
              </div>
              <h4 className="font-serif text-2xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                {area.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-light">
                {area.description}
              </p>
              <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/em-desenvolvimento" className="text-sm font-bold text-navy-900 uppercase tracking-wider hover:text-gold-600 flex items-center gap-2">
                  Saiba mais <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default PracticeAreas;
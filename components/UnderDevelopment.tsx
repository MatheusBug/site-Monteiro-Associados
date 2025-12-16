import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const UnderDevelopment: React.FC = () => {
    return (
        <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center p-6 text-center">
            <FadeIn direction="up">
                <div className="bg-navy-900 border border-gold-500/30 p-12 rounded-lg shadow-2xl max-w-lg mx-auto">
                    <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Construction className="text-gold-500 w-10 h-10" />
                    </div>

                    <h1 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
                        Em Desenvolvimento
                    </h1>

                    <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>

                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Estamos trabalhando nos detalhes desta página para oferecer a melhor experiência possível. Em breve, novidades.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-gold-600 text-white font-semibold text-sm uppercase tracking-widest hover:bg-gold-700 transition-colors"
                    >
                        Voltar ao Início
                    </Link>
                </div>
            </FadeIn>
        </div>
    );
};

export default UnderDevelopment;
